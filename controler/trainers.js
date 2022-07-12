const fs = require('fs')
let trainers = fs.readFileSync('./data/trainers.json');
let myObject = JSON.parse(trainers)
function getAllTrainers() {
    const data = JSON.parse(trainers)
    return data;
}

function getTrainer(id) {
    
    for(let trainer of myObject) {
        if(trainer.id == id) {
            return trainer;
        }
    }
    return false;
}

function saveTrainer(trainer) {

    myObject.push(trainer)
    fs.writeFile('./data/trainers.json',JSON.stringify(myObject),err2 => {
        if (err2) {
          console.log(err2);
          return;
        }})
}

function updateTrainerSalary(id,newSalary) {
    for(let trainer of myObject) {
        if(trainer.id === id) {
            trainer.salary = newSalary;
            myObject.push(trainer)
            fs.writeFile('./data/trainers.json',JSON.stringify(myObject),err2 => {
                if (err2) {
                  console.log(err2);
                  return;
                }})
            return true;

        }
    }
    return false;
}

function deleteTrainer(id) {
    let found = false;
    for(let trainer of myObject) {
        if(trainer.id === id) {
            found = true;
        }
    }
    if(myObject.length>0 && found) {
        myObject = myObject.filter(trainer => trainer.id != id);
        fs.writeFile('./data/trainers.json',JSON.stringify(myObject),err2 => {
            if (err2) {
              console.log(err2);
              return;
            }})
        return true;
    }
    return found;
}

module.exports = {getAllTrainers, getTrainer,saveTrainer,updateTrainerSalary,deleteTrainer};