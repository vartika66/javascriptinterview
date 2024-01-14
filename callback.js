//what is callaback function;
// setTimeout(function(){
//     console.log("timer")
// },5000)

// function x(y){
//     console.log("xx called")
//     y();
// }
// x(function y(){
//    console.log("yy called")
// })

function attachEventListener(){
    let count =0;
  
document.getElementById("clickme").addEventListener("click", function xyz(){
     console.log("button clicked",++count);
})  
}
attachEventListener();


