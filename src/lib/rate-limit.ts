import 'server-only';
import { createHmac } from 'node:crypto';
const local = new Map<string, { count: number; expires: number }>();
// Redis em produção. Não confie no X-Forwarded-For sem um proxy que o sobrescreva.
export async function allowLead(ip: string): Promise<boolean> {
  const secret = process.env.RATE_LIMIT_SECRET || 'local-development-only';
  const hash = createHmac('sha256', secret).update(ip).digest('hex');
  const bucket = `cds:lead:${hash}:${Math.floor(Date.now() / 600000)}`;
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    const response = await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/pipeline`, { method: 'POST', signal: AbortSignal.timeout(5000), headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`, 'Content-Type': 'application/json' }, body: JSON.stringify([['INCR', bucket], ['EXPIRE', bucket, 600]]) });
    if (!response.ok) throw new Error('Rate limit indisponível');
    const results = await response.json() as Array<{ result?: number; error?: string }>;
    if (results.some(r => r.error) || typeof results[0]?.result !== 'number') throw new Error('Rate limit inválido');
    return results[0].result <= 5;
  }
  if (process.env.NODE_ENV === 'production') throw new Error('Rate limit não configurado');
  for (const [key, entry] of local) if (entry.expires < Date.now()) local.delete(key);
  const entry = local.get(bucket) || { count: 0, expires: Date.now() + 600000 };
  entry.count++; local.set(bucket, entry); return entry.count <= 5;
}
