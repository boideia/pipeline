// src/components/button/button.stories.ts
import { html } from 'lit';
import './component.ts'; // Importe o componente

export default {
  title: 'Components/Button', // Título da sua história
  argTypes: {}, // Argumentos ou configurações opcionais do Storybook
};

export const Default = () => html`
  <orb-button></orb-button>
`;
