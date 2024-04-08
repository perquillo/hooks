import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src', '!src/**/*.test.*'],
  format: ['cjs', 'esm'],
  external: ['react'],
  treeshake: true,
  injectStyle: false,
  dts: true,
  minify: true,
  splitting: false,
  sourcemap: true,
  clean: true
});
