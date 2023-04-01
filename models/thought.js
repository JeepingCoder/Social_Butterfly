const {Schema, model} = require("mongoose");
const reactionSchema = require("./reactions");
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type:String,
            required:true,
            maxLength: 280,
            minLength: 1
        },
        createdAt: {
            type:Date,
            default: Date.now(),
            // getter method timestamp query
            
        },
        username:{
            type:String,
            required: true,

        },
        reactions: [
            {
                type: reactionSchema,
                ref:"thoughts" 
            }
        ]
    })
    const Thought = model("Thought", thoughtSchema)
module.exports = Thought