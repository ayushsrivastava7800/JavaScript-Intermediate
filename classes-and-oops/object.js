
//       function is fnction or object also

function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);




function createuser(username,score){
    this.username = username
    this.score = score

}

createuser.prototype.increament = function(){
    this.score++
}

createuser.prototype.printme = function(){
    console.log(`score is ${this.score}`);
}
const chai = new createuser("chai", 25)
const tea = createuser("tea",250)

chai.printme()