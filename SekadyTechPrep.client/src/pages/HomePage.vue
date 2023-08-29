<template>
  <div class="text-center">
    <h1>Hello Home Page</h1>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div v-for="t in trips" :key="t.id" class="col-md-3">
        <TripCard :trip="t" />
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-end my-3 p-2 fixed-bottom">
    <button class="btn btn-success col-md-1" title="New trip" @click="createTrip" data-bs-toggle="modal"
      data-bs-target="#createTrip"><i class="mdi mdi-plus"></i>
    </button>
  </div>
</template>

<script>
import Pop from '../utils/Pop.js';
import { tripsService } from '../services/TripsService.js';
import { computed, onMounted } from 'vue';
import TripCard from '../components/tripCard.vue';
import { AppState } from '../AppState.js';

export default {
  setup() {
    async function getAllTrips() {
      try {
        await tripsService.getAllTrips();
      }
      catch (error) {
        Pop.error('error', "get all my trips");
      }
    }
    onMounted(() => {
      getAllTrips();
    });
    return {
      trips: computed(() => {
        return AppState.trips
      })
    };
  },
  components: { TripCard }
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