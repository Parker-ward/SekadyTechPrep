<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <textarea required type="text" name="description" v-model="editable.description" class="form-control"
        id="description" rows="3"></textarea>
    </div>
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <textarea required type="text" name="name" v-model="editable.name" class="form-control" id="name"
        rows="1"></textarea>
    </div>
    <div class="mb-3">
      <label for="coverImg" class="form-label">Cover Img</label>
      <input required type="text" v-model="editable.coverImg" class="form-control" id="coverImg" placeholder="CoverImg..."
        name="coverImg">
    </div>
    <div class="mb-3">
      <label for="startDate" class="form-label">Start Date</label>
      <input required type="date" v-model="editable.startDate" class="form-control" id="startDate" placeholder=""
        name="startDate">
    </div>
    <div class="mb-3">
      <label for="location" class="form-label">Location</label>
      <input required type="text" v-model="editable.location" class="form-control" id="location" placeholder="location"
        name="location">
    </div>
    <div class="mb-3">
      <label for="capacity" class="form-label">Capacity</label>
      <input required type="number" v-model="editable.capacity" class="form-control" id="capacity" placeholder="number"
        name="capacity">
    </div>
    <div class="mb-3">
      <label for="type" class="form-label">Type of Event</label>
      <input required type="text" v-model="editable.type" class="form-control" id="type" placeholder="" name="type">
    </div>
    <div>
      <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
        {{ editable.id ? 'Save Changes' : 'Create Event' }}
      </button>
    </div>
  </form>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped></style>