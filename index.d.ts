import type * as mdi from '@mdi/js'

declare global {
    type Icon = keyof typeof mdi
}

declare module '#app' {
    interface NuxtApp {}
}

export {}
