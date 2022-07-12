class Trainee {
    constructor(id, name, age, stack) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.stack = stack;
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

    
    setAge(age) {
        this.age = age;
    }
    getAge() {
        return this.age;
    };
    
    setStack(stack){
        this.stack = stack;
    }
    getStack(){
        return this.stack;
    }
}

module.exports = Trainee;