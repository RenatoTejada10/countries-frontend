<script setup lang="ts">
    import { companyCreate, companyUpdate } from '~/models/company'

    definePageMeta({ layout: 'dashboard' })

    const { item, items, onItem, suspense } = useList('companies')
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
            <span class="block w-full">Precio: {{ value.price }}</span>
        </div>
    </div>
    <hr class="h-4" />
    <CommonForm
        :item="item"
        model="companies"
        class="max-w-[400px]"
        :schemas="[companyCreate, companyUpdate]"
        @reset="onItem(null)"
    >
        <FieldInput
            name="name"
            placeholder="Nombre"
        />
        <hr class="h-4" />
        <FieldInput
            name="price"
            placeholder="Precio"
        />
        <hr class="h-4" />
        <FieldSelect
            model="countries"
            name="country"
        />
    </CommonForm>
</template>
