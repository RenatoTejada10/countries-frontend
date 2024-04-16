import type { Config } from 'tailwindcss'

const tailwind: Config = {
    content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue', './nuxt.config.ts'],
    darkMode: 'class',
}

export default tailwind
