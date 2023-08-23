import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { TripSchema } from '../models/Trip.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Trips = mongoose.model('Trip', TripSchema)

}

export const dbContext = new DbContext()
