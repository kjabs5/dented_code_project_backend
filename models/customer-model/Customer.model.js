import CustomerSchema from "./Customer.schema.js";

export const createCustomer = newCustomer => {
    try {
        const result = CustomerSchema(newCustomer).save();
        return result;
    } catch (error) {
        throw new Error(error);
    }
}
