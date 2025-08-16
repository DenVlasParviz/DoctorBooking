import mongoose from 'mongoose';

const MONGODB_URI     = process.env.MONGO_DB_URI
const MONGODB_NAME = process.env.MONGODB_DB_NAME

async function connectMongo() {
    try {
        const uri = `${MONGODB_URI}/${MONGODB_NAME}`;
        await mongoose.connect(uri, {});

        console.log("✅ Connected to MongoDB:", MONGODB_NAME);
        return mongoose.connection.db; // это как client.db(...)
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
        throw err;
    }
}

export default connectMongo;
