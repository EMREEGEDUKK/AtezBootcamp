import conf from 'conf'
import * as chalk from 'chalk'
import {Itodo} from '../lib/model'

const config = new conf({projectName: 'todo-cli'});
let todoItems: Itodo[] = Array.from(config.get('todo-cli') as Iterable<Itodo>);


export const deleteByID = (todoID:number) => {
    const todoIndex = todoItems.findIndex((todo) => todo.id === todoID);
    
    if (todoIndex !== -1) {
        todoItems.splice(todoIndex, 1);
        console.log(chalk.green('todo deleted'));
        config.set('todo-cli',todoItems);
    }
    else {
        console.log(chalk.red('No todo with this id was found'));
    }
    
}

