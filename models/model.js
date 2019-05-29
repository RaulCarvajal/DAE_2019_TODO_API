const mongoose = require('mongoose');
const _ = require('underscore');

module.exports = (wagner) => {
    //Conexión a la base de datos
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/todo', { useNewUrlParser: true });

    wagner.factory('db', ()=> mongoose);

    const Tareas = require('./tareas.model');

    const models = {
        Tareas
    }
    _.each(models, (v, k)=> {
        wagner.factory(k, ()=>v);
    });
}