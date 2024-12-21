// es6
class user {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptedPassword(){
    }
        changeusername(){
            return `${this.username.toupperCase()}`
        }
        
    
}
const chai = new user ("chai","chai@!23.com")
console.log(chai.encryptedPassword());
console.log(chai.changeusername());


// behind the scene 

