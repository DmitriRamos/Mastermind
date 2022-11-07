import promptSync from "prompt-sync"
import { Input } from "./input.js"
import { Answer } from "./Answer.js"
import { Board } from "./board.js";
const answer = new Answer
const input = new Input
const prompt = promptSync()
const board = new Board
export class AI {
    
    constructor() {
        this.guesses = 0
        this.colorArr = ['b', 'w', 'm', 'g', 'r', 'y']
        this.scoreArr = ['-', 'o', '●']
        this.possibleScores = this.getPermutations(this.scoreArr, 4)
        this.possibleAnswers = []
        this.collectAnswers = this.possibleAnswers.push(this.getPermutations(this.colorArr, 4))
        
    }

    shuffleGuess(array) {
        
            for(let i = array.length - 1; i > 0; i--){
                const j = Math.floor(Math.random() * i)
                const temp = array[i]
                array[i] = array[j]
                array[j] = temp
              }
              
              return array
               
    }

    getGuess() {
        let options = ['b', 'w', 'm', 'g', 'r', 'y']
        let len = options.length,
            currentIndex;
        for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
            let randIndex = Math.floor(Math.random() * (currentIndex + 1) );
            var temp = options[currentIndex];
            options[currentIndex] = options[randIndex];
            options[randIndex] = temp;
        }
            options.splice(4,2)
            return options
    }

    getPermutations(list, maxLen) {
        var perm = list.map(function(val) {
            return [val];
        });
        var generate = function(perm, maxLen, currLen) {
            if (currLen === maxLen) {
                return perm;
            }
      
            for (var i = 0, len = perm.length; i < len; i++) {
                var currPerm = perm.shift();
                for (var k = 0; k < list.length; k++) {
                    perm.push(currPerm.concat(list[k]));
                }
            }
           
            return generate(perm, maxLen, currLen + 1);
        };
        
        return generate(perm, maxLen, 1)
    };

    
            
    
    getNewGuess() {
       return this.getGuess()
    }

    roundAI(answerinput) {
        const answerArray = answerinput.split('')        
        const gameAnswer = answer.printAnswer(answerArray)
        let hintArr = []
        let newGuess = []
        let computerInput = [] 
        let newGuessArr = []
        for (let r = 1; r <= 20; r++) {
            
            console.log(`Round ${r} of 20`)
            
       

            board.getLine()

            

            if (input.playerGuess(computerInput) === answer.printAnswer(answerArray)) {
            console.log(`Computer won the game in ${r} rounds, the code was ${gameAnswer} and the guess was ${input.playerGuess(computerInput)}`)
            break
            }
            if (r === 20) {
            console.log(`Game over the code was ${gameAnswer}`)
            break
            } 
            
            
            
            for (let i = 0; i < 4; i++) {
            
                if (computerInput[i] !== answerArray[i] && answerArray.includes(computerInput[i]) === true) {
                    hintArr.push('o')
                    
                } 
                else if (computerInput[i] === answerArray[i]) {
                    hintArr.push('●')
                    
                } else {
                    hintArr.push('-')

                }
                
            }    
            
            if (hintArr.includes('-') === true) {
                computerInput = this.getGuess()
                console.log(`Computers guess: ${input.playerGuess(computerInput)}            hints from last round: ${hintArr.join(' ')}`)
                hintArr = []
            }

            
            
            else {
                computerInput = this.shuffleGuess(computerInput)
                console.log(`Computers guess: ${input.playerGuess(computerInput)}            hints from last round: ${hintArr.join(' ')}`)
                hintArr = []
            }
            
            prompt('Type anything to continue to next round: ')
        }
        
        
    }
}
