<script setup lang="ts">
    import { userCreate, userUpdate } from '~/models/user'

    definePageMeta({ layout: 'dashboard' })

    const { item, items, onItem, suspense } = useList('users')
    onServerPrefetch(async () => await suspense())
</script>

<template>
    <div class="grid w-full grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
        <div
            v-for="(value, index) in items"
            :key="index"
            class="w-full cursor-pointer rounded-xl border border-solid border-gray-400 bg-white p-4"
            @click="() => onItem(value)"
        >
            <span class="block w-full text-xl font-medium">{{ value.name }}</span>
            <span class="block w-full">País: {{ value.country.name }}</span>
            <span class="block w-full">Ciudad: {{ value.city.name }}</span>
            <span class="block w-full">Distrito: {{ value.district.name }}</span>
            <span class="block w-full">Compañía: {{ value.company.name }}</span>
        </div>
    </div>
    <hr class="h-4" />
    <CommonForm
        :item="item"
        model="users"
        class="max-w-[400px]"
        :schemas="[userCreate, userUpdate]"
        @reset="onItem(null)"
    >
        <FieldInput
            name="name"
            placeholder="Nombre"
        />
        <hr class="h-4" />
        <FieldInput
            name="document"
            placeholder="Documento"
        />
        <hr class="h-4" />
        <FieldSelect
            model="countries"
            name="country"
        />
        <hr class="h-4" />
        <FieldSelect
            model="cities"
            name="city"
        />
        <hr class="h-4" />
        <FieldSelect
            model="districts"
            name="district"
        />
        <hr class="h-4" />
        <FieldSelect
            model="companies"
            name="company"
        />
    </CommonForm>
</template>
