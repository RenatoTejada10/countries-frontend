import { QueryClient, type DehydratedState, type VueQueryPluginOptions, VueQueryPlugin, dehydrate, hydrate } from '@tanstack/vue-query'

export default defineNuxtPlugin((nuxt) => {
    const vueQueryState = useState<DehydratedState | null>('vue-query')

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: { placeholderData: (prev: any) => prev, staleTime: 2 * 60 * 60 * 1000 },
        },
    })

    const options: VueQueryPluginOptions = { queryClient }

    nuxt.vueApp.use(VueQueryPlugin, options)

    if (process.server) {
        nuxt.hooks.hook('app:rendered', () => {
            vueQueryState.value = dehydrate(queryClient)
        })
    }

    if (process.client) {
        hydrate(queryClient, vueQueryState.value)
    }
})
