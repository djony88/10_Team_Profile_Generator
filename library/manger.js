const worker = require("./Worker");

class Manager extends {
    constructor (name, ID, officeNum, email) {
        super (name, ID, email);
        this.officeNum = officeNum;
    }
    getPosition() {
        return "Manager";
    };
    getOfficeNum() {
        return this.officeNum;
    }
}

module.exports = Manager;
