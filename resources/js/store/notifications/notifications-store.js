import Axios from "axios";

export default {
    namespaced: true,

    state: {
        currentPage: 'list',
        notifications: [],
        notification: null,
    },
    getters: {
        CURRENT_PAGE: state => {
            return state.currentPage;
        },
        NOTIFICATIONS: state => {
            return state.notifications;
        },
        NOTIFICATION: state => {
            return state.notification;
        },
    },
    mutations: {
        CHANGE_CURRENT_PAGE(state, page) {
            state.currentPage = page;
        },
        SET_NOTIFICATIONS(state, payload) {
            state.events = payload;
        },
        SET_NOTIFICATION(state, payload) {
            state.event = payload;
        },
    },
    actions: {
        GET_NOTIFICATIONS: async (context, payload) => {
            Axios
                .post(APP_BASE_URL + '/bds/users/get_for_table', {filter: payload})
                .then(response => {
                    context.commit('SET_USERS', response.data);
                }).catch((err) => {
                console.log(err);
            });
        },

        CREATE: (context, payload) => {
            Axios.post(APP_BASE_URL + '/notifications/create', payload.notifications)
                .then(response => {
                    console.log(response.data);
                    // payload.callback(response.data);
                }).catch(err => {
                console.log(err);
            });
        },
    }
};
