// uno.config.ts
import { 
    defineConfig,
    presetUno, 
    transformerDirectives,
    transformerVariantGroup
} from 'unocss'

export default defineConfig({
    content: {filesystem: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}']} ,
    presets: [
        presetUno(),
      ],
      transformers: [transformerDirectives(), transformerVariantGroup()]
})