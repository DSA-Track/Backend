import mongoose from 'mongoose';

const connectMongo: () => Promise<void> = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "");
        console.log("Database Connected");
    }
    catch (err) {
        console.error("Database Connection Failed\n", err)
    }

}

export default connectMongo