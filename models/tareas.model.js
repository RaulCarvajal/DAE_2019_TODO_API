const mongoose = require('mongoose');

const tareasSchema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    description : {
        type : String,
        require : true
    },
    done : {
        type : Boolean,
        require : true,
        default : false
    },
    date : {
        type : Date,
        require : true,
        default :  Date.now
    }
});

const tareasSchemaE = mongoose.model('Tareas', tareasSchema, 'tareas');

module.exports = tareasSchemaE; 