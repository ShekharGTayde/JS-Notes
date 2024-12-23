//prototype ,it is a layer of functions
//in js everything is object (string,array,function)

// function multiplayBy5(num){
//     return num*5
// }
// multiplayBy5.power=2

// console.log((multiplayBy5(5)));
// console.log(multiplayBy5.power);

// console.log(multiplayBy5.prototype);






//call method:-when we nested a function onto another func then the access of outer func will not be available ,
//because they not call internally that's why we need to call it externally by using call() method


// function user1(username){
//     this.username = username
// }

// function user2(username,email,pass){

//     user1.call(this,username)  //it takes this as compalsary parameter
//     this.email = email
//     this.pass = pass
// }
// const data= new user2("shekhar","shekh@123","123")  //new gives us a new file 
// console.log(data);



//classes:-it is used to create reusable,object by oop's approach ,it give in-built inheritance
//classess is a special type of function 

// class user{
//     constructor(username,email,pass){  //in class method syntax constructor is important and it need a parameter
//          this.username=username
//          this.email=email
//          this.pass=pass
//     }
//     encryptPass(){
//         return `${this.pass}abc`
//     }
//     changeUsername(){
//         return `${this.username}`
//     }
// }
// const shekhar=new user("shekhar","shekhar@gmail.com",123)
// console.log(shekhar.changeUsername().toUpperCase())
// console.log(shekhar.encryptPass());



//extend method:-JavaScript classes support inheritance, meaning a class can inherit properties and methods from another class. This is done using the extends keyword.

// class person{
//     constructor(name,age){
//         this.age = age
//         this.name = name
//     }
//     greet(){
//         console.log(`my name is ${this.name} and i am ${this.age} years old`);
        
//     }

// }
// class employee extends person{    //with help of extends employee get the properties and methods of person but person not get the props from employee
//     constructor(name,age,jobTittle){
//         super(name,age)      // super keyword is used to overwrite the priviuos parameter,it is used only onced
        
//         this.jobTittle = jobTittle
//     }
//     jobDescription(){
//         console.log(` i am ${this.jobTittle} with ${this.age} years of experience`);
        
//     }
// }
// // const shekhar = new person("shekhar","21")
// // shekhar.greet()
// // shekhar.jobDescription()    with help of extends employee get the properties and methods of person but person not get the props from employee

// const bhumika = new employee("bhumika","21","CA")
// bhumika.greet()
// bhumika.jobDescription()



// when we use static keyword rthen it resist the function






//getter and setter 

// class user{
//     constructor(email,pass){
//         this.email=email;
//         this.pass=pass
//     }
//     get pass(){      //getter is used to send incrypt data(false data) to unwanted request
//         return `${this._pass}abc`
//     }
//     set pass(value){  //setter is used to set the values .
//         this._pass=value
//     }
// }
// const data=new user("shekhar@abc.com","6556665")
// console.log(data.pass);
// console.log(data);















