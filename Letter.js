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
        if (this.storedChar.toLowerCase() == toCheckChar.toLowerCase()) {
            this.bool = true;
        }
    }
}

module.exports = Letter;
