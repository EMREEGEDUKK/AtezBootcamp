import * as chalk from 'chalk'
import conf from 'conf'
import {Itodo} from'./model'

const config = new conf({projectName: 'todo-cli'});
let todoItems: Itodo[] = Array.from(config.get('todo-cli') as Iterable<Itodo>);


export const marked = (desc:string) => {
    todoItems.forEach((todo) => {
        if (todo.desc === desc) {
          todo.checked = true;
          console.log(chalk.green('this todo has been completed'));
          console.log(todo);
        }
      });
}