import { zod } from '~/helpers/zod'

export const companyCreate = zod.object({
    country: zod.string().min(1).default(''),
    name: zod.string().min(1).default(''),
    price: zod.number().default(0),
})

export const companyUpdate = companyCreate.merge(
    zod.object({
        id: zod.string().min(1),
    })
)
