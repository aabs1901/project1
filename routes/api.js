let express = require('express')
let db= require('../models') 
let Sequelize = require('sequelize')

let Workout = db.WorkOuts 

let router =express.Router()

router.get('/WorkOuts', function(req, res, next){
    Workout.findALL().then(WorkOuts => {
        return res.json(WorkOuts)
    }). catch(err => next(err))
})

router.post('/WorkOuts', function (req, res, next){
    console.log(req.body)
    Workout.create(req.body).then( (data) => {
        return res.status(201).send('ok')
    }).catch( err => {
        if (err instanceof Sequelize.ValidationError){
            let message = err.errors.map( e => e.message )
            // 400 = bad request from user 
            return res.status(400).json(message)
        }
        return next(errors)
    })

})
router.patch('/WorkOuts/:id'), function(req, res, next) {
    Workout.update( req.body, {where: { id: req.params.id}
          .then(rowsModified => {
              return res.send('ok')
          })
    })
    router.fget('/WorkOuts', function(req, res, next) {
        Workout.findALL( {order: ['when']} ).then(Workouts => {
            return res.json(Workouts)
        })
        
    })
    
}
module.exports = router