import Joi from "joi"

const schema = Joi.object({

    mail: Joi
        .string()
        .required()
        .min(8)

        .messages(
            {
                'string.min': 'El correo debe tener al menos 8 caracteres',
                'string.empty': 'El correo no puede estar vacío',
                'any.required': 'Se requiere un correo',
                'string.email': 'Es necesario un correo válido'
            }
        ),
    password: Joi
        .string()
        .required()
        .min(8)
        .max(50)
        .messages(
            {
                'string.min': 'La contraseña debe tener al menos 8 caracteres',
                'string.max': 'La contraseña no puede exceder los 50 caracteres',
                'string.empty': 'La contraseña no puede estar vacía',
                'any.required': 'Se requiere una contraseña',
            }
        ),
})

export default schema