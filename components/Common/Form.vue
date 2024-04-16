<script setup lang="ts">
    import { useQueryClient } from '@tanstack/vue-query'
    import { toTypedSchema } from '@vee-validate/zod'
    import { useForm } from 'vee-validate'
    import type { ZodSchema } from 'zod'

    export interface IEmits {
        (name: 'reset'): void
    }

    export interface IProps {
        item: any
        model: string
        schemas: ZodSchema[]
    }

    const emits = defineEmits<IEmits>()
    const props = defineProps<IProps>()
    const { item, model, schemas } = toRefs(props)

    const client = useQueryClient()

    const index = ref(0)
    const validationSchema = computed(() => toTypedSchema(schemas.value[index.value]))

    const { handleSubmit, resetForm, setValues } = useForm({ validationSchema })

    watch(
        item,
        (value) => {
            if (value) {
                index.value = 1
                resetForm(undefined, { force: true })
                const data = removeReactive(value)
                if ('country' in data) data.country = formatPopulate(data.country)
                if ('city' in data) data.city = formatPopulate(data.city)
                if ('district' in data) data.district = formatPopulate(data.district)
                if ('company' in data) data.company = formatPopulate(data.company)
                setValues(data, false)
            }
        },
        { deep: true, immediate: true }
    )

    const onReset = () => {
        index.value = 0
        resetForm(undefined, { force: true })
        emits('reset')
    }

    const onSubmit = handleSubmit(async (input) => {
        if ('id' in input) {
            const { id, ...rest } = input
            await fetch(`http://localhost:4000/${model.value}/${input.id}`, {
                body: JSON.stringify(rest),
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT',
            })
        } else {
            await fetch(`http://localhost:4000/${model.value}`, {
                body: JSON.stringify(input),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
            })
        }
        await client.invalidateQueries({ exact: false, queryKey: [model.value] })
        onReset()
    })

    defineOptions({ inheritAttrs: true })
</script>

<template>
    <form
        class="block w-full rounded-xl border border-solid border-gray-400 bg-white p-4"
        @submit="onSubmit"
    >
        <slot></slot>
        <hr class="h-4" />
        <div class="flex items-center justify-start gap-4">
            <button
                class="h-10 rounded-xl border border-solid border-gray-400 px-4"
                type="button"
                @click="onReset"
            >
                Cancelar
            </button>
            <button
                type="submit"
                class="h-10 rounded-xl border border-solid border-gray-400 px-4"
            >
                {{ item ? 'Actualizar' : 'Crear' }}
            </button>
        </div>
    </form>
</template>
