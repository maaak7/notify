import Axios from "axios";

export default {
    namespaced: true,

    state: {
        currentPage: 'list',
        events: [],
        event: null,
    },
    getters: {
        CURRENT_PAGE: state => {
            return state.currentPage;
        },
        EVENTS: state => {
            return state.events;
        },
        EVENT: state => {
            return state.event;
        },
    },
    mutations: {
        CHANGE_CURRENT_PAGE(state, page) {
            state.currentPage = page;
        },
        SET_EVENTS(state, payload) {
            state.events = payload;
        },
        SET_EVENT(state, payload) {
            state.event = payload;
        },
    },
    actions: {
        GET_EVENTS: async (context, payload) => {
            Axios
                .post(APP_BASE_URL + '/bds/users/get_for_table', {filter: payload})
                .then(response => {
                    context.commit('SET_USERS', response.data);
                }).catch((err) => {
                console.log(err);
            });
        },

        /*GET_EVENT: (context, payload) => {
            Axios
                .get(APP_BASE_URL + '/bds/users/get', {
                    params: {filters: {id: payload}}
                })
                .then(response => {
                    context.commit('SET_USER', response.data[0]);
                }).catch((err) => {
                console.log(err);
            });
        },*/

        CREATE: (context, payload) => {
            Axios.post(APP_BASE_URL + '/events/create', payload.event)
                .then(response => {
                    console.log(response.data);
                    payload.callback(response.data);
                }).catch(err => {
                console.log(err);
            });
        },

        /*EDIT: (context, payload) => {
            Axios.post(APP_BASE_URL + '/bds/users/edit', payload)
                .then(response => {
                    payload.callback(response.data);
                }).catch(err => {
                console.log(err);
            });
        },*/
    }
};
