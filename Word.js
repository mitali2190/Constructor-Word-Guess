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
            return arr;
        };
        this.str = '';
        this.toShowWord  = this.letterArr();
    }

    findAndSetTrue(char){
        
        this.str = '';

        for (var i = 0; i < this.toShowWord.length; i++){

            this.toShowWord[i].check(char);
            
            if (this.toShowWord[i].bool) this.str += this.toShowWord[i].storedChar;
            else this.str += '_';

        }
        console.log(this.str);
    }
    
}


module.exports = Word;