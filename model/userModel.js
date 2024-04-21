const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

var userSchema = mongoose.Schema({
    email: {
    type: String,
    required: true,
    unique: true,
    },
});

userSchema.plugin(passportLocalMongoose); //Vai adicionar username e password ao schema

module.exports = mongoose.model("User", userSchema);