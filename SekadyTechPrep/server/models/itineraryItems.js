import { Schema } from "mongoose";

export const itineraryItemsSchema = new Schema({

  name: { type: String, required: true, minLength: 3, maxLength: 25 },
  confirmationNumber: { type: String, required: true, minLength: 10, maxLength: 10 },
  address: { type: String, required: true, },
  date: { type: String, required: true, },
  cost: { type: Number, required: true, },

})