export const formatId = <T>(id: T) => {
    if (Array.isArray(id)) return id[0] as string
    return id as string
}

export const removeReactive = <T extends object | object[]>(obj: T) => {
    return JSON.parse(JSON.stringify(obj)) as T
}

export const formatPopulate = (populate: any) => {
    if (typeof populate === 'string') return populate as string
    if (typeof populate === 'object') return populate.id as string
    return ''
}
