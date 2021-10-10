import driversData from '../fakeData/drivers'

export default {
    namespaced: true,
    state: {
        drivers: [],

    },
    mutations: {
        SET_DRIVERS(state, drivers) {
            state.drivers = drivers
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
