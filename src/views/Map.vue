<template>
  <div class="yandex-map">
    <yandex-map class="yandex-map" :coords=[] show-all-markers="true">

      <div v-if="selectedDriver">
          <ymap-marker style="position: relative"
                       :marker-id="driverById.id"
                       :coords="driverById.coord"
                       :icon="markerIconNN(driverById)"
          />

        <ymap-marker style="position: relative"
                     :marker-id="driverById.id"
                     :coords="driverById.coordsA"
                     :icon="markerIconNA(driverById)"
        />

        <ymap-marker style="position: relative"
                     :marker-id="driverById.id"
                     :coords="driverById.coordsB"
                     :icon="markerIconNB(driverById)"
        />


        <button class="btn clear_btn" @click="clearSelectedDriver">X</button>

      </div>


      <div v-else v-for="info in getCoords"
           :key="info.id">
        <ymap-marker style="position: relative"
                     :marker-id="info.id"
                     :coords="info.coord"
                     :icon="markerIconN(info)"
                     @click="select(info.id)"

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
      coords: [41.3082, 69.2598],
      markerIcon: {
        layout: 'default#imageWithContent',
        imageHref: 'https://image.flaticon.com/icons/png/512/33/33447.png',
        imageSize: [43, 43],
        imageOffset: [0, 0],
        content: '',
        contentOffset: [43, 20],
        contentLayout: '<div style="background: red; width: 100px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      },
    }
  },

  mounted() {
    this.getDrivers()
    this.readSelectedDriver()
  },

  methods: {
    ...mapMapActions({
      getDrivers: 'getFakeDrivers',
      findDriver: 'findDriver'
    }),
    ...mapMutations({
      readSelectedDriver: 'READ_SELECTED_DRIVER',
      clearSelectedDriver: 'CLEAR_SELECTED_DRIVER',
    }),
    select(id) {
      this.findDriver(id).then(() => {
      })
    },
    markerIconN({avatar, name, id}) {
      return {...this.markerIcon, imageHref: avatar, id, content: name}
    },
    markerIconNN({avatar, name, id}) {
      return {...this.markerIcon, imageHref: avatar, id, content: name,}
    },
    markerIconNA({id}) {
      return {...this.markerIcon, imageHref: "https://armovision.ru/upload/iblock/502/50231e86fea0ddd7597cc18304337c62.png", id, content: 'Точка AAAAA'}
    },
    markerIconNB({id}) {
      return {...this.markerIcon, imageHref: "https://cdn-icons-png.flaticon.com/512/535/535188.png", id, content: 'Точка BBBBBB'}
    },
  },


  computed: {
    ...mapMapGetters({
      getCoords: 'getCoords',
      getCoordsById: 'getCoordsById'
    }),
    ...mapMapState(["selectedDriver"]),
    driverById() {
      return this.getCoordsById(this.selectedDriver)
    }
  }
}
</script>

<style scoped lang="scss">
.yandex-map {
  width: 100%;
  height: 100%;
}

.driver{
  .icon{
    width: 44px !important;
    height: 44px !important;
    border-radius: 50%;
    border: 2px solid green !important;
    z-index: 100 !important;
  }
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
.clear_btn{
  position: absolute;
  z-index: 100;
  left: 150px;
  top: 50px;
  background: #2c3e50;
}
</style>
