
const mongoose = require("mongoose");

const connectionString = process.env.MONGODB_URI;


let dbConnection = async () => {
    try {
        mongoose.set('strictQuery', true)
        const conn = await mongoose.connect(connectionString,  {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log(`Database connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = dbConnection;