const Employee = require("./Employee");

// Engineer extends Employee 
class Engineer extends Employee {
    constructor (name, id, github, email) {
        // calls employee constructor 
        super (name, id, email);

        this.github = github; 
    }

    // grab GitHub 
    getGitHub () {
        return this.github;
    }

    // returns Engineer 
    getRole () {
        return 'Engineer';
    }
}

module.exports = Engineer; 