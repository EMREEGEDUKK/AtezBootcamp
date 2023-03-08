import * as chalk from 'chalk'
import conf from 'conf'
import {Itodo} from'./model'


const config = new conf({projectName: 'todo-cli'});
let todoItems: Itodo[] = Array.from(config.get('todo-cli') as Iterable<Itodo>);


export const searchByText = (text:string) => {
    
    const searchResult: Itodo[] = [];

    
    todoItems.forEach((todo) => {
       
        if (todo.desc.includes(text)) {
            
            searchResult.push(todo);
        }
    });


    if(searchResult.length === 0) {
        console.log(chalk.red(`the search for ${text} was not found`));
    }
    else {
        console.log(chalk.green(`${searchResult.length} found different results.`));
        searchResult.forEach((item) => {
            console.log(item);
        })
    }

}
