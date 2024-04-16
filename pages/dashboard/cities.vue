<script setup lang="ts">
    import { cityCreate, cityUpdate } from '~/models/city'

    definePageMeta({ layout: 'dashboard' })

    const { item, items, onItem, suspense } = useList('cities')
    onServerPrefetch(async () => await suspense())
</script>

<template>
    <div class="grid w-full grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        <div
            v-for="(value, index) in items"
            :key="index"
            class="w-full cursor-pointer rounded-xl border border-solid border-gray-400 bg-white p-4"
            @click="() => onItem(value)"
        >
            <span class="block w-full">{{ value.name }}</span>
            <span class="block w-full">Distritos: {{ value.districts?.length || 0 }}</span>
        </div>
    </div>
    <hr class="h-4" />
    <CommonForm
        :item="item"
        model="cities"
        class="max-w-[400px]"
        :schemas="[cityCreate, cityUpdate]"
        @reset="onItem(null)"
    >
        <FieldInput
            name="name"
            placeholder="Nombre"
        />
        <hr class="h-4" />
        <FieldSelect
            model="countries"
            name="country"
        />
    </CommonForm>
</template>
