import driversData from '../fakeData/drivers'

export default {
    namespaced: true,
    state: {
        drivers: [],
        selectedDriver: null

    },
    mutations: {
        SET_DRIVERS(state, drivers) {
            state.drivers = drivers
        },
        SET_SELECTED_DRIVER(state, id) {
            localStorage.setItem('selected_driver_id', id);
            state.selectedDriver = id
        },
        READ_SELECTED_DRIVER(state) {
            state.selectedDriver = localStorage.getItem('selected_driver_id')
        },
    },
    actions: {
        async getFakeDrivers({commit}) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    commit('SET_DRIVERS', driversData)
                    resolve()
                }, 1000)
            })
        },
        findDriver({ commit }, id){
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('SET_SELECTED_DRIVER', id)
                    resolve()
                }, 500)
            })
        }

    },
    getters: {
        getCoords: state => {
            return state.drivers;
        },
        getCoordsById: (state) => (id) => {
            return state.drivers.find(todo => todo.id === id);
        }
    },
}
