const worker = require("./worker");

class intern extends worker {
    constructor (name, id, school, email) {
        super (name, id, email);
        this.school = school;
    }
    getPosition() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = intern;