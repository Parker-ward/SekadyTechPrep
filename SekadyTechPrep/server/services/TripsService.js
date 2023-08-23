import { dbContext } from "../db/DbContext.js"

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
}

export const tripsService = new TripsService()