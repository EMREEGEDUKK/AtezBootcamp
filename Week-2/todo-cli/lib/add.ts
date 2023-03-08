import * as chalk from 'chalk'
import conf from 'conf'
import {Itodo} from'./model'


const config = new conf({projectName: 'todo-cli'});
let todoItems: Itodo[] = Array.from(config.get('todo-cli') as Iterable<Itodo>);

export const add = (newTodo: Itodo) => {
    if(newTodo) {
        todoItems.push(
        {
            id:newTodo.id,
            desc: newTodo.desc,
            checked: false,
            createdTime: newTodo.createdTime
        }
    )
    config.set('todo-cli',todoItems);
    console.log(chalk.green('todo added.'));
    }
      
}



