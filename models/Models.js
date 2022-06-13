const mongoose = require("mongoose");


const id = (schema) => {
  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
      delete ret._id;
    },
  });
};

//user
const UserSchema = new mongoose.Schema({
  user_fullname: {
    type: String,
  },
  user_phone: {
    type: String,
  },
  user_university_email: {
    type: String,
  },
  user_program: {
    type: String,
  },
  user_department: {
    type: String,
  },
  user_password: {
    type: String,
  },
  user_gender: {
    type: String,
  },
});

id(UserSchema);

const User = new mongoose.model("Users", UserSchema);


module.exports = {User};
