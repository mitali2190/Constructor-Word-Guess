var letterClass = require('./Letter');



// letter.check('b');


class Word {

    constructor(letterArr){
        this.letterArr = ()=>{
            var arr = [];
            for (var i = 0; i < letterArr.length; i++){
                arr.push(new letterClass(letterArr[i]));
            }
            return arr;
        };
        this.str = '';
    }

    letterFunc(char){
        
        var arr = this.letterArr();

        for (var i = 0; i < this.letterArr.length; i++){

            arr[i].check(char);

            this.str += arr[i].getStr();
            console.log(this.str);
        }

    }
    
}



var w = new Word('gio');

w.letterFunc('i');

//1.
// loop through letterArr 
//str += getStr()
//return str

//2.
// func(char){
// letter.check(char)
//}