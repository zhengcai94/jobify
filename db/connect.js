import mongoose from "mongoose";


// since we're using mongoose v6, we don't need to add anymore deprecation warns.
const connectDB = (url) => {
    return mongoose.connect(url);
}

export default connectDB;