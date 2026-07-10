/**
 * Aplica o link do carrinho w12 em todos os CTAs marcados com [data-cart-link].
 * Fica isolado para caso o link mude (nova campanha, novo carrinho).
 *
 * Também dispara o evento Meta Pixel `Lead` quando o usuário clica num CTA
 * de compra (indicador de intenção antes de ir pro carrinho externo).
 */

import { CART_URL } from '../copy/content.js';

export function initCartLinks() {
  document.querySelectorAll('[data-cart-link]').forEach((el) => {
    el.href = CART_URL;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
    el.addEventListener('click', () => {
      const ctaName = el.dataset.cta || 'unknown';
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', { content_name: ctaName });
      }
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', { cta_name: ctaName });
      }
    });
  });
}
