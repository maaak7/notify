<template>
    <div class="bd-example">
        <div class="form-group">
            <label>Name</label>
            <input v-model="name" type="text" class="form-control" placeholder="Enter event name">
        </div>
        <div class="form-group">
            <label>From</label>
            <input type="datetime-local" class="form-control" placeholder="From">
        </div>
        <div class="form-group">
            <label>To</label>
            <input type="datetime-local" class="form-control" placeholder="To">
        </div>

        <button @click="submitForm" class="btn btn-primary">Submit</button>
    </div>
</template>


<script>
    export default {
        props: {
            eventProp: {
                type: Object,
                default: {}
            }
        },

        data() {
            return {
                name: '',
            }
        },

        methods: {
            submitForm() {
                console.log('ill submit form');
                console.log(this.name);
            }
        }
    }
</script>
