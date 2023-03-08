#! usr/bin/env node
"use strict";
exports.__esModule = true;
var commander_1 = require("commander");
var list_1 = require("./lib/list");
var add_1 = require("./lib/add");
var update_1 = require("./lib/update");
var delete_1 = require("./lib/delete");
var marked_1 = require("./lib/marked");
commander_1.program.command('list').description('list the todos').action(list_1.list);
commander_1.program.command('add').description('add the todos').action(add_1.add);
commander_1.program.command('update').description('update the todos').action(update_1.update);
commander_1.program.command('delete').description('delete the todos').action(delete_1.deleteByID);
commander_1.program.command('marked').description('mark the todos').action(marked_1.marked);
commander_1.program.parse();
