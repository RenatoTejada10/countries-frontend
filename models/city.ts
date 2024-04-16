import { zod } from '~/helpers/zod'

export const cityCreate = zod.object({
    country: zod.string().min(1).default(''),
    name: zod.string().min(1).default(''),
})

export const cityUpdate = cityCreate.merge(
    zod.object({
        id: zod.string().min(1),
    })
)
