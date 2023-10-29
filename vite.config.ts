import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';
import ffmpeg from '@motion-canvas/ffmpeg';

export default defineConfig({
  plugins: [
    motionCanvas({
      project: [
        './src/projects/exemple.ts',
        './src/projects/bubbleSort.ts',
      ]
    }),
    ffmpeg(),
  ],
});
