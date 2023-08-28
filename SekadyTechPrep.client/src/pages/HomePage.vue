<template>
  <div class="text-center">
    <h1>Hello Home Page</h1>
  </div>
  <div class="d-flex justify-content-end my-3 p-2 fixed-bottom">
    <button class="btn btn-success col-md-1" title="New trip" @click="createTrip" data-bs-toggle="modal"
      data-bs-target="#createTrip"><i class="mdi mdi-plus"></i>
    </button>
  </div>
</template>

<script>
import Pop from '../utils/Pop.js';
import { tripsService } from '../services/tripsService.js'
import { onMounted } from 'vue';

export default {
  setup() {

    async function getAllTrips() {
      try {
        await tripsService.getAllTrips()
      } catch (error) {
        Pop.error('error', "get all my trips")
      }
    }

    onMounted(() => {
      getAllTrips()
    })
    return {}
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
../services/TripsService.js