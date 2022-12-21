const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String },
  mobile: { type: String },
  address: { type: String },
  occupation: { type: String },
  income: { type: String },
  idProofNumber: { type: String },
  userName: { type: String },
  password: { type: String },
});

mongoose.model("user", UserSchema);
