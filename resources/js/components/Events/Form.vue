<template>
    <div class="bd-example">
        <div class="form-group">
            <label>Name</label>
            <input v-model="name" type="text" class="form-control" placeholder="Enter event name">
        </div>
        <div class="form-group">
            <label>From</label>
            <input v-model="startDate" type="datetime-local" class="form-control" placeholder="From">
        </div>
        <div class="form-group">
            <label>To</label>
            <input v-model="endDate" type="datetime-local" class="form-control" placeholder="To">
        </div>

        <div class="form-group form-check">
            <input v-model="enableNotification" type="checkbox" class="form-check-input" id="additionalNotification">
            <label class="form-check-label" for="additionalNotification">One more notification?</label>
        </div>

        <div class="form-group" v-if="enableNotification">
            <label>Additional notification</label>
            <input v-model="additionalNotification" type="datetime-local" class="form-control" placeholder="Additional">
        </div>

        <button @click="saveEvent" class="btn btn-primary">Submit</button>
    </div>
</template>


<script>
    import {mapGetters} from 'vuex';

    export default {
        props: {
            eventProp: {
                type: Object,
                default: () => {
                }
            }
        },

        data() {
            return {
                name: '',
                startDate: null,
                endDate: null,
                enableNotification: false,
                additionalNotification: null,
            }
        },

        created() {
            /*Echo.join(`chat`)
                .here((users) => {
                    console.log('wow');
                })
                .joining((user) => {
                    console.log(user.name);
                })
                .leaving((user) => {
                    console.log(user.name);
                });*/
        },

        watch: {
            eventProp: {
                handler(data) {
                    if (data) {
                        this.name = data.name;
                        this.startDate = data.start_date;
                        this.endDate = data.end_date;
                    }
                }
            }
        },

        methods: {
            saveEvent() {
                console.log('ill submit form');
                let eventData = this.getEventData();

                this.$store.dispatch('eventsStore/CREATE', {
                    event: eventData,
                    callback: this.saveNotifications,
                });

            },

            saveNotifications(response) {
                if (response.status === 'success') {
                    console.log('event _ID_ - ' + response.event_id);

                    let data = this.getNotificationsData(response.event_id);
                    console.log(data);

                    this.$store.dispatch('notificationsStore/CREATE', {
                        notifications: data,
                        callback: console.log('im done'),
                    });
                }
            },

            getEventData() {
                return {
                    name: this.name,
                    start_date: this.startDate,
                    end_date: this.endDate,
                }
            },

            getNotificationsData(eventID) {
                return {
                    event_id: eventID,
                    notifications: [
                        this.startDate,
                        this.additionalNotification
                    ]
                }
            },


        }
    }
</script>
