const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    postedBy: {
      // to create a reference, the type should be Object
      type: mongoose.Schema.Types.ObjectId,
      // ref is also needed, so we can poulate the owner
      ref: "User",
      // Note: Populate means replacing the owner id with the person document...

      required: true,
    },
    commentText: {
      type: String,
      required: true,
    },

    thumbnail: String, // Maybe better to pull it from the owner.

    published_at: {
      createdAt: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comments = mongoose.model("Comment", commentSchema);
module.exports = Comments;
