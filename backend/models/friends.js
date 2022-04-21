const mongoose = require("mongoose");
const Joi = require("joi");
// const {replySchema} = require('./reply');

const friendSchema = new mongoose.Schema({
    name:{type:String, required:true,min:1},
    status:{type:String, required:true, min:1},
    id:{type:String, required:true}
});


function validateFriend(friend){
    const schema = Joi.object({
        name:Joi.string().required().min(1).max(255),
        status:Joi.string(),
        id:Joi.string(),
    })
    return schema.validate(friend)
}

const Friend = mongoose.model("Friend", friendSchema);


module.exports={
    friendSchema,
    Friend,
    validateFriend
}