<template>

    <div>
    <div class="card">
        <h2 class="card-body">Activity Record</h2>

        <div class="card-body">
            <!--Number of times enteried -->

            <h3> {{ WorkOuts.length}}</h3>

    <div id="records">
        <table class="table">
            <tr> 
                <th>When</th>
                <th>How Long?</th>
                <th>Type</th>
                <th>Weights or bodyweight?</th>
                <th> Reps</th>
                <th>Sets</th>


            </tr>
            <!-- tabel row for each activityRecord -->
            <tr v-for="record in WorkOuts" v-bind:key="record.when">
                <td>{{ record.when | shortDateFormate}}</td> 
                <td>{{ record.howLong}}</td>
                <td>{{record.type}}</td>
                <td>{{record.Weightbodyweight}}</td>
                <td> {{record.reps}}</td>
                <td>{{record.sets}}</td>

            </tr>
        </table>
    </div>
    </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'WorkOutRecord',
    props: {
        WorkOuts: Array
    },
    methods:{
        checked(WorkOut) {
            this.$emit(WorkOut)
        }
    }
}
</script>

<style >
.card-header {
    background-color: rgb(158,179,194);
}
.card-body {
    background-color: rgb(158,179,194);
}

</style>