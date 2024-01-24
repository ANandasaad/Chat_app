const mongoose = require("mongoose");
const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://ait17bcs3888:789aditya729@cluster0.zlbywlq.mongodb.net/chatapp?retryWrites=true&w=majority"
  );
};

module.exports = connect;
