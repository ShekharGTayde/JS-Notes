// function sum(num1,num2){

//   const sum=num1+num2
//   console.log(sum);

//    return
// }
// sum(2,3)
// console.log(sum(2,3))



// function user(userName){
//    if(!userName){
//       console.log("please enter your userNmae");
//       return
//    }
//    return `${userName} is just loggedIn`
 
   
// }
// console.log(user("shekhar"));
// console.log(user());


//using object as a parameter in function
// const user = {
//    userName: "shekhar",
//    city: "aurangabad"
// }

// function handledObject( user) {
//    const {userName,city}=user
//    console.log(`Hi,My name is ${userName} and i am from ${city}`);


// }
// handledObject(user)

//using array as a parameter
// const myArray=[565,856,674,42,546574]
// function returnValue(getArray){
//    return getArray[4]
// }
// console.log(returnValue(myArray));
// console.log(returnValue([4744,5645,44,45412,56154]));

//arrow function 
// const chai=()=>{
//    userName="shekhar"
//    console.log(this.userName);
//    console.log(this);
   
   
// }
// chai()



// //using this keyword==reffered current context
//  const user={
//        name:"shekhar",
//        age:22,
//        city:"aurangabad",
//        welcomeMessage:function(){
//         // const {name}=user
//         //  console.log(`${this.name},you just loggedIn`);
//         //  console.log(`${user.name},you just loggedIn`);
//         //  console.log(`${name},you just loggedIn`);//using dwstructring method 
         
//        }
     
//    }
//  console.log(user.age);

 
// user.welcomeMessage()//for this current  context of name is shekhar
//  user.name="bhumika"
// user.welcomeMessage()//for this current context of name is bhumika
       

//iife //it is used to exicute function immediatly without function pollution //sytax=(raamayan)(parameter)
// (function chai(){
//    console.log("DB CONNECTED");
   
// })()

// ((name)=>{
//    console.log( ` Hi ${name}`);
   
// })("shekhar")







