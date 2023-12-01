import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  optimizeDeps: {
    include: [
      'lit',
      'lit/decorators.js', // Se estiver usando decorators
    ],
  },

  build: {
    rollupOptions: {
      input: {
        // Caminhos para os arquivos dos seus componentes
        button: path.resolve(__dirname, 'src/components/button/component.ts'),
        teste: path.resolve(__dirname, 'src/components/teste/component.ts'),
      },
      output: {
        // Cria um arquivo separado para cada componente
        entryFileNames: 'lib/[name].js',
        format: 'es',
        chunkFileNames: 'lib/[name]-[hash].js',
        dir: 'dist', // Diretório de saída dos arquivos gerados
      },
    },
  },
});
