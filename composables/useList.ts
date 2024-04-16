import { useQuery } from '@tanstack/vue-query'

export const useList = (model: string) => {
    const { data, suspense } = useQuery({
        queryFn: async () => {
            const response = await fetch(`http://localhost:4000/${model}`)
            return await response.json()
        },
        queryKey: [model],
    })

    const item = ref<any>(null)
    const items = computed<any[]>(() => data.value || [])

    const onItem = (value: any) => {
        item.value = value
    }

    return { item, items, onItem, suspense }
}
