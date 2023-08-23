import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class TripsService {
  async getAllTrips() {
    const trips = await dbContext.Trips.find()
    return trips
  }
  async createTrip(tripData) {
    const trip = await dbContext.Trips.create(tripData)
    await trip.populate('creator', 'name picture')
    return (trip)
  }

  async getTripById(tripId) {

    const trip = await dbContext.Trips.findById(tripId)
      .populate('creator', 'name picture')
    if (!trip) {
      throw new BadRequest('Invalid Event ID')
    }
    return trip
  }
}

export const tripsService = new TripsService()