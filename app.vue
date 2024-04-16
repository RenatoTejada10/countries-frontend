<script setup lang="ts">
    import { VueQueryDevtools } from '@tanstack/vue-query-devtools'

    onMounted(() => {
        document.addEventListener('click', (event) => {
            const target = event.target

            if (target instanceof HTMLButtonElement) {
                target.blur()
            }
        })
    })
</script>

<template>
    <NuxtLoadingIndicator
        :color="'#8750f7'"
        :height="4"
    />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
    <VueQueryDevtools />
</template>
