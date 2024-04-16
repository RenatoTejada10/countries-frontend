<script setup lang="ts">
    import { useField } from 'vee-validate'
    import type { InputTypeHTMLAttribute } from 'vue'

    export interface IProps {
        name: string
        placeholder?: string
        readonly?: boolean
        type?: InputTypeHTMLAttribute
    }

    const props = defineProps<IProps>()
    const { name, placeholder, readonly, type } = toRefs(props)

    const { errorMessage, value } = useField(name)
</script>

<template>
    <label class="flex w-full cursor-text items-center justify-between gap-4 rounded-xl border border-solid border-gray-400 bg-white px-4">
        <input
            v-model="value"
            autocomplete="off"
            class="w-full bg-transparent py-[12px] outline-none"
            :name="name"
            :placeholder="placeholder"
            :readonly="readonly"
            :type="type || 'text'"
        />
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
