let date = new Date()
for (let index = 0; index < 20000 ; index++) {
    console.log('loop');   
}
console.log('end');
let dateDifferent = new Date()-date
console.log(dateDifferent);




function longTask(mm) {
    let date = new Date ()
    while ((new Date()-date) <= mm) {
        
    }

}
let sDATE = new Date()
console.log('start');
longTask(2000)
console.log('stop');



console.log('start');
longTask(2000)
console.log('stop');


console.log('start');

longTask(2000)
console.log('stop');
let eDATE = new Date()-sDATE 
console.log(eDATE);

function showEnd() {
    console.log('end');
}
let s = new Date()
console.log('start');
setTimeout(showEnd,2000)


console.log('start');
setTimeout(showEnd,2000)

console.log('start');
setTimeout(showEnd,2000)

let e = new Date()-s 
console.log(e);












