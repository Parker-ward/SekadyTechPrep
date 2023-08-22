import { Schema } from "mongoose";

export const NoteSchema = new Schema({
  body: { type: String, required: true, minLength: 3, maxLength: 200 },
  tripId: { type: String, required: true }
})