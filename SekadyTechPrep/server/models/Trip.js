import { Schema } from "mongoose";

export const TripSchema = new Schema({

  name: { type: String, required: true, minLength: 3, maxLength: 25 },
  location: { type: String, required: true, minLength: 3, maxLength: 100 },
  img: { type: String, required: true },

})