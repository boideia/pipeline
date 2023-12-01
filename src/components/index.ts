// src/componentes/index.ts

// Importe individualmente os componentes
import { OrbButton } from './button/component.ts';
import { OrbTeste } from './teste/component.ts';

// Exporte cada componente individualmente
export { OrbButton };
export { OrbTeste };

// Exporte um arquivo principal que importa todos os componentes
export * from './button/component.ts';
export * from './teste/component.ts';