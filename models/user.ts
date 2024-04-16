import { zod } from '~/helpers/zod'

export const userCreate = zod.object({
    city: zod.string().min(1).default(''),
    company: zod.string().min(1).default(''),
    country: zod.string().min(1).default(''),
    district: zod.string().min(1).default(''),
    document: zod.string().min(1).default(''),
    name: zod.string().min(1).default(''),
})

export const userUpdate = userCreate.merge(
    zod.object({
        id: zod.string().min(1),
    })
)
