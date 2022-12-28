import mongoose from "mongoose";

const connection = {}

async function connect() {
    mongoose.set('strictQuery', false)
    if(connection.isConnected){
        console.log('already connected');
        return;
    }
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log("new connection")
    connection.isConnected = db.connections[0].readyState;
}

export default connect;