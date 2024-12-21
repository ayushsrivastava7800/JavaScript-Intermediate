// prop

class user {
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const ayush = new user("ayush")
console.log(ayush.createId())
class teacher extends user {
    constructor(username,email){
        superr(username)
        this.email = email
    }
}

const iphone = new teacher("iphone", "iphone@!123.com")
console.log(iphone.createId())