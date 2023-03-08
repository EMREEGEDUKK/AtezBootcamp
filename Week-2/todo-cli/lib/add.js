"use strict";
exports.__esModule = true;
exports.add = void 0;
var chalk = require("chalk");
var conf_1 = require("conf");
var config = new conf_1["default"]({ projectName: 'todo-cli' });
var todoItems = Array.from(config.get('todo-cli'));
var add = function (newTodo) {
    if (newTodo) {
        todoItems.push({
            id: newTodo.id,
            desc: newTodo.desc,
            checked: false,
            createdTime: newTodo.createdTime
        });
        config.set('todo-cli', todoItems);
        console.log(chalk.green('todo added.'));
    }
};
exports.add = add;
