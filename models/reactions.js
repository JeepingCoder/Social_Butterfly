const {Schema, model} = require("mongoose");

const reactionSchema = new Schema(
    {
    reactionId: {
        type:Schema.Types.ObjectId,
        default: new Schema.Types.ObjectId() 
    },
    reationBody: {
        type:String,
        required:true,
        maxLength: 280,
    },
    username: {
        type:String,
        required: true,
    },
    createdAt:{
       type: Date,
       default: Date.now(),
    //    getter method
    }

})
module.exports = reactionSchema