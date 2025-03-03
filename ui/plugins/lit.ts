import { UiButton } from '../components/UiButton';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  if (
    typeof window !== 'undefined'
    && customElements
    && !customElements?.get('ui-button')
  ) {
    customElements.define('ui-button', UiButton);
  }
});
