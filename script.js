// function placeOrder(callback){
//     setTimeout(() => {
//         console.log("Order Placed");
//         callback();
//     }, 2000);
// }

// function processPayment(callback){
//     setTimeout(() => {
//         console.log("Payment Successful");
//         callback();
//     }, 2000);
// }

// function inventoryUpdate(callback){
//     setTimeout(() => {
//         console.log("Inventory Updated");
//         callback();
//     }, 2000);
// }

// function sendEmail(callback){
//     setTimeout(() => {
//         console.log("Email Sent");
//         callback();
//     }, 2000);
// }

// function orderCompleted(){
//     console.log("Order Completed Successfully!");
// }

// placeOrder(() => {
//     processPayment(() => {
//         inventoryUpdate(() => {
//             sendEmail(() => {
                
//             });
//         });
//     });
// });

// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let success=false;
//         if(success) {
//             resolve("Task completed");
//         }
//         else{
//             reject("Task rejected");
//         }
//     },3000);
// });
// promise.then(
//     result=>{
//         console.log(result);

// }).catch(error => {
//     console.log(error);
// });

// function placeOrder() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Order Placed");
//         }, 2000);
//     });
// }

// function processPayment() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Payment Successful");
//         }, 2000);
//     });
// }

// function inventoryUpdate() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Inventory Updated");
//         }, 2000);
//     });
// }

// function sendEmail() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Email Sent");
//         }, 2000);
//     });
// }

// placeOrder()
// .then(result => {
//     console.log(result);
//     return processPayment();
// })
// .then(result => {
//     console.log(result);
//     return inventoryUpdate();
// })
// .then(result => {
//     console.log(result);
//     return sendEmail();
// })
// .then(result => {
//     console.log(result);
//     console.log("Order Completed Successfully!");
// })
// .catch(error => {
//     console.log("Error:", error);
// });


