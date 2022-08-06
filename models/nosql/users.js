const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const UserScheme = new mongoose.Schema(
    {
        name:{
            type:String
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String,
            select:false //todo el select es para que no se este mostrando el jwt
        },
        role:{
            type:["user", "admin"],
            default:"user",
        },
    },

    {
        timestamps:true,  //TODO para hacer las marcas de tiempo o, como indica "timestamps" createdAt, updatedAt
        versionKey:false
    }
);
UserScheme.plugin(mongooseDelete,{overrideMethods:'all'});
module.exports=mongoose.model("users", UserScheme)