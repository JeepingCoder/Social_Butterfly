const { Schema, model, Types } = require("mongoose");
const {format} = require('date-fns');

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: ()=> new Types.ObjectId(),
  },
  reationBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: (timestamp) => format(timestamp, "dd/MM/yyyy HH:mm:ss"),
  },
},
{
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
module.exports = reactionSchema;
