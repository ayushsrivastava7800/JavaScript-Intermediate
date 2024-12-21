// // class user {
// //     contructor(email,password){
// //         this.email = email;
// //         this.password = password;
// //     }

// //     get email(){
// //         return this._password.touppercase()
// //     }
// //     set email(value){
// //         this._email = value
// //     } 

// //     get password(){
// //        // return this._password.touppercase()
// //        return `${this._password}ayush`

// //     }
// //     set password(value){
// //         this._password =value.touppercase()
// //     } 
// // }
// // const ayush = new user ("ayush@.ai","123")

// // console.log(ayush.password);



// //----------------------properties getter and setter-------------------------------------------------------------------


// function user(email,password){
//     this._email = email;
//     this._password = password

//     Object.defineProperty(this,'email',{
//         get: function(){
//             return this._email.touppercase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
// }

//     Object.defineProperty(this,'password',{
//         get: function(){
//             return this._password.touppercase()
//         },
//         set: function(value){
//             this._password = value
//         }
//     } )


//-------------------------------------------OBJECT_GET_SET-----------------------------------------------------------------------



// const user = {
//     _email: 'ayush@123',
//     _password: "123",

//     get email(){
//         return this._email.toUpperCase()

//     },
// set email(value){
//     this._email = value
//  }
// }
// const tea = Object.create(user)
// console.log(tea.email);


