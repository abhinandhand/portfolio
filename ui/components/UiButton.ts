import { LitElement, css, html } from 'lit';

export class UiButton extends LitElement {
  static override properties = {
    name: { type: String, reflect: false },
  };

  static override styles = css`
    p {
      color: blue;
    }
  `;

  constructor() {
    super();
    this.name = 'default';
  }

  override render() {
    return html`<div><h2>Hello: ${this.name}</h2></div>`;
  }
}
