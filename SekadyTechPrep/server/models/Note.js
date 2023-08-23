import { Schema } from "mongoose";

export const NoteSchema = new Schema({
  body: { type: String, required: true, minLength: 3, maxLength: 200 },
  tripId: { type: String, required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true, default: true },
  isAttending: { type: Boolean, required: false }
})

NoteSchema.virtual('creator', {
  ref: 'Account',
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true
})