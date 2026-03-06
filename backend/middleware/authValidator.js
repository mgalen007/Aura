import loginSchema from '../schemas/loginSchema.js'
import registerSchema from '../schemas/registerSchema.js'


const validateAuth = (type) => async (req, res, next) => {
    if (type == 'login') {
        try {
            const value = await loginSchema.validateAsync(req.body, { stripUnknown: true })
            req.value = value
            next()
        } catch(error) {
            if (error.isJoi) {
                return res.status(400).json({
                    error: error.details[0].message
                })
            }
            res.status(500).json({
                error: 'An error occured, try again later'
            })
        }
    } else if (type == 'register') {
        try {
            const value = await registerSchema.validateAsync(req.body, { stripUnknown: true })
            req.value = value
            next()
        } catch(error) {
            if (error.isJoi) {
                return res.status(400).json({
                    error: error.details[0].message
                })
            }
            res.status(500).json({
                error: 'An error occured, try again later'
            })
        }
    } 
}

export default validateAuth