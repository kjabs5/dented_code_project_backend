import mongoose from 'mongoose';


const mongoClient = async () => {
    try {
        if (!process.env.MONGO_CLIENT) {
            console.log("MONGO_CLIENT is not defined, please create db connection");
        }
        const con = await mongoose.connect(process.env.MONGO_CLIENT)
        if (con) {
            return console.log("mongodb connected");
        }
        console.log("failed to connect mongodb");
    }
    catch (error) {
        console.log(error);
    }
}

export default mongoClient;