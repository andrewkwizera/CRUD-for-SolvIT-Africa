const express = require("express");
const {getAllTrainees, getTrainee, saveTrainee,updateTraineeAge,deleteTrainee} = require("./controler/trainees");
const trainee= require("./model/trainee");
const {getAllTrainers, getTrainer,saveTrainer,updateTrainerSalary,deleteTrainer} = require("./controler/trainers");
const trainer= require("./model/trainer");
const {getAllStafss, getStaff,saveStaff,updatePosition,deleteStaff} = require("./controler/staffs");
const staff= require("./model/staff");
const app = express();

app.use(express.json());

//Trainee CRUD operation
app.post('/trainee', (request,response)=> {
    try {
        const {id,name,age,stack} = request.body;
        //console.log({id,name,age,stack})
        if(!id) throw new Error("Account must have an id, please provide id.");
        if(!name) throw new Error("Account must have an name, please provide name.");
        if(!age) throw new Error("Account must have an age, please provide age.");
        if(!stack) throw new Error("You must enter the stack, please provide age.");
        let newTrainee = new trainee(id,name,age,stack);

        saveTrainee(newTrainee);
        response.status(200).json({Message: "trainee saved successfully"});
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.get('/trainee', (request,response) => {
    try {
        let result = getAllTrainees();
        if(!result) throw new Error("No trainee found.");
        response.status(200).json(result);
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.get('/trainee/:id', (request,response) => {
    try {
        let id = request.params.id;
        if(!id) throw new Error("Please provide id.");
        let result = getTrainee(Number(id));
        if(!result) throw new Error("No account found.");
        response.status(200).json(result);
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });Deleted 
    }
});

app.patch('/trainee',(request,response)=> {
    try {
        const {id, age} = request.body;
        if(!id) throw new Error("Please provide id.");
        if(!age) throw new Error("Please provide age");
        let result = updateTraineeAge(id,age);
        if(!result) throw new Error("Trainee not found");
        response.status(200).json({Message: "Updated age"});
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.delete('/trainee',(request,response)=> {
    try {
        const {id} = request.body;
        if(!id) throw new Error("Please provide id.");
        let result = deleteTrainee(id);
        if(!result) throw new Error("Trainee was not found");
        response.status(200).json({Message: "Trainee deleted"});
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});
/*End of Trainee*/

/*Begining of traners crud operation*/

app.post('/trainer', (request,response)=> {
    try {
        const {id,name,stack,salary} = request.body;
        //console.log({id,name,age,stack})
        if(!id) throw new Error("Trainer must have an id, please provide id.");
        if(!name) throw new Error("Trainer must have an name, please provide name.");
        if(!stack) throw new Error("You must enter the stack, please provide age.");
        let newTrainer = new trainer(id,name,stack,salary);

        saveTrainer(newTrainer);
        response.status(200).json({Message: "trainer saved successfully"});
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.get('/trainer', (request,response) => {
    try {
        let result = getAllTrainers();
        if(!result) throw new Error("No trainer found.");
        response.status(200).json(result);
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.get('/trainer/:id', (request,response) => {
    try {
        let id = request.params.id;
        if(!id) throw new Error("Please provide id.");
        let result = getTrainer(Number(id));
        if(!result) throw new Error("No account found.");
        response.status(200).json(result);
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.patch('/trainer',(request,response)=> {
    try {
        const {id, salary} = request.body;
        if(!id) throw new Error("Please provide id.");
        if(!salary) throw new Error("Please provide salary");
        let result = updateTrainerSalary(id,salary);
        if(!result) throw new Error("Trainer not found");
        response.status(200).json({Message: "Updated salary"});
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.delete('/trainer',(request,response)=> {
    try {
        const {id} = request.body;
        if(!id) throw new Error("Please provide id.");
        let result = deleteTrainer(id);
        if(!result) throw new Error("Trainee was not found");
        response.status(200).json({Message: "Trainee deleted"});
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});
/*End of the trainers*/

/*Begining of Staff's crud operation*/

app.post('/staff', (request,response)=> {
    try {
        const {id, name, salary, gender,position} = request.body;
        //console.log({id,name,age,stack})
        if(!id) throw new Error("Staff must have an id, please provide id.");
        if(!name) throw new Error("Staff must have an name, please provide name.");
        if(!gender) throw new Error("You must enter the gender");
        if(!position) throw Error ("The staff must have a position")
        let newstaff = new staff(id, name, salary, gender,position);

        saveStaff(newstaff);
        response.status(200).json({Message: "Staff saved successfully"});
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.get('/staff', (request,response) => {
    try {
        let result = getAllStafss();
        if(!result) throw new Error("No staff found.");
        response.status(200).json(result);
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.get('/staff/:id', (request,response) => {
    try {
        let id = request.params.id;
        if(!id) throw new Error("Please provide id.");
        let result = getStaff(Number(id));
        if(!result) throw new Error("No account found.");
        response.status(200).json(result);
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.patch('/staff',(request,response)=> {
    try {
        const {id, position} = request.body;
        if(!id) throw new Error("Please provide id.");
        if(!position) throw new Error("Please provide position");
        let result = updatePosition(id,position);
        if(!result) throw new Error("Trainer not found");
        response.status(200).json({Message: "Updated salary"});
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.delete('/staff',(request,response)=> {
    try {
        const {id} = request.body;
        if(!id) throw new Error("Please provide id.");
        let result = deleteStaff(id);
        if(!result) throw new Error("Staff was not found");
        response.status(200).json({Message: "Staff deleted"});
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});
/*End of the staff*/
app.listen(4300, () => {
    console.log("server running on port:"+4300);
});