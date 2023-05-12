import mongoose from "mongoose";
const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },

  photos: {
    type: [String],
  },
  carpetarea: {
    type: Number,
    required: true,
  },
  bedroom: {
    type: Number,
    required: true,
  },
  bathsroom: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  perdayrent: {
    type: Number,
    required: true,
  },
  permonthrent: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: true,
  },
  rooms: {
    type: [String],
  }
});

export default mongoose.model("Hotel", HotelSchema)