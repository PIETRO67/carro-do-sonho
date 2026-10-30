'use client';
export type AnalyticsEvent = 'view_demo' | 'start_lead_form' | 'submit_lead_success' | 'faq_open' | 'feature_tab_change';
// Sem tracker e sem envio de dados pessoais. Integração futura deve observar consentimento.
export function track(event: AnalyticsEvent, detail?: string) {
  if (typeof window === 'undefined' || window.localStorage.getItem('cds_analytics_consent') !== 'granted') return;
  window.dispatchEvent(new CustomEvent('cds:analytics', { detail: { event, detail } }));
}
