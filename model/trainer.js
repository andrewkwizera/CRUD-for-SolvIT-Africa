class Trainer {
    constructor(id, name, stack,salary) {
        this.id = id;
        this.name = name;
        this.stack = stack;
        this.salary = salary;
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
    
    setStack(stack){
        this.stack = stack;
    }
    getStack(){
        return this.stack;
    }

    setSalary(salary){
        this.salary = salary;
    }
    getSalary(){
        return this.salary;
    }
}

module.exports = Trainer;