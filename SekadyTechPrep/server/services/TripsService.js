import { dbContext } from "../db/DbContext.js"

class TripsService {
  getAllTrips() {
    throw new Error("Method not implemented.")
  }
  async createTrip(tripData) {
    const trip = await dbContext.Trips.create(tripData)
    await trip.populate('creator', 'name picture')
    return (trip)
  }
}

export const tripsService = new TripsService()