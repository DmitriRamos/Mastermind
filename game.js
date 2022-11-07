import promptSync from "prompt-sync"
import chalk from 'chalk'
import {Answer} from './Answer.js'
import {Instruction} from './instruction.js'
import {Board} from './board.js'
import {Input} from "./input.js";
import {CodeKeeper} from './codekeeper.js'
import { AI } from "./ai.js"

const prompt = promptSync()
const instructions = new Instruction
const answer = new Answer
const board = new Board
const input = new Input
const codeKeep = new CodeKeeper
const aI = new AI

export class Game {
    constructor() { 
        this.gameCode = answer.generateAnswer()
        
    }




round() {
    const answerArray = this.gameCode
    const gameAnswer = answer.printAnswer(answerArray)
for (let r = 1; r <= 11; r++) {
    let hintArr = []
    console.log(`Round ${r} of 10`)
    const playerInput = input.getGuess()
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
            
        } else {
            hintArr.push('-')
        }
        
        
     
    }
    const randoHints = board.randomize(hintArr, 3)
    console.log(`Your guess: ${input.playerGuess(playerInput)}            hints: ${randoHints.join(' ')}`)
    hintArr = []
    }

   
}



    start(code) {
        instructions.printInstruction()
        const gameType = input.pickGame()
        if (gameType === 'g' ) {
            this.round()
        } 
        else if (gameType === 'm') {
            const playerChoice = prompt('What is your code?: ')
            aI.roundAI(playerChoice)
        } 
        else {
            console.log('Sorry you picked an invalid option, please try again')
            this.start()
        }

    }
}

//Debug Below
//console.log(input.createCode())
