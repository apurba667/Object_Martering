function doSomething(){
    console.log(33333);
}
console.log(1222);
setTimeout(doSomething,4000);
// setTimeout(function(){
//     console.log("Lazy and Waiting");
// },4000)
// doSomething();
setInterval(function(){
    //console.log("doing It ");
},4000);
//console.log(4444);