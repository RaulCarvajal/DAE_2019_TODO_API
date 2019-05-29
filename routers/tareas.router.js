const tareasRouter = require('express').Router();

module.exports = (wagner) => {
    const tareasCtrl = wagner.invoke((Tareas)=>require('../controller/tareas.controller')(Tareas))

    //Get all tareas
    tareasRouter.get("/getall",(req,res)=>{
        tareasCtrl.getAll(req,res);
    });
    //Create new tareas
    tareasRouter.post("/create",(req,res)=>{
        tareasCtrl.create(req,res);
    });
    //Set done
    tareasRouter.patch("/setdone/:id",(req,res)=>{
        tareasCtrl.setDone(req,res);
    });
    //Get by id
    tareasRouter.get("/getbyid/:id",(req,res)=>{
        tareasCtrl.getById(req,res);
    });
    
    return tareasRouter;
}