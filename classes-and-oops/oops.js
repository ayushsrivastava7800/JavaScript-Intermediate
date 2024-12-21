//****************************************OOP (object orrientedprogramming)********************************************************

 
//*************************************object**************************************************************************************



/*
collection of properties or method
 tolowercase
toupparcase
*/



//***************************************parts of oop******************************************************************************


/*
objrct literal

-constructor function
-prototype
-classes
-instance(new, this)
*/



//******************************************pillars**********************************************************************


/*
-abstraction
-encapsulation
-inheritance
-polymorphism

*/


//-------------------------------------------------------object literal-----------------------------------------------------------

/*
//const user = {
   // username: "ayush",
  //  logincount: 8,
//    signout: true,

   // getUserDetails: function(){

        //console.log("got user detail from database");
    
        //console.log(`username: ${this.username}`);                    // this keyword is userd for current context
        // console.log(this);
//    }


//}
//console.log(user.username);
//console.log(user.getUserDetails());

//console.log(this);


*/
//----------------------------------------constructor function --------------------------------------------------------
 
/*
function user(username, logincount,isloggedin){
    this.Username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;

    return this
}

const userOne = user("ayush",12, true)
const UserTwo = user("chaiorcode",11,false)
console.log(userOne);

*/

function user(username, logincount,isloggedin){
    this.Username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;

    this.greating = function(){
        console.log(`welcome ${this.username}`);
    }
    return this
}

const userOne = new user("ayush",12, true)
const userTwo = new user("chaiorcode",11,false)
//console.log(userOne);
//console.log(userTwo);
console.log(userOne.constructor);                  // constructor is a refference of its own

// ************************new key word***********************************************

// create new object
//construtorfunction call 
// this keyword injected arrguments


