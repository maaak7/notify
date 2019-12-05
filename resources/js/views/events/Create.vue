<template>
    <events-form/>
</template>

<script>
    import EventsForm from '../../components/Events/Form';

    export default {
        components: {
            EventsForm
        },

        data() {
            return {

            }
        },

        mounted() {
            console.log('events form');
        }
    }
</script>
