const fs = require('fs')
let staffs = fs.readFileSync('./data/staff.json');
let myObject = JSON.parse(staffs)
function getAllStafss() {
    const data = JSON.parse(staffs)
    return data;
}

function getStaff(id) {
    
    for(let staff of myObject) {
        if(staff.id == id) {
            return staff;
        }
    }
    return false;
}

function saveStaff(staff) {

    myObject.push(staff)
    fs.writeFile('./data/staff.json',JSON.stringify(myObject),err2 => {
        if (err2) {
          console.log(err2);
          return;
        }})
}

function updatePosition(id,newPosition) {
    for(let staff of myObject) {
        if(staff.id === id) {
            staff.position = newPosition;
            myObject.push(staff)
            fs.writeFile('./data/staff.json',JSON.stringify(myObject),err2 => {
                if (err2) {
                  console.log(err2);
                  return;
                }})
            return true;

        }
    }
    return false;
}

function deleteStaff(id) {
    let found = false;
    for(let staff of myObject) {
        if(staff.id === id) {
            found = true;
        }
    }
    if(myObject.length>0 && found) {
        myObject = myObject.filter(staff=> staff.id != id);
        fs.writeFile('./data/staff.json',JSON.stringify(myObject),err2 => {
            if (err2) {
              console.log(err2);
              return;
            }})
        return true;
    }
    return found;
}

module.exports = {getAllStafss, getStaff,saveStaff,updatePosition,deleteStaff};