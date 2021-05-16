const worker = require("./worker");

class engineer extends worker {
    constructor (name, id, GitHub, email) {
        super (name, id, email);
        this.GitHub = GitHub;
    }
    getPosition() {
        return "Engineer";
    }
    getGitHub() {
        return this.GitHub;
    }
}

module.exports = engineer;