<script>    

import {Bar, mixins} from 'vue-chartjs'
const { reactiveProp} = mixins 


export default {
    extends: Bar, 
    mixins: [ reactiveProp],
    props: {
        options:Object
    },
    mounted() {
        console.log(this.chartData)
        this.renderChart(this.chartData, this.options)
    }
}


</script>