class user {
    construtor(username){
        this.usename = this.usename
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
  addcourse(){
    console.log(`a new course added by ${this.username}`);
  }

}

const chai = new teacher("chai","chai@teacher.com","123")
chai.addcourse()
chai.logMe()
const masalachai = new user("masalachai")
masalachai.logMe()

console.log(chai===masalachai);
console.log(chai===teacher);
console.log(chai instanceof user);