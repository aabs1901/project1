<template>
    <div>


        <h1 class="text-center">{{activity}}</h1>
        <div class="card-body">


    <form>
        <!--error message -->
        <div class="alert alert-danger" v-show="errors && errors.length">
            <li v-for="error in errors">{{error}}</li>
        </div>

        <!--This were the questions are going to be -->
        <div class="form-group">
            <label class="form-label" for="when">When did you {{activity}} </label>
            <input id="when" class="form-control" type="date" v-model.lazy="when">
        </div>

        <div class="form-group">
            <label class="form-label" for="howLong">How long did you workout?</label>
            <input id="howLong" class="form-control" type="text" v-model.number="howLong">
        </div>

        <div class="form-group">
            <label class="form-label" for="type">Name of the workout?</label>
            <br>
            <input id="howLong" class="form-control" v-model="type" placeholder="Workout">
        </div>

        


        <div class="form-check-inline">
        <input id="v1" class="form-check-input" type="radio" v-bind:value="bodyweight" v-model="Weightbodyweight">
        <label class="form-check-label" for="v1">Bodyweight</label>
       </div>
         


  
        <div class="form-check-inline">
        <input id="v1" class="form-check-input" type="radio" v-bind:value="Weights" v-model="Weightbodyweight">
        <label class="form-check-label" for="v1">Weights</label>
       </div>

         <br>
         <br>
    <div class="form-group">
            <label class="form-label" for="type">How many reps did you complete?</label>
            <br>
            <input id="reps" class="form-control" v-model.number="reps" placeholder="reps">
        </div>

         
         
<div class="form-group">
    
     
     
        <label class="form-label" for="sets">How many sets did you complete</label>
          <br>
           <input id="sets" class="form-control" v-model.number="sets" placeholder="sets">
           
       
        </div>
          <br>
         <div>
            <button class="btn btn-primary mt-2" type="button" v-on:click="addWorkOut">Add record</button>
        </div>
    </form>
        </div>
        </div>
        
</template>


<script>
export default {
 name: 'NewWorkOut',
data() {
    return {
       howLong:1,
       Weights: 'Weights',
       bodyweight: 'Bodyweight',
       activity: 'Workout',
       
       when:'',
       sets:'',
       type:'',
       reps:'',
       Weightbodyweight: 'Bodyweight',
       activityRecords:[],
       errors:[]
}

},
methods: {
   addWorkOut(){
    this.errors=[]
     let WorkOut= { when:this.when, howLong: this.howLong,
       type: this.type, Weightbodyweight: this.Weightbodyweight,
       reps: this.reps, sets: this.sets, note: this.note }


     if (!this.when){
         this.errors.push('Data Required')
     }


this.when

    if (typeof (this.howLong) !="number" || this.howLong <=0) {
        this.errors.push('The number of hours must be greater than zero')

       this.howLong
   
}

    if (typeof (this.reps) !="number" || this.reps <=0) {
       this.errors.push('The number of reps must be greater than zero')

       this.reps

}
  if (typeof (this.sets)!="number" || this.sets <=0) {
       this.errors.push('The number of sets must be greater than zero')

       this.sets

}
if (this.errors.length ==0) {
       let NewActivityRecord = { when:this.when, howLong: this.howLong,
       type: this.type, Weightbodyweight: this.Weightbodyweight,
       reps: this.reps, sets: this.sets, note: this.note }


   this.$emit('WorkOut-added', WorkOut)
    }
   }
  }
}

</script>



<style>
</style>