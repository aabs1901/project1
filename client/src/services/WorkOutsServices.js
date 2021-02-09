import axios from 'axios'

const base_url = '/api/WorkOuts'

export default {
    getAllWorkOuts() {
        return axios.get(base_url).then(response => {
            
            return response.data
        })
    },

    addWorkOuts(WorkOuts) {
        return axios.post(base_url, WorkOuts).then(response => {
            
            return response.data
        })
    },

    updateWorkOut(WorkOuts) {
        return axios.patch(`${base_url}/${WorkOuts.id}`, WorkOuts).then(response => {
            return response.data
        })
    }
}