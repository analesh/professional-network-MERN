const mongoose =require('mongoose');
const config = require('config');

const db= config.get('mongoURI');

const connectDB = async () => {
    try{
  await mongoose.connect(db);
  console.log("Mongoose connected");
    }catch(err){
console.log(err.message);
//Exit process
process.exit(1);
    }
}

module.exports=connectDB;