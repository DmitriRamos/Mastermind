import promptSync from "prompt-sync"
import chalk from 'chalk'
import {Answer} from './Answer.js'
import {Instruction} from './instruction.js'
import {Board} from './board.js'
import {Input} from "./input.js";

const prompt = promptSync()
const instructions = new Instruction
const answer = new Answer
const board = new Board
const input = new Input
export class Game {
    constructor() { 
        this.gameCode = answer.getCode()
        
    }


round() {
    const answerArray = answer.generateAnswer()
    const gameAnswer = answer.printAnswer(answerArray)
for (let r = 1; r <= 11; r++) {
    let hintArr = []
    console.log(`Round ${r} of 10`)
    const playerInput = input.getInput()
    const playerCode = input.playerGuess(playerInput).split('')
    board.getLine()
    
    if (input.playerGuess(playerInput) === gameAnswer) {
        console.log(`Congrats you won the game, the code was ${gameAnswer}`)
        break
    }
    if (r === 10 || playerInput.join('') === '!q') {
        console.log(`Game over the code was ${gameAnswer}`)
        break
    }
    

    for (let i = 0; i < 4; i++) {
        
        if (playerInput[i] !== answerArray[i] && answerArray.includes(playerInput[i]) === true) {
            hintArr.push('o')
        } 
        else if (playerInput[i] === answerArray[i]) {
            hintArr.push('●')
        } 
        
        else {
            hintArr.push('x')
        }
     
    }
    const randoHints = board.randomize(hintArr, 3)
    console.log(`Your guess: ${input.playerGuess(playerInput)}            hints: ${randoHints.join(' ')}`)
    hintArr = []
    }

   
}




    start(code) {
        instructions.printInstruction()
        this.round(code)
    }
}
