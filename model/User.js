const { Mongoose } = require("mongoose")
 const UserSchema = new Mongoose.Schema({
     name:{
         type:String,
         required:true
     },
     email:{
         type:String,
         required:true,
         unique:true
     },
     password:{
         required:true,
         type:String
     },
     avatar:{
         type:String
     },
     date:{
         type:Date,
         default:Date.now
     }
 });

 module.exports=User=Mongoose.model('user',UserSchema);