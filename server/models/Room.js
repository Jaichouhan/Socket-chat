const mongoose = require("mongoose");

const Room = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter a User Name"],
    },
  },
  { timestamps: true }
);

const UserName = mongoose.model("user-name", Room);

module.exports = UserName;
