const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  { 
    number: {
      type: String,
      required: [true, 'Name field is required.']
    },
    name: {
      type: String,
      required: [true, 'Level field is required.']
    },
    account: {
      type: String,
      required: [true, 'Account field is required.']
    },
    password: {
      type: String,
      required: [true, 'Password field is required.']
    },
    shop: {
      type: String,
      required: [true, 'Shop field is required.']
    },
    phoneNum: {
      type: String,
      required: [true, 'PhoneNum field is required.']
    },
    title: {
      type: String,
      required: [true, 'Title field is required.']
    },
    inService: {
      type: String,
      required: [true, 'In-service field is required.']
    },
  }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("user", DataSchema);
