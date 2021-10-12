<template>
  <div class="yandex-map">

    <yandex-map class="yandex-map" :coords=[] show-all-markers="true">

      <div v-for="info in getCoords"
           :key="info.id">
        <ymap-marker style="position: relative"
                     :marker-id="info.id"
                     :coords="info.coord"
                     :icon="markerIconN(info)"
                     @click="select"

        />
      </div>
    </yandex-map>


  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
import {yandexMap, ymapMarker} from 'vue-yandex-maps'
// import DriverInfo from "../components/DriverInfo";

const {
  mapGetters: mapMapGetters,
  mapActions: mapMapActions,
  mapState: mapMapState,
  mapMutations: mapMutations
} = createNamespacedHelpers('map')

export default {
  name: "Map",
  components: {yandexMap, ymapMarker,},

  data() {
    return {
      selectDriver: null,
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
    this.readSelectedDriver()
  },

  methods: {
    ...mapMapActions({
      getDrivers: 'getFakeDrivers'
    }),
    ...mapMutations({
      readSelectedDriver: 'READ_SELECTED_DRIVER'
    }),
    select(e) {
      console.log(e.get('coords'))
    },
    markerIconN({avatar, name, id}) {
      return {...this.markerIcon, imageHref: avatar, id, content: name}
    },
  },


  computed: {
    ...mapMapGetters(["getCoords", "getCoordsById"]),
    ...mapMapState(["selectedDriver"]),

  }
}
</script>

<style scoped>
.yandex-map {
  width: 100%;
  height: 100%;
}


.Navbar {
  position: absolute;
  bottom: 0;
  background: #ccc;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.MainMenu {
  position: absolute;
  left: 50px;
  top: 50px;
  z-index: 100;
}
</style>
