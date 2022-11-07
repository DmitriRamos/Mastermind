import chalk from 'chalk'


export class Instruction {
    constructor() {
        this.ball = '⬤'
        this.blue = chalk.blue
        this.white = chalk.white
        this.magenta = chalk.magenta
        this.green = chalk.green
        this.red = chalk.red
        this.yellow = chalk.yellow
        
    }

    printInstruction() {
        console.log(`Welcome! The object of this game is to guess the order and color of the 4 balls placed by the computer or yourself. You have 10 tries before the game ends, if you can guess correctly before then you win!
        
        Color choices: ${this.blue('b ') + this.white('w ') + this.magenta('m ') + this.green('g ') + this.red('r ') + this.yellow('y')}
        Example turn input: ygrb
        Hint key: 
        ● = A ball is the correct color & in correct position. 
        o = A ball is the correct color & in the incorrect position.
        x = A ball is the incorrect color.
        (Hints are displayed in random order)
        type !q to give up and see solution`)
    }

    

    
}


