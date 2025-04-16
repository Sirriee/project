import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  numberOfRooms: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
  
 
}); 

export const Hotel = mongoose.model("Hotel", hotelSchema);

