export type Lead = { name: string; dealership: string; phone: string; city: string; challenge: string; consent: boolean; website: string };
export const challenges = ['RENAVE/NF-e', 'Estoque', 'Vendas/CRM', 'Financeiro', 'Tudo em um lugar'];
export function validateLead(value: unknown): { data?: Lead; errors: Record<string, string> } {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return { errors: { form: 'Dados inválidos.' } };
  const input = value as Record<string, unknown>;
  const clean = (key: string, max: number) => typeof input[key] === 'string' ? input[key].trim().slice(0, max) : '';
  const data: Lead = { name: clean('name', 120), dealership: clean('dealership', 160), phone: clean('phone', 30).replace(/\D/g, ''), city: clean('city', 100), challenge: clean('challenge', 40), consent: input.consent === true, website: clean('website', 200) };
  const errors: Record<string, string> = {};
  if (data.name.length < 2) errors.name = 'Informe seu nome.';
  if (data.dealership.length < 2) errors.dealership = 'Informe o nome da revenda.';
  if (!/^[1-9]{2}9\d{8}$/.test(data.phone)) errors.phone = 'Informe um WhatsApp válido com DDD (11 dígitos).';
  if (!data.consent) errors.consent = 'É necessário autorizar o contato para solicitar uma demonstração.';
  if (data.challenge && !challenges.includes(data.challenge)) errors.challenge = 'Escolha uma das opções disponíveis.';
  if (data.website) errors.form = 'Não foi possível validar a solicitação.';
  return { ...(Object.keys(errors).length ? {} : { data }), errors };
}
export function maskPhone(value: string) { const digits = value.replace(/\D/g, '').slice(0, 11); if (digits.length <= 2) return digits; if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`; return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`; }
