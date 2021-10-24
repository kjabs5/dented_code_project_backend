import mongoose from 'mongoose';

const CustomerSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        max: 20
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
        index: 1
    },
    isEmailConfirmed: {
        type: Boolean,
        required: true,
        default: false
    },
    phone: {
        type: String,
        required: false,
        default: "",
        max: 20
    },
    address: {
        type: String,
        required: false,
        default: ""
    },
    fname: {
        type: String,
        required: false,
        default: ""
    },
    lname: {
        type: String,
        required: false,
        default: ""
    },
    dob: {
        type: Date,
        required: false,
        default: ""
    },
    gender: {
        type: String,
        required: false,
        default: ""
    }

}, {
    timestamps: true,
})

const customer = mongoose.model("Customer", CustomerSchema);
export default customer;