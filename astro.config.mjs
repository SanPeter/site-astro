import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import svelte from "@astrojs/svelte";
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Éric St-Pierre',
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), 
  svelte(),
  UnoCSS({
    injectReset: true,
  }),
]
});