<template>
  <div class="map">

    <MainMenu class="main-menu"/>

    <yandex-map class="yandex-map" :coords=[] show-all-markers="true">

      <div v-for="info in getCoords"
           :key="info.id">
        <ymap-marker style="position: relative"
                     :marker-id="info.id"
                     :coords="info.coord"
                     :icon="{...markerIcon, content: 'info.name'}"
                     @click="select"

        />
        <DriverInfo />
      </div>
    </yandex-map>

    <a-layout-footer class="nav">
      <navbar/>
    </a-layout-footer>

  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import {yandexMap, ymapMarker} from 'vue-yandex-maps'
import Navbar from "../components/Navbar";
import DriverInfo from "../components/DriverInfo";
import MainMenu from "../components/MainMenu"

const { mapGetters: mapMapGetters, mapActions: mapMapActions } = createNamespacedHelpers('map')

export default {
  name: "Map",
  components: {yandexMap, ymapMarker, Navbar, MainMenu, DriverInfo},

  data() {
    return {
      // selectId: '',
      id: '',
      coords: [41.3082, 69.2598],
      markerIcon: {
        layout: 'default#imageWithContent',
        imageHref: 'https://image.flaticon.com/icons/png/512/33/33447.png',
        imageSize: [43, 43],
        imageOffset: [0, 0],
        content: '',
        contentOffset: [43, 20],
        contentLayout: '<div style="background: red; width: 100px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      }
    }
  },

  mounted() {
  this.getDrivers()
  },
  methods: {
    ...mapMapActions({
      getDrivers: 'getFakeDrivers'
    }),
    select (e) {
      // this.$store.dispatch('select');
      // this.selectId = e.get('cords');
      // alert(e)
      alert(e.get())
      // console.log(e.markerIcon)
    }
  },

  computed: {
    ...mapMapGetters(["getCoords"]),
  }
}
</script>

<style scoped>
.yandex-map {
  width: 100%;
  height: 100%;
}

.map {
  height: 100%;
  width: 100%;
}

.nav {
  position: absolute;
  bottom: 0;
  background: #ccc;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-menu {
  position: absolute;
  left: 50px;
  top: 50px;
  z-index: 100;
}
</style>
