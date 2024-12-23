// // // //datatype convertor

// let age=21
//  console.log(typeof age);
// let toString=String(age)
// console.log( typeof toString);




// // // // string concatination.
// let name="shekhar tayde"
// console.log(`Hello friends my name is ${name} and i am ${age} years old `);


// // // //string method
// const name1= new String("shekhar")
// console.log(name1);
// console.log(name1.toUpperCase());

// //math function

// const min=10
// const max=15
// console.log(max-min+1);

// console.log((Math.floor(Math.random()*(max-min+1) + min)))
// console.log(Math.floor((Math.random())*10000));
// console.log(Math.round((Math.random())*10000));

// //date function

// const myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())



//Array
// const myArray=[2,5,8,6,5,"shekhar",true]
// console.log( myArray.slice(0,4));
// console.log(myArray);
// console.log(myArray.sort((a,b)=>b-a)); //to sort arr in desending order
// console.log(myArray.sort((a,b)=>a-b)); //to sort arr in asending order

// console.log( myArray.splice(5,6));
// console.log(myArray)

// console.log(Array.from("shekhar"));
// console.log(Array.from({name:"shekhar"})); //return an empty array ,you need to specify what you have keys or values 
// console.log(Object.keys({name:"shekhar"})); 
// console.log(Object.values({name:"shekhar"})); 


//objects


// const mySym=Symbol("name")

// const user={
//     name:"maya",
//     "maya age":24,
//     isLogedIn:false,
//     city:"Aurangabad",
//     [mySym]:"shekhar"
// }


// console.log(user.name);
// console.log(user["maya age"]);
// console.log( user[mySym]);
// console.log(user);


//object concatination

// const obj1={1:"A",2:"B"};
// const obj2={3:"C",4:"D"};
// // const obj3= Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}
// console.log(obj3);


//array concatination

// const array1=[1,2,3,54,5,6]
// const array2=[34,5,6,7,8,9]
// // const arr3=array1.concat(array2)
// const arr3=[...array1,...array2]
// console.log(arr3);


//object destructuring 

// const user={
//     name:"shekhar",
//     age:22,
//     city:"aurangabad"
// }

// const {name,age,city}=user
// console.log({name});
// console.log(user.name);
// console.log({age});












