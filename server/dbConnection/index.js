import mongoose from "mongoose";

const DB_CONNECTION_URL = `mongodb+srv://whatsappclone:yqVF0kialZqsXA30@localdb.3dk81.mongodb.net/whatsapp-clone?retryWrites=true&w=majority`;

const connectDB = () => {
  console.log("DB trying to connect on " + new Date());

  const options = {
    keepAlive: 1,
    autoReconnect: true,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  return mongoose.connect(DB_CONNECTION_URL, options);
};
export default connectDB;
