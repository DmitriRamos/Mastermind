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
     
        
    }

    isPartOfArray(hints, arr) {
        return arr.every(i => hints.includes(i));
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


    ifColorRight(array, hintArr) {
        let swapped = 0
        let shuffle = 0

        if (this.isPartOfArray(['o', 'o', 'o', 'o'], hintArr) === true && shuffle === 2) {
            this.shuffleGuess(array)
        }
        if (this.isPartOfArray(['o', 'o', 'o', 'o'], hintArr) === true) {
            let temp = array[0]
            let temptwo = array[2]
            array[0] = array[1]
            array[1] = temp
            array[2] = array[3]
            array[3] = temptwo
            shuffle = 1
        }
        if (this.isPartOfArray(['o', 'o', 'o', 'o'], hintArr) === true && shuffle === 1) {
            let temp = array[0]
            array[0] = array[3]
            array[3] = temp
            shuffle = 2
        }

        if (this.isPartOfArray(['o', 'o', '●', '●'], hintArr) === true && swapped === 1) {
            let temp = array[1]
            array[1] = array[2]
            array[2] = temp
        }
        if (this.isPartOfArray(['o', 'o', '●', '●'], hintArr ) === true ) {
            let temp = array[0]
            let temptwo = array[1]
            array[0] = array[3]
            array[3] = temp
            array[1] = array[2]
            array[2] = temptwo
            swapped = 1
        }
        return array
    }
            
    
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
        let swapped = false
        for (let r = 1; r <= 10; r++) {
            
            console.log(`Round ${r} of 10`)
            
       

            board.getLine()

            

            if (input.playerGuess(computerInput) === answer.printAnswer(answerArray)) {
            console.log(`Computer won the game in ${r} rounds, the code was ${gameAnswer} and the guess was ${input.playerGuess(computerInput)}`)
            break
            }
            if (r === 10) {
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
            
            if (this.isPartOfArray(hintArr, ['-']) === true) {
                computerInput = this.getGuess()
                console.log(`Computers guess: ${input.playerGuess(computerInput)}            hints from last round: ${hintArr.join(' ')}`)
                hintArr = []
            }

            
            
            else if (this.isPartOfArray(hintArr, ['-']) === false) {
                computerInput = this.shuffleGuess(computerInput)
                console.log(`Computers guess: ${input.playerGuess(computerInput)}            hints from last round: ${hintArr.join(' ')}`)
                hintArr = []
                swapped = true
            }

            else if (this.isPartOfArray(['-'], hintArr) === false && swapped === true) {
                computerInput = this.ifColorRight(computerInput, hintArr)
                console.log(`Computers guess: ${input.playerGuess(computerInput)}            hints from last round: ${hintArr.join(' ')}`)
                hintArr = []
            }
        
            
            prompt('Type anything to continue to next round: ')
        }
        
        
    }
}
