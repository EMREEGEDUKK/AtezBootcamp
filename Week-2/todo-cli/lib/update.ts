import conf from 'conf'
import * as chalk from 'chalk'
import {Itodo} from '../lib/model'



const config = new conf({projectName: 'todo-cli'});
let todoItems: Itodo[] = Array.from(config.get('todo-cli') as Iterable<Itodo>);

export const update = (todoID:number,changedText:string) => {
    const todoToUpdate = todoItems.find(todo => todo.id === todoID);
    
    if (todoToUpdate) {
        todoToUpdate.desc = changedText;
        console.log(chalk.green('todo item updated'));
        config.set('todo-cli',todoItems);
    }
    
    
}


