import 'server-only';
import type { Lead } from './lead-validation';
export interface LeadAdapter { submit(lead: Lead, requestId: string): Promise<void> }
export function leadReady() { return Boolean(process.env.LEAD_WEBHOOK_URL?.startsWith('https://') && process.env.LEAD_PRIVACY_APPROVED === 'true' && (process.env.NODE_ENV !== 'production' || (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN && (process.env.RATE_LIMIT_SECRET?.length || 0) >= 32))); }
export const webhookAdapter: LeadAdapter = { async submit(lead, requestId) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url || !url.startsWith('https://')) throw new Error('Adapter indisponível');
  const { website: _website, ...contact } = lead;
  void _website;
  const response = await fetch(url, { method: 'POST', signal: AbortSignal.timeout(10000), headers: { 'Content-Type': 'application/json', 'Idempotency-Key': requestId, ...(process.env.LEAD_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.LEAD_WEBHOOK_TOKEN}` } : {}) }, body: JSON.stringify({ ...contact, source: 'site-para-revendas', consentVersion: 'privacidade-v1', requestedAt: new Date().toISOString(), requestId }) });
  if (!response.ok) throw new Error('Destino recusou a solicitação');
} };
