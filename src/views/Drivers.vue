<template>
<div class="drivers">
  <div v-for="(info, i) in getCoords" :key="i">
    <div class="row" style="border: 1px solid #ccc">
      <div class="col-3">
        <img :src="info.avatar" class="form-control" :alt="info.name">
      </div>
      <div class="col-9">
        <div class="row">
          Ford transit {{ info.id }}
        </div>
        <div class="row">
          <h3>{{ info.name }}</h3>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "Drivers",
  computed: {
    getCoords() {
      return this.$store.getters.getCoords
    }
  },
}
</script>

<style scoped>

</style>
