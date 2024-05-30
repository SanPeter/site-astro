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
      },
      {
        label: 'Guide - Clifford',
        link: '/guides/clifford/'
      },
      {
        label: 'Guide - Rover',
        link: '/guides/rover/'
      },
      {
        label: 'Guide - Spot',
        link: '/guides/spot/'
      }]
    }, {
      label: 'Reference',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Reference',
        link: '/reference/example/'
      },
      {
        label: 'Reference - 1',
        link: '/references/reference-1/'
      },
      {
        label: 'Reference - 2',
        link: '/references/reference-2/'
      },
      {
        label: 'Reference - 3',
        link: '/references/reference-3/'
      }],
      autogenerate: {
        directory: 'reference'
      }
    }],
    customCss: [
      './src/styles/global.css',
    ],
    lastUpdated: true,
    tableOfContents: false,
  }), 
  svelte(),
  UnoCSS({
    injectReset: true,
  }),
]
});