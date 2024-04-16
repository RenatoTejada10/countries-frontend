export default defineNuxtConfig({
    app: {
        head: {
            bodyAttrs: { class: 'overflow-y-scroll bg-white text-black dark:bg-black dark:text-white' },
            htmlAttrs: { class: 'scroll-smooth antialiased' },
        },
    },
    css: ['~/assets/css/main.css'],
    devtools: { enabled: true },
    modules: ['@pinia/nuxt', '@nuxtjs/color-mode'],
    nitro: { experimental: { websocket: true } },
    postcss: {
        plugins: {
            /* eslint-disable */
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {},
    typescript: {
        typeCheck: true,
    },
    colorMode: {
        classSuffix: '',
    },
})
