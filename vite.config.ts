import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',
  assetsInclude: ['**/*.JPG', '**/*.JPEG', '**/*.png', '**/*.gif', '**/*.svg'], // Add other image formats as needed
});
