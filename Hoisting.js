// //Hoisting Variables
var acc_name="nandhu";
console.log(acc_name)
var bank_name="SBI"
console.log(bank_name)
//Hoisting function
sayMyName()
var acc_name="nandhu"
function sayMyName(){
    let name="sam";
    console.log("Name:",name)
}
// Arrow function
let arr_func=()=>{
    let name="Nandhini"
    console.log(name)
}
arr_func()
//Anonymous function
let ann_fun=function(){
    let name="Nandhini Narayanasamy"
   console.log(name)
}
ann_fun()  
//IIFE
(function(param){
    let name="Nandhini Narayanasamy"
   console.log(name,param)
})("is a SOFTWARE ENGINEER")


function addtwo(num1,num2){
    return num1+num2;
}
console.log(addtwo(10,40))
const add=(num1,num2)=>num1+num2;
console.log(add(40,20))
//objects
let emp = {
    emp_name:"Nandini",
    emp_Id:2356,
    emp_Address: {
        state:"TamilNadu",
        Area:"Hosur",
    },
students:["bala","mohan"]
}
console.log(emp.emp_Id)
console.log(emp.emp_Address.Area)
console.log(emp.students[1])