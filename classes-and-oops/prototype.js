// // let myName = "ayush"

// // console.log(myName.length);

// // console.log(myName.truelength);

// let myheros = ['thor','iron']

// let heropower = {
//     thor: "hammer",
//     iron: "iron",
//     getironpower: function(){
//         //console.log(`iron power is ${this.iron}`);
//     }
// }
//     Object.prototype.ayush = function(){
//         console.log(`ayush is present in all object`);
    
//     }
//         Array.prototype.heyayush = function(){
//        console.log(`ayush say hello`);
//     }

// //heropower.ayush()
// myheros.ayush()
// //myheros.ayush()
// myheros.heyayush()



//---------------------inheritence------------------------------------------------------------------------------------------

const User = {
    name: "ayush",
    email: "ayush@123.com"
}

const Teacher = {
    makevideo: true
}
const TeacherSupport = {
    isavailable: false,
}

const TeachingSupport = {
    makeassigment: 'js ass',
    fulltime: true,
    __proto__: TeachingSupport
}
teacher.__proto__ = User

// -------------------------------------------modern syntax---------------------------------------------------------------

Object.setPrototypeOf(TeachingSupport,teacher)

let anotherusername = "ayushorjavascript "

String.prototype.truelength = function(){
    console.log(`${this}`);
   
    console.log(`true length is :${this.trim().length}`);

}

anotherusername.truelength()
"ayush".truelength()
"ice".truelength()