import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import svelte from "@astrojs/svelte";
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Éric St-Pierre',
    social: {
      github: 'https://github.com/SanPeter',
      linkedin: 'https://www.linkedin.com/in/%C3%A9ric-st-pierre-0aa167145',
    },
    sidebar: [{
      label: 'Caching',
      collapsed: true,
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'How to start a formula 1 engine - and improve our site visitor experience',
        link: '/posts/caching-strategy-part-1/'
      },
      {
        label: 'How to start a formula 1 engine - and improve our site visitor experience (part 2)',
        link: '/posts/caching-strategy-part-2/'
      },
      {
        label: 'How to start a formula 1 engine - and improve our site visitor experience (part 3)',
        link: '/posts/caching-strategy-part-3/'
      }]
    }, {
      label: 'How to fix',
      collapsed: true,
      items: [
        {
          label: 'How to fix database migration issues',
          link: '/posts/how-to-fix-database-migration-issues/'
        },
      ],
      
    }, {
      label: 'The move to .NET5',
      collapsed: true,
      items: [
        {
        label: 'The move to .NET5',
        link: '/posts/move-net5-intro/'
        },
        {
          label: 'What are the benefits of moving to a .NET5 Optimizely implementation?',
          link: 'posts/move-net5-benefits/'
        },
        {
          label: 'What are the Optimizely implementation references for .NET5 sites?',
          link: '/posts/move-net5-reference-sites/'
        },
        {
          label: 'What will the .NET release cycle look like?',
          link: '/posts/move-net5-release-lifecycle/'        
        },
        {
          label: 'Dotnet CLI basis',
          link: '/posts/move-net5-dotnet-cli-basis/'
        },
        {
          label: 'Dotnet CLI templates',
          link: '/posts/move-net5-cli-templates/'
        },
        {
          label: 'Create some Optimizely sites on .NET5',
          link: '/posts/move-net5-optimizely-sites/'
        },
        {
          label: 'Running Optimizely sites on macOS',
          link: '/posts/running-optimizely-sites-on-macos/'
        },
      ], 
    }, {
      label: 'What\'s Inside Foundation',
      collapsed: true,
      items: [{
        label: 'What’s Inside Foundation – Features Folder – Introduction',
        link: '/posts/foundation-features-folder-introduction/'
      },
      {
        label: 'What’s Inside Foundation – Features Folder – Implementation',
        link: '/posts/foundation-features-folder-implementation/'
      },
      {
        label: 'What’s Inside Foundation – Razor ViewEngine and Blocks',
        link: '/posts/foundation-razorviewengine-blocks/'
      }],
    }, {
      label: 'Personalization',
      collapsed: true,
      items: [
        {
          label: 'Personalization - An introduction',
          link: '/posts/personalization-introduction/'        
        }, 
        {
          label: 'Personalization - Segmentation',
          link: '/posts/personalization-segmentation/'
        }, 
        {
          label: 'Personalization - Segmentation - Implementation',
          link: '/posts/personalization-segmentation-implementation/'
        },
        {
          label: 'Personalization - Content recommendation',
          link: '/posts/personalization-content-recommendation/'
        },
        {
          label: 'Personalization - Content recommendation - Implementation (part 1)',
          link: '/posts/personalization-content-recommendation-implementation-part-1/'
        },
        {
          label: 'Personalization - Content recommendation - Implementation (part 2)',
          link: '/posts/personalization-content-recommendation-implementation-part-2/'
        },
        {
          label: 'Personalization - Content recommendation - The Future',
          link: '/posts/personalization-content-recommendation-future/'
        }
      ],
      
    }, {
      label: 'Solution setup',
      collapsed: true,
      items: [
        {
          label: 'Solution Setup – .gitignore',
          link: '/posts/solution-setup-gitignore/'
        },
        {
          label: 'Solution setup – Config files',
          link: '/posts/solution-setup-config-files/'
        },
        {
          label: 'Solution Setup – Front-End stack – Part 1',
          link: '/posts/setup-front-end-stack-part-1/'
        },
        {
          label: 'Solution Setup – Front-End stack – Part 2',
          link: '/posts/setup-front-end-stack-part-2/' 
        }
      ],
      
    }, {
      label: 'SaaS Core',
      collapsed: true,
      items: [
        {
          label: 'Transitioning to Optimizely SaaS Core: Enhancing My Digital Presence',
          link: '/posts/transitioning-to-optimizely-saas-core-enhancing-my-digital-presence/'
        }
      ],
      
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