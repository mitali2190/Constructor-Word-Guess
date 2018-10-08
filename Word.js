var letterClass = require('./Letter');



// letter.check('b');


class Word {

    constructor(letterArr){
        this.letterArr = ()=>{
            var arr = [];
            for (var i = 0; i < letterArr.length; i++){
                console.log(letterArr[i]);
                arr.push(new letterClass(letterArr[i]));
            }
            return arr;
        };
        this.str = '';
    }

    letterFunc(char){

        for (var i = 0; i < this.letterArr.length; i++){

            this.letterArr[i].check(char);

            this.str += letterArr[i].getStr();
        }

    }
    
}



var w = new Word('gio');

w.letterArr();

//1.
// loop through letterArr 
//str += getStr()
//return str

//2.
// func(char){
// letter.check(char)
//}