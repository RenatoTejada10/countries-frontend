<script setup lang="ts">
    import * as icons from '@mdi/js/'

    export interface IProps {
        icon: Icon
        name?: string
        zIndex?: number
    }

    const componentProps = defineProps<IProps>()
    const { icon } = toRefs(componentProps)

    defineOptions({ inheritAttrs: true })
</script>

<template>
    <svg
        fill="currentColor"
        class="pointer-events-none"
        viewBox="0 0 24 24"
    >
        <path :d="icons[icon]" />
    </svg>
</template>
