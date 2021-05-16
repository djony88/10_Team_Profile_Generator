const worker = require("./worker");

class manager extends worker {
    constructor(name, id, officeNumber, email) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getPosition() {
        return "Manager";
    }
    
    getOfficeNum() {
        return this.officeNumber;
    }
}

module.exports = manager;
