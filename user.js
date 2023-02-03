class User {
    constructor(forename, surname) {
        this.forename = forename;
        this.surname = surname;
    }

    getName() {
        return this.forename + " " + this.surname;
    }

    getIntroduction() {
        return "Hi, my name is " + this.getName();
    }
}

module.exports = User

