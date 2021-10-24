import express from 'express';
import { createCustomer } from "../models/customer-model/Customer.model.js";
import { createCustomerValidation } from '../middlewares/customerFormValidation.middleware.js';
import { hashedPassword } from '../helpers/bcrypt.helper.js';
const Router = express.Router();

Router.all("/", (req, res, next) => {
    console.log("from customer router");
    next();
})

Router.post("/", createCustomerValidation, async (req, res) => {
    try {
        console.log(req.body);
        const hashPass = hashedPassword(req.body.password);
        if (hashPass) {
            req.body.password = hashPass;
            //Call to model method that has been imported to create customer
            const result = await createCustomer(req.body);
            if (result?._id) {
                return res.json({
                    state: "success",
                    message: "Thank you for registering with us. We have sent an email confirmation to your email, please check and follow the instruction to activate the account"
                });
            }
        }
        return res.json({
            state: "error",
            message: "Error, Unable to Register. Please contact adminstration"
        })
    }
    catch (error) {
        console.log(error.message);
        let msg = "Error, Unable to Register. Please contact adminstration";
        if (error?.message?.includes("E11000 duplicate key error collection")) {
            msg = "User with this email address already exist"
        }

        return res.json({
            state: "error",
            message: msg
        })
    }

})

export default Router;