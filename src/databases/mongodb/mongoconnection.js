import mongoose from "mongoose";
import 'dotenv/config';

export const mongodb_conection = mongoose.connect(process.env.MONGO_DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}) 
    .then(console.log(`Database ${process.env.DB_NAME} connected...`))
    .catch(error => {console.log('DATABASE CONNECTION ERROR : ' + error)})