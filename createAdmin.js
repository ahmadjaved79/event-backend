const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("./models/Admin");

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const hashedPassword = await bcrypt.hash("admin123", 10); // you can change this password
  const newAdmin = new Admin({
    username: "admin",           // change username if needed
    password: hashedPassword
  });

  await newAdmin.save();
  console.log("✅ Admin created successfully");
  mongoose.disconnect();
}).catch(err => {
  console.error("❌ Error connecting to MongoDB:", err);
});
