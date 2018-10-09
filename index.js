var inquirer = require("inquirer");
var word = require("./Word");

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
            let wordObj = new Word(this.wordsArr[i]);
            return wordObj;
        };
    }
    inquire(){
        inquirer.prompt([
            {
                type: 'input',
                message: 'Try to guess',
                name: "letter"
            }
        ]).then(function(inquirerResponse) {
            var obj = this.word();
            console.log(obj)
            // console.log('inquire', inquirerResponse.letter);
        });
    }

    log(){
        this.inquire();
        // console.log(this.word());
    }
    
}


var i = new Index();

i.log();