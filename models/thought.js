const { Schema, model } = require("mongoose");
const reactionSchema = require("./reactions");
const { format } = require("date-fns");
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxLength: 280,
    minLength: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: (timestamp) => format(timestamp, "dd/MM/yyyy HH:mm:ss"),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
const Thought = model("Thought", thoughtSchema);
module.exports = Thought;
