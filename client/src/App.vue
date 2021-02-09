<template>
  <div id="app">
    <NewWorkOut v-on:WorkOut-added="NewWorkOutAdded"></NewWorkOut>
    <WorkOutRecord v-bind:WorkOuts="WorkOuts"></WorkOutRecord>
    <WorkOutSummary v-if="dataLoaded" v-bind:chartData="WorkOutsChartData" v-bind:options="options"></WorkOutSummary>
  

  </div>
 

</template>

<script>
import NewWorkOut from './components/NewWorkOut.vue'
import WorkOutRecord from './components/WorkOutRecord.vue'
import WorkOutSummary from './components/WorkOutSummary.vue'

export default {
  name: 'app',
  data() {
    return{
      WorkOuts: [],
      WorkOutsChartData: {},
      dataLoaded:true
    }

  },
  components: {
    NewWorkOut,
    WorkOutRecord,
    WorkOutSummary
  },
  //Most of the work below I got help from James, Clara L
    methods: {
    NewWorkOutAdded(WorkOut) {
      this.$WorkOuts_api.addWorkOuts(WorkOut).then( WorkOut => {
        this.updateWorkOuts()
        this.WorkOuts.push(WorkOut)

      }).catch(err => {
        let msg = err.response.data.join(',')
        alert('Error adding WorkOuts.\n' + msg)
      })

     this.WorkOuts.push(WorkOut)
   /* this is were the name of the workout and the amount of times they did it */
    let labels = this.WorkOuts.map( w => w.type )  // this is the name of the work out
    let data = this.WorkOuts.map(w => w.reps)    // this is the numberof reps they did the work out
    let colors = ['rgb(158, 179, 194)', 'rgb(28,114,147)', '  rgb(2, 133, 145)' , 'rgb(68, 94, 116)', 'rgb(18, 58, 90)']
    let colorb = ['rgb(28,114,110', 'rgb(28,114,110', 'rgb(28,114,110','rgb(28,114,110','rgb(28,114,110','rgb(28,114,110','rgb(28,114,110','rgb(28,114,110']
   
  this.WorkOutsChartData = {
    labels: labels,
    datasets: [{
      label: "Workout",
      data: data,
      backgroundColor : colors,
      hoverBackgroundColor :colorb,
    

    }]
     
  }

      },
      loadWorkOutData(){
        this.WorkOuts = work 
        let lables = this.WorkOuts.map(work => work.when)
      }
    
  },
  updateWorkOuts(){
    this.$WorkOuts_api.getAllWorkOuts().then (students => {
      this.WorkOuts = WorkOuts
    })
  }
}

</script>

<style>

 

</style>
