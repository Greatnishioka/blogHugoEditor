import { defineConfig, presetIcons } from 'unocss';
import presetWind3 from '@unocss/preset-wind3'

const config = {
  content: {
    filesystem: [
      'app/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}',
      'app/**/*.*{html,js,ts,jsx,tsx,vue,svelte,astro}',
    ],
  },
  presets: [
    presetWind3(),
    presetIcons(),
  ],
};
export default defineConfig(config);