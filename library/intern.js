const worker = require("./Worker");

class Intern extends {
    constructor (name, ID, school, email) {
        super (name, ID, email);
        this.school = school;
    },
    getPosition() {
        return "Intern";
    },
    getSchool() {
        return this.school;
    }
},

module.exports = Intern;