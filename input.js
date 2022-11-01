import chalk from 'chalk'
import promptSync from "prompt-sync"
const prompt = promptSync()

export class Input {
    constructor() {
        this.ball = '⬤ '
        this.blue = chalk.blue
        this.white = chalk.white
        this.magenta = chalk.magenta
        this.green = chalk.green
        this.red = chalk.red
        this.yellow = chalk.yellow
    }

    getInput() {
        const guessString = prompt('What is your guess?: ')
            
        return guessString.split('')
    }

    playerGuess(input) {
        
        
        const guessArr = []
        for (let i = 0; i <= 5; i++) {
            switch (input[i]) {
                case 'b':
                    guessArr.push(this.blue(this.ball))
                    break
                case 'w':
                    guessArr.push(this.white(this.ball))
                    break;
                case 'm':
                    guessArr.push(this.magenta(this.ball))
                    break;
                case 'g':
                    guessArr.push(this.green(this.ball))
                    break;
                case 'r':
                    guessArr.push(this.red(this.ball))
                    break;
                case 'y':
                    guessArr.push(this.yellow(this.ball))
                    break;
            }
    }
    return guessArr.join(' ')
}
}