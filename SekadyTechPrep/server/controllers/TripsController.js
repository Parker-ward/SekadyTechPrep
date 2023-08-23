import { tripsService } from "../services/TripsService.js";
import BaseController from "../utils/BaseController.js";

export class TripsController extends BaseController {
  constructor() {
    super('/api/trips')
    this.router
      .post('', this.createTrip)
      .get('', this.getAllTrips)
      .get('/:tripId', this.getTripById)
  }
  async getTripById(req, res, next) {
    try {
      const tripId = req.params.tripId
      const trip = await tripsService.getTripById(tripId)
      return res.send(trip)
    } catch (error) {
      next(error)

    }
  }
  async getAllTrips(req, res, next) {
    try {
      const tripId = req.params.tripId
      const trip = await tripsService.getAllTrips()
      res.send(trip)
    } catch (error) {
      next(error)
    }
  }
  async createTrip(req, res, next) {
    try {
      const tripData = req.body
      tripData.creatorId = req.userInfo._id
      const trip = await tripsService.createTrip(tripData)
      return res.send(trip)
    } catch (error) {
      next(error)
    }
  }
}