class Letter {
    constructor(storedChar) {
        this.storedChar = storedChar;
        this.bool = false;
    }
    getStr(){
        if (this.bool) 
            return this.storedChar;
        else
            return '_';
    }
    check(toCheckChar){
        if (this.storedChar == toCheckChar) {
            this.bool = true;
            // console.log(this.getStr());
        }
    }
}

module.exports = Letter;

// var a = new Letter('a');

// a.check("c");
// console.log(a.getStr());