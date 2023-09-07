<template>
  <router-link class="selectable" :to="{ name: 'Trips', params: { 'tripId': trip.id } }">
    <div class="TripCard card">
      <img class="rounded" :src="trip.img" alt="">
    </div>
  </router-link>
  <div class="card-body text-center">
    <p><b>{{ trip.location }}</b></p>
  </div>
</template>


<script>
import { useRoute } from 'vue-router';

export default {
  props: {
    trip: { type: Object, required: true }
  },
  setup() {
    useRoute()
    return {}
  }
}
</script>


<style lang="scss" scoped></style>