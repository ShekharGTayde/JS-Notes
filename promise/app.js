//promise represent the completion or failure of operation 
//resolve is used to show the success of operation
//reject is used to show the failure of operation 


// const promiseOne=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("promise one is async");
//         resolve() //it is used to connect consuming part
       
        
//     },2000)
// })
// promiseOne.then(()=>{          //then is used to perform operation when case is success
//     console.log("async resolved");
    
// })




// const promiseTwo=new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         console.log("shekhar");
//         resolve()
//        },2000)
// }).then(()=>{
//     console.log("Tayde");
    
// })



// const promiseThree= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      let error=true
//      if(!error){
//             resolve({username:"shekhar",pass:"tayde"})
//      }else{
//         reject("ERROR:Something went wrong")       
//      }
//     },2000)
// })
// promiseThree.then((user)=>{
    
//   return  user.username  
// }).then((username)=>{
//     console.log(username);
    
// }).catch((error)=>{      //catch is used to get error of operation
//     console.log(error);
    
// }).finally(()=>{    //promise resolve ho ya reject ho it will exicuted everytime 
//     console.log("The Promise is either resolve or reject");
    
// })




// const promiseFour=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false;
//         if(!error){
//             resolve({username:"shekhar",pass:"bhumika"})
//         }else{
//             reject("ERROR:Something went wrong")
//         }
//     },1000)
// })
// // async await method is used to wait for the next operation until first one is not responded
// // it only perform a error free operation



// async function consumePromiseFour(){
//      const response=await promiseFour
//      console.log(response);
  
     
    
     
//  }
//  consumePromiseFour()


//this method is used to catch the error by using async method 
// async function consumePromiseFour(user){
//    try {
//     const response = await promiseFour
//     console.log(response);
//    } catch (error) {
//     console.log(error);
    
//    }
    
// }
// consumePromiseFour()








