class sample {
    constructor (number,number2) {
        this.number=number
        this.number2=number2
    }
        hai () {
            console.log("answer :" + (this.number+this.number2));
        }

    
}
let samp = new sample(5,5)
samp.hai()
//inheritence

class main {
    hello () {
        console.log('hello');
    }
}
class sub extends main {
super()
    hai () {
        console.log('hai');
    }
}

const name = new sub();
name.hello()
name.hai()
