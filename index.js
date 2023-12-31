'use strict';
var a = 100;
console.log(a);
console.log(this);

function x(){
    console.log(this);
}
x();//in strict mode undefined but without that it will be the global object of that execution context
window.x();
//there is something that  is called this subtitution which work in case of non strict mode

//this inside the object
const obj = {
    name:'gaurav',
    printname:function(){
        console.log(this.name);
    }
}

obj.printname() // here this wil refer to its object that it will give you {x:100,y:function()}

const obj2 ={
    name:"vartika"
}
obj.printname.call(obj2)
//this inside arrow function
const iamarrow =()=>{
    console.log(this)
}
iamarrow();

const obj3 ={
    name:"ojha",
    x:()=>{
        console.log(this);
        const y =()=>{
            console.log(this)
        }
    }
    
}
obj3.x.y();