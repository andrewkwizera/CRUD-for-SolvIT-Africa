const fs = require('fs')
let trainees = fs.readFileSync('./data/trainees.json');
let myObject = JSON.parse(trainees)
function getAllTrainees() {
    const data = JSON.parse(trainees)
    return data;
}

function getTrainee(id) {
    
    for(let trainee of myObject) {
        if(trainee.id == id) {
            return trainee;
        }
    }
    return false;
}

function saveTrainee(trainee) {

    myObject.push(trainee)
    fs.writeFile('./data/trainees.json',JSON.stringify(myObject),err2 => {
        if (err2) {
          console.log(err2);
          return;
        }})
}

function updateTraineeAge(id,newAge) {
    for(let trainee of myObject) {
        if(trainee.id === id) {
            trainee.age = newAge;
            myObject.push(trainee)
            fs.writeFile('./data/trainees.json',JSON.stringify(myObject),err2 => {
                if (err2) {
                  console.log(err2);
                  return;
                }})
            return true;

        }
    }
    return false;
}

function deleteTrainee(id) {
    let found = false;
    for(let trainee of myObject) {
        if(trainee.id === id) {
            found = true;
        }
    }
    if(myObject.length>0 && found) {
        myObject = myObject.filter(trainee => trainee.id != id);
        fs.writeFile('./data/trainees.json',JSON.stringify(myObject),err2 => {
            if (err2) {
              console.log(err2);
              return;
            }})
        return true;
    }
    return found;
}

module.exports = {getAllTrainees, getTrainee,saveTrainee,updateTraineeAge,deleteTrainee};