let _tarea

//Add new tarea
const create = (req, res) => {
    const tarea = req.body;
    _tarea.create(tarea)
        .then(data => {
            res.status(200);
            res.json({
                code: 200,
                detail: data
            });
        })
        .catch(error => {
            console.log(error);
            res.status(400);
            res.json({
                code: 400,
                detail: error
            });
        });
};
//Get all tareas
const getAll = (req, res) => {
    _tarea.find({})
        .then(tareas => {
            res.status(200);
            res.json({
                code: 200,
                detail: tareas
            });
        })
        .catch(error => { 
            res.status(400);
            res.json({
                code: status[400],
                detail: error
            });
        });
}; 
//Set done!
const setDone = (req, res) => {
    const id = req.params.id;
    _tarea.update({ _id: id },{$set : { done : true}})
        .then(data =>{
            res.status(200);
            res.json({
                code: 200,
                detail: data
            });
        })
        .catch(error =>{
            console.log(error);
            res.status(400);
            res.json({
                code: 400,
                detail: error
            });
        });    
};
//Get by id
const getById = (req, res) => {
    const id = req.params.id;
    _tarea.findOne({ _id: id })
        .then(tarea => {
            res.status(200);
            res.json({
                code: 200,
                detail: tarea
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                detail: error
            });
        });
}

module.exports = (Tarea) => {
    _tarea = Tarea;
    return ({
        create, getAll, setDone, getById
    })
}