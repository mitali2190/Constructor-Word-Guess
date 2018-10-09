var inquirer = require("inquirer");
var wordClass = require("./Word");

class Index {
    constructor(){
        this.wordsArr = [
            'Giorgi',
            'John',
            'Mike',
            'Albert',
            'Ursula',
            'Brent',
            'Adelle'
        ];
        this.word = ()=>{
            let i = Math.floor(Math.random() * (this.wordsArr.length));
            let wordObj = new wordClass(this.wordsArr[i]);
            return wordObj;
        };
        this.wordToGuess = this.word();
    }
    inquire(){
        var self = this;
        inquirer.prompt([
            {
                type: 'input',
                message: 'Try to guess',
                name: "letter"
            }
        ]).then(function(inquirerResponse) {
            var obj = self.wordToGuess;
            obj.findAndSetTrue(inquirerResponse.letter);
            if (obj.str.includes('_')) self.inquire();
        });
    }

}

var i = new Index();

i.inquire();