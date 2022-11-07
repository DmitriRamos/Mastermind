import chalk from 'chalk'

export class CodeKeeper {
    constructor () {


    }

    playerCode(input) {
        
        
        const codeArr = []
        for (let i = 0; i <= 5; i++) {
            switch (input[i]) {
                case 'b':
                    codeArr.push(this.blue(this.ball))
                    break
                case 'w':
                    codeArr.push(this.white(this.ball))
                    break;
                case 'm':
                    codeArr.push(this.magenta(this.ball))
                    break;
                case 'g':
                    codeArr.push(this.green(this.ball))
                    break;
                case 'r':
                    codeArr.push(this.red(this.ball))
                    break;
                case 'y':
                    codeArr.push(this.yellow(this.ball))
                    break;
            }
        }
    return codeArr.join(' ')
    }

    codeGame(code) {
        const compCode = code
        const yourCode = this.playerCode(code)
        
    }

}