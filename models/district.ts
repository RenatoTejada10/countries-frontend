import { zod } from '~/helpers/zod'

export const districtCreate = zod.object({
    city: zod.string().min(1).default(''),
    name: zod.string().min(1).default(''),
})

export const districtUpdate = districtCreate.merge(
    zod.object({
        id: zod.string().min(1),
    })
)
