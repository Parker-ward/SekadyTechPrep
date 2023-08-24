import { Auth0Provider } from "@bcwdev/auth0provider";
import { tripsService } from "../services/TripsService.js";
import BaseController from "../utils/BaseController.js";

export class TripsController extends BaseController {
  constructor() {
    super('/api/trips')
    this.router
      .post('', this.createTrip)
      .get('', this.getAllTrips)
      .get('/:tripId', this.getTripById)
      .use(Auth0Provider.getAuthorizedUserInfo)

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

  async cancelTrip(req, res, next) {

    try {
      const tripId = req.params.tripId
      const requestorId = req.userInfo.id
      const trip = await tripsService.cancelTrip(tripId, requestorId)
      return res.send(trip)
    } catch (error) {
      next(error)
    }
  }
}