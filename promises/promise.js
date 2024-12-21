/*
const promiseOne = new Promise(function(resolve, rejection){
   
    setTimeout(function (){
        console.log(`aysn tast is complete`);
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})


    // do an async tast
    // db calla , cryptography, network



//*******************************************************************************************************************************




    new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("async tast 3");
            resolve()

        },1000)

    }).then(function(){
        console.log("async tast 2");
    })

    


//*********************************************************************************************************************************


    const promisethree = new promise(function(resolve, reject){
        setTimeout(function(){
         resolve({ username: "chai", email: "chaimail.com"})

        },1000)
    })
    promisethree.then(function(user){
        console.log(user);
    })


*/

//***************************************************************************************************************************

/*

const promisefour = new promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "ayush", password: "123"})
          
        }   else{
            reject(`error: something wentwrong`)
        }
        },1000)
    })
    
    const username = promisefour.then((user) => {  
    console.log(user);
    return user.username

    })
    .then((username)=>{
        console.log(username);

    })
    .catch(function(error){
        console.log(error);

    }).finally(()=> console.log("either complete or reject"))
  
    */


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
   const promisefive = new promise(function(resolve,reject){

    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "srivastav", password: "123"})
          
        }   else{
            reject(`error: something wentwrong`)
        }
        },1000)
   
    ///////////////////////////////////////first method///////////////////////////////////////////////////////////////////////    

   async function consumepromisefive(){
    const response = await promisefive
    console.log(response);

//////////////////////////////////////////second method ////////////////////////////////////////////////////////////////

    try {
        const response = await promisefive
        console.log(response);
    } catch (error) {
        console.log(error)

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    }}
   consumepromisefive()

   */

/*
   async function getAllUser(){
    try{
        const response = await fetch ('url')
        const data = await response.json()
        console.lof(data);
    }catch(error){
        console.log("e", error);
    }
   } 
   getAllUser()


   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


   fetch('url')
   .then((response)=>{
    return response.json()
   })
   .then((data)=>{
   console.log(data);
   })


*/