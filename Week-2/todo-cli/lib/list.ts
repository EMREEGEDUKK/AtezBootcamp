import conf from 'conf'
import * as chalk from 'chalk'
import {Itodo} from '../lib/model'






const config = new conf({projectName: 'todo-cli'});


let todoItems: Itodo[] = Array.from(config.get('todo-cli') as Iterable<Itodo>);

export const list = () => {


    if(todoItems.length == 0 ) {
        console.log(chalk.yellow('to do bulunamadı'));
    }

    else {
      todoItems.forEach((todos) => {
        if(todos.checked) {
           console.log(chalk.green(` ToDo ID : ${todos.id}  desc: ${todos.desc}`));
        }
        else {
          console.log(chalk.blue(` ToDo ID : ${todos.id}  desc: ${todos.desc}`));
        }
        
      })  
      console.log('completed todos are green, others are blue');
    }
}
