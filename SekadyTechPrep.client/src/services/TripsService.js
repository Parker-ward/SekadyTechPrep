import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class TripsService {
  async createTrip(tripData) {
    const res = await api.post('/api/trips', tripData)
    logger.log("created a trip", res.data)
    AppState.trips.push(res.data)
    return res.data
  }

  async getAllTrips() {
    const res = await api.get('api/trips')
    const trips = res.data
    logger.log("getting all trips", res.data)
    AppState.trips = trips
  }

  async getTripById(tripId) {
    AppState.trip = null
    const res = await api.get('api/trips/' + tripId)
    logger.log('[trip by id]', res.data)
    AppState.trip = (res.data)
  }
}

export const tripsService = new TripsService()