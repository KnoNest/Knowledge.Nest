import mongoose from "mongoose"

const connectDB = async () => {
    try {
        
        await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
        const connection =  mongoose.connection

        connection.on("connected", () => {
            console.log("mongoDB connected successfully")
        })
        connection.on("error", () => {
            console.log("something went wrong while connecting to mongoDB")
        })


    } catch (error) {
        console.log(error.message || "something went wrong while connecting to mongoDB")
    }
}

export default connectDB