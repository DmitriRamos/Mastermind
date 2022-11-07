import chalk from 'chalk';
import { start } from 'repl';
import { Answer } from './Answer.js';
import {Game} from './Game.js'
import {AI} from './ai.js'
const ai = new AI
const game = new Game
const answer = new Answer

game.start()



