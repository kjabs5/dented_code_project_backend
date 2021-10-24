import Joi from 'joi';


export const createCustomerValidation = (req, res, next) => {
    console.log(req.body);
    console.log("server validation here");
    //creating schema that the request body needs to pass
    const schema = Joi.object({
        username: Joi.string().max(20).alphanum().required(),
        password: Joi.string().min(8).required(),
        email: Joi.string().max(50).email({ minDomainSegments: 2 }).required()
    });
    const value = schema.validate(req.body);
    if (value.error) {
        return res.json({
            state: "error",
            message: value.error.message
        })
    }
    next();
}