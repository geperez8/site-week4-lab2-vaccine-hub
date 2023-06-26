const {UnauthorizedError} = require("../utils/errors")

class User {
    static async login(credentials){
        // user should submit their email and passowrd 
        // if any of these fields are missing, throw an error
        //
        // lookup the user in the db by email
        // if a user s found, compare the submitted password
        // with the password in the db
        // if there us a match, return the user
        //
        // if any of this goes wrong throw an error

        throw new UnauthorizedError("Invalid email/password combo")
    }

    static async register(credentials){

    }
}

module.exports = User