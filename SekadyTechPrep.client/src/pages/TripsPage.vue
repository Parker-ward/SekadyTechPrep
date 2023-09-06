<template>
  <!-- <h3>Hello trips page</h3> -->
  <div class="container-fluid mt-2 boarder boarder-dark" v-if="trip">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="d-flex justify-content-center rounder circle">
          <img class="rounded-circle" :src="trip.img" alt="">
        </div>
      </div>
    </div>
    <div class="text-center">
      <p>
        {{ trip.location }}
      </p>
      <p>
        {{ trip.startDate }}
      </p>
      <div class="btn btn-danger">Delete</div>

    </div>
  </div>
</template>


<script>
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop.js';
import { computed, onMounted } from 'vue';
import { tripsService } from '../services/TripsService.js';
import { router } from '../router.js';
import { AppState } from '../AppState.js';

export default {

  setup() {
    onMounted(() => {
      getTripById()
    })
    const route = useRoute()

    async function getTripById() {
      try {
        const tripId = route.params.tripId
        await tripsService.getTripById(tripId)
      } catch (error) {
        Pop.error
        router.push("/")
      }
    }


    return {
      trip: computed(() => AppState.trip)
    }
  }
}
</script>


<style lang="scss" scoped></style>