import { z } from 'zod'

z.setErrorMap((error) => {
    if (error.code === 'invalid_type') {
        if (error.expected === 'number') return { message: `El campo debe ser de tipo numérico` }
        if (error.expected === 'string') return { message: `El campo debe ser de tipo texto` }
    }

    if (error.code === 'too_big') {
        if (error.type === 'string') return { message: `El campo debe tener como máximo ${error.maximum} ${error.maximum === 1 ? 'carácter' : 'caracteres'}` }
    }

    if (error.code === 'too_small') {
        if (error.type === 'string') return { message: `El campo debe tener como mínimo ${error.minimum} ${error.minimum === 1 ? 'carácter' : 'caracteres'}` }
    }

    if (error.code === 'invalid_string') {
        if (error.validation === 'email') return { message: `El campo debe ser un correo electrónico valido` }
    }

    return { message: 'Error desconocido' }
})

export const zod = z
