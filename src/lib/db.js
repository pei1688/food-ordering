//連接mongoose資料庫

import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("成功連接至MONGODB");
    // console.clear()
  } catch (error) {
    console.error(`Error:${error.message}`);
    // process.exit(1);
  }
}
