import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { validateLead } from '@/lib/lead-validation';
import { leadReady, webhookAdapter } from '@/lib/lead-adapter';
import { allowLead } from '@/lib/rate-limit';
export const runtime = 'nodejs';
export async function POST(request: NextRequest) {
  const respond = (body: object, status: number) => NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
  const origin = request.headers.get('origin');
  const expected = process.env.NEXT_PUBLIC_SITE_URL || `${request.nextUrl.protocol}//${request.headers.get('host') || request.nextUrl.host}`;
  if (!origin || origin !== new URL(expected).origin) return respond({ message: 'Origem da solicitação inválida.' }, 403);
  if (!request.headers.get('content-type')?.includes('application/json')) return respond({ message: 'Formato inválido.' }, 415);
  if (Number(request.headers.get('content-length') || 0) > 8192) return respond({ message: 'Solicitação muito grande.' }, 413);
  try {
    const text = await request.text();
    if (Buffer.byteLength(text) > 8192) return respond({ message: 'Solicitação muito grande.' }, 413);
    let input: unknown; try { input = JSON.parse(text); } catch { return respond({ message: 'Dados inválidos.' }, 400); }
    const { data, errors } = validateLead(input);
    if (!data) return respond({ message: 'Confira os campos do formulário.', errors }, 422);
    if (!leadReady()) return respond({ message: 'O recebimento de solicitações está em configuração. Nenhum dado foi enviado ou salvo.' }, 503);
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
    if (!await allowLead(ip)) return respond({ message: 'Muitas tentativas. Aguarde alguns minutos e tente novamente.' }, 429);
    await webhookAdapter.submit(data, randomUUID());
    return respond({ message: 'Solicitação recebida pelo canal comercial. A equipe entrará em contato pelo WhatsApp informado.' }, 201);
  } catch { return respond({ message: 'Não foi possível confirmar o recebimento. Tente novamente mais tarde.' }, 502); }
}
