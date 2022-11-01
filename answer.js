import chalk from 'chalk'

export class Answer {
    constructor() {
        this.ball = '⬤ '
        this.blue = chalk.blue
        this.white = chalk.white
        this.magenta = chalk.magenta
        this.green = chalk.green
        this.red = chalk.red
        this.yellow = chalk.yellow
        this.randomNum = Math.random()
        
    
    }

    generateAnswer() {
        const options = ['b', 'w', 'm', 'g', 'r', 'y']
        const newCode = [...options]

        for (let i = 0 ; i <= 6; i++) {
            
            const randomPosition = Math.floor((newCode.length - i) * this.randomNum);
            const randomItem = newCode.splice(randomPosition, 1)
            newCode.push(...randomItem)
            
        }
        const finalCode = newCode.slice(0,4)
        return finalCode
    }

    printAnswer(answerArr) {
        let answerToPrint = []
        for (let i = 0; i <= 5; i++) {
        switch (answerArr[i]) {
            case 'b':
                answerToPrint.push(this.blue(this.ball))
                break
            case 'w':
                answerToPrint.push(this.white(this.ball))
                break;
            case 'm':
                answerToPrint.push(this.magenta(this.ball))
                break;
            case 'g':
                answerToPrint.push(this.green(this.ball))
                break;
            case 'r':
                answerToPrint.push(this.red(this.ball))
                break;
            case 'y':
                answerToPrint.push(this.yellow(this.ball))
                break;
        }
    }
    return answerToPrint.join(' ')
    }
    
    getCode() {
        return this.printAnswer(this.generateAnswer())
    }
}

