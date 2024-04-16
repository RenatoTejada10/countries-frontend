<script setup lang="ts">
    import { countryCreate, countryUpdate } from '~/models/country'

    definePageMeta({ layout: 'dashboard' })

    const { item, items, onItem, suspense } = useList('countries')
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
        </div>
    </div>
    <hr class="h-4" />
    <CommonForm
        :item="item"
        model="countries"
        class="max-w-[400px]"
        :schemas="[countryCreate, countryUpdate]"
        @reset="onItem(null)"
    >
        <FieldInput
            name="name"
            placeholder="Nombre"
        />
        <hr class="h-4" />
        <FieldInput
            name="code"
            placeholder="Código"
        />
        <hr class="h-4" />
        <FieldInput
            name="numberCode"
            placeholder="Código de teléfono"
        />
    </CommonForm>
</template>
