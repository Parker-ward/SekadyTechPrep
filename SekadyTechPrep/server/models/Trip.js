import { Schema } from "mongoose";

export const TripSchema = new Schema({

  name: { type: String, required: true, minLength: 3, maxLength: 25 },
  location: { type: String, required: true, minLength: 3, maxLength: 100 },
  img: { type: String, required: true },
  capacity: { type: Number, required: true, min: 0 },
  startDate: { type: String, required: true },
  isCanceled: { type: Boolean, required: true, default: false },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
}, { timestamps: true, toJSON: { virtuals: true } })

TripSchema.virtual('creator', {
  ref: 'Account',
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true
})