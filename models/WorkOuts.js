module.exports = (sequelize, DataTypes) => {

    let WorkOuts = sequelize.define('WorkOuts', {
        when: {
            type: DataTypes.STRING,
            allowNull:false
        },

        howLong: {
            type: DataTypes.STRING,
            allowNull:false
        },
            
        type: {
            type: DataTypes.STRING,
            allowNull:false
        
        },
        sets: {
            type: DataTypes.STRING,
            allowNull:false
        },
        reps: {
            type: DataTypes.STRING,
            allowNull:false
        },
        
    
        Weights: {
            type: DataTypes.BOOLEAN,
            allowNull:false ,
            defaultValue: false
        },

        bodyweight: {
            type: DataTypes.BOOLEAN,
            allowNull:false ,
            defaultValue: false
        }
        


     })
     WorkOuts.sync({ force: false }).then(  () =>{
         console.log('synced student table')
     })
     return WorkOuts
}
