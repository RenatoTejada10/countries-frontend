<script setup lang="ts">
    import { useField } from 'vee-validate'

    export interface IProps {
        model: string
        name: string
        readonly?: boolean
    }

    const props = defineProps<IProps>()
    const { model, name, readonly } = toRefs(props)

    const { errorMessage, value } = useField(name)

    const { items, suspense } = useList(model.value)
    onServerPrefetch(async () => await suspense())
</script>

<template>
    <label class="flex w-full cursor-text items-center justify-between gap-4 rounded-xl border border-solid border-gray-400 bg-white px-4">
        <select
            v-model="value"
            :readonly="readonly"
            class="w-full bg-transparent py-[12px] outline-none"
            :name="name"
        >
            <option
                v-for="(item, index) in items"
                :key="index"
                :value="item.id"
            >
                {{ item.name }}
            </option>
        </select>
        <div
            v-if="errorMessage"
            class="flex h-12 items-center text-red-500"
        >
            <CommonIcon
                class="size-4"
                icon="mdiAsterisk"
            />
        </div>
    </label>
</template>
