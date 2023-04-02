const {Schema, model} = require("mongoose");

const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
      },
      email:{
        type: String,
        required:true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
        },
        toughts: [
            {
                type: Schema.Types.ObjectId,
                ref:"Thought"
            }
        ],
        friends: [
            {
                type: Schema.Types.UserId,
                ref:"User"
            }
        ]
    }
);
const User = model("User", userSchema)
module.exports = User