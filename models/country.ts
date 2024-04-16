import { zod } from '~/helpers/zod'

export const countryCreate = zod.object({
    code: zod.string().min(1).default(''),
    name: zod.string().min(1).default(''),
    numberCode: zod.number().default(0),
})

export const countryUpdate = countryCreate.merge(
    zod.object({
        id: zod.string().min(1),
    })
)
