import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  antfu(),
  ...tailwind.configs['flat/recommended'],
)
