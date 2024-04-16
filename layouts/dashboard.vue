<script setup lang="ts">
    const routes = ref([
        {
            name: 'Países',
            to: { name: 'dashboard-countries' },
        },
        {
            name: 'Ciudades',
            to: { name: 'dashboard-cities' },
        },
        {
            name: 'Distritos',
            to: { name: 'dashboard-districts' },
        },
        {
            name: 'Compañías',
            to: { name: 'dashboard-companies' },
        },
        {
            name: 'Usuarios',
            to: { name: 'dashboard-users' },
        },
    ])
</script>

<template>
    <div class="w-full pl-[300px]">
        <aside class="fixed left-0 top-0 h-dvh w-[300px] bg-gray-50">
            <div class="grid w-full grid-cols-1 gap-4 p-4">
                <NuxtLink
                    v-for="(route, index) in routes"
                    :key="index"
                    :to="route.to"
                    class="flex h-[40px] w-full items-center rounded-xl bg-gray-200 px-4"
                >
                    <span>{{ route.name }}</span>
                </NuxtLink>
            </div>
        </aside>
        <main class="p-4">
            <slot />
        </main>
    </div>
</template>
