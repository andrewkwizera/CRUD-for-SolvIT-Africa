class Staff {
    constructor(id, name, salary, gender,position) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.position = position;
    }

    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    };

    
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    };

    
    setSalary(salary) {
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    };
    
    setGender(stack){
        this.stack = stack;
    }
    getGender(){
        return this.gender;
    }

    setPosition(position){
        this.position = position;
    }
    getposition(){
        return this.position;
    }
}

module.exports = Staff;