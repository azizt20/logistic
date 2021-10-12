<template>
  <div class="drivers">

    <a-rows type="flex" align="middle" v-for="info in getCoords" :key="info.id">
      <a-row type="flex" align="middle" justify="start" class="box">
        <a-row type="flex" align="middle" justify="start" class="border w-100">
          <a-col :span="6" align="middle">
            <a-avatar :src="info.avatar"/>
          </a-col>
          <a-col :span="18" align="middle" justify="start">
            <div class="text-left">
              Ford transit {{ info.id }}
            </div>
            <div class="text-left">
              <h3>{{ info.name }}</h3>
            </div>
          </a-col>
        </a-row>
        <a-col :span="12">
          <a-button type="link" @click="find(info.id)"> <a-icon type="search" /> Найти </a-button>
        </a-col>
        <a-col :span="12">
          <a-button type="link" href="tel:99894"> <a-icon type="phone" /> Связаться </a-button>
        </a-col>

      </a-row>
    </a-rows>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";


const {mapGetters: mapMapGetters, mapActions: mapMapActions, mapState: mapMapState} = createNamespacedHelpers('map')


export default {
  name: "Drivers",
  computed: {
    ...mapMapState({
      selectedDriver: 'selectedDriver'
    }),
    ...mapMapGetters(["getCoords", "getCoordsById"]),

  },
  methods: {
    ...mapMapActions({
      getDrivers: 'getFakeDrivers',
      findDriver: 'findDriver'
    }),
    find(id) {
      this.findDriver(id).then(() => {
        this.$router.push('map')
      })

    },
  },
  mounted() {
    this.getDrivers()
  },
}
</script>

<style scoped>
.box {
  border: 1px solid #ccc;
  border-radius: 7px;
  box-shadow: 2px 2px #0000001A;
  margin: 5px;
}
</style>
