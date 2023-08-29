<template>
  <div class="TripCard card">
    <img :src="trip.img" alt="">
  </div>
  <div class="card-body text-center">
    <p><b>{{ trip.location }}</b></p>
  </div>
</template>


<script>
export default {
  props: {
    trip: { type: Object, required: true }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped></style>