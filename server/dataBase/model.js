import mongoose from "mongoose";

const { Schema } = mongoose;

const newsSchema = new Schema({
  type: Number,
  title: String,
  newsText: String,
  status: Number,
});

export const NewsModel = mongoose.model("news", newsSchema);
