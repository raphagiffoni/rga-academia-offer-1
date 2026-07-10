/**
 * Aplica o link do carrinho w12 em todos os CTAs marcados com [data-cart-link].
 * Fica isolado para caso o link mude (nova campanha, novo carrinho).
 */

import { CART_URL } from '../copy/content.js';

export function initCartLinks() {
  document.querySelectorAll('[data-cart-link]').forEach((el) => {
    el.href = CART_URL;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });
}
