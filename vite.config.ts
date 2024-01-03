import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // or specify your desired output directory
    rollupOptions: {
      external: ['./QuestionVideo.mp4'], // Add the video file to external dependencies
    },
  },
  // ...other configurations
});
