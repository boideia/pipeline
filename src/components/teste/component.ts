import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement('orb-teste')
export class OrbTeste extends LitElement {

  render() {
    return html`
      <div>teste</div>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'orb-teste': OrbTeste
  }
}
