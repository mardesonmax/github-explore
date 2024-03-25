/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import path from 'path';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [react(), eslint()],
    resolve: {
      alias: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
    },
  };
});
