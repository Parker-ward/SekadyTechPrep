import { Schema } from "mongoose";

export const itineraryItemsSchema = new Schema({

  name: { type: String, required: true, minLength: 3, maxLength: 25 },
  confirmationNumber: { type: String, required: true, minLength: 10, maxLength: 10 },
  address: { type: String, required: true, },
  date: { type: String, required: true, },
  price: { type: Number, required: true, },
  creatorId: { type: String, required: true },
  tripId: { type: Schema.Types.ObjectId, ref: 'Trip', required: true },
  tripType: { type: String, required: true, minLength: 3, maxLength: 500, enum: ['plane', 'car', 'beach', 'themepark', 'hotel', 'condo', 'house', 'bus', 'car'] }
})