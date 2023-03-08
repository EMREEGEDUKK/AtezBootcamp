#! usr/bin/env node

import {program} from 'commander'
import {list} from './lib/list'
import {add} from './lib/add'
import {update} from './lib/update'
import {deleteByID} from './lib/delete'
import {searchByText} from './lib/search'
import {marked} from './lib/marked'
 







program.command('list').description('list the todos').action(list);
program.command('add').description('add the todos').action(add);
program.command('update').description('update the todos').action(update);
program.command('delete').description('delete the todos').action(deleteByID);
program.command('marked').description('mark the todos').action(marked);
program.command('search').description('search the todos').action(searchByText);




program.parse();
















