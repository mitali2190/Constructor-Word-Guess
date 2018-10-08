var letterClass = require('./Letter');



// letter.check('b');


class Word {

    constructor(word){

        this.letterArr = ()=>{

            var wordArr = word.split('');

            var arr = [];

            for (var i = 0; i < wordArr.length; i++){

                arr.push(new letterClass(wordArr[i]));

            }
            console.log(arr)

            return arr;
        };
        this.str = '';
    }

    letterFunc(char){
        
        var arr = this.letterArr();

        for (var i = 0; i < arr.length; i++){

            arr[i].check(char);

            this.str += arr[i].getStr();
        }
        console.log(this.str);


    }
    
}



var w = new Word('gio');

w.letterFunc('o');
w.letterFunc('i');

//1.
// loop through letterArr 
//str += getStr()
//return str

//2.
// func(char){
// letter.check(char)
//}