import Vue from 'vue';
import Vuex from 'vuex';
import eventsStore from './events/events-store';
import notificationsStore from './notifications/notifications-store';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    getters : {},
    mutations: {},
    actions:{},

    modules : {
        eventsStore,
        notificationsStore
    }
});
