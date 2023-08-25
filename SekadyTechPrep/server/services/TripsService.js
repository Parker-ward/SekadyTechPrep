import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class TripsService {
  async editTrip(tripId, tripData, requestorId) {
    const foundTrip = await this.getTripById(tripId)
    if (foundTrip.isCanceled) {
      throw new BadRequest('Trip has be canceled')
    }
    if (foundTrip.creatorId.toString() != requestorId) {
      throw new Forbidden('You can not edit this trip')
    }
    foundTrip.name = tripData.name || tripData.name
    foundTrip.location = tripData.location || foundTrip.location
    foundTrip.startDate = tripData.startDate || foundTrip.startDate

    await foundTrip.save()
    return foundTrip
  }
  async cancelTrip(tripId, requestorId) {
    const trip = await this.getTripById(tripId)
    if (trip.creatorId.toString() != requestorId) {
      throw new Forbidden('You are NOT allowed to do that buckaroo')
    }
    if (trip.isCanceled == false) {
      trip.isCanceled = true
    }
    await trip.save()
    return trip
  }
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