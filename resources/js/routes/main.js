import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home';
import Events from '../views/events/Main';
import EventsList from '../views/events/List';
import CreateEvent from '../views/events/Create';
// import EditEvent from '../views/events/Edit';

Vue.use(VueRouter);

const DEFAULT_TITLE = 'My events';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: Home,
            name: 'home',
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/events',
            component: Events,
            children: [{
                path: 'list',
                name: 'events_list',
                component: EventsList,
                meta: {
                    title: 'My events'
                }
            }, {
                path: 'create',
                name: 'create_event',
                component: CreateEvent,
                meta: {
                    title: 'Event creating'
                }
            }/*, {
                path: 'edit/:id',
                name: 'edit_event',
                component: EditCategory,
                meta: {
                    title: 'Редагування події'
                }
            }*/],
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? to.meta.title + ' | ' + DEFAULT_TITLE : DEFAULT_TITLE;
    next()
});

export default router;
