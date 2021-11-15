import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema(
  {
    profile_id: String,
    name: String,
    start_date: Date,
    check_date: Date,
    cryptocurrency: String,
    divisa: String,
    Crypto_price_start: Number,
    Crypto_price_check: Number,
  },
  {
    timestamps: true,
  }
);

export const Simulator = mongoose.model("Simulator", schema);
