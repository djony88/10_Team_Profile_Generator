const Worker = require("./Worker");

class Engineer extends Worker{
    constructor (name, ID, GitHub, email) {
        super (name, ID, email);
        this.GitHub = GitHub;
    }
    getPosition() {
        return "Manager";
    }
    getGitHub() {
        return this.GitHub;
    }
}

module.exports = Engineer;