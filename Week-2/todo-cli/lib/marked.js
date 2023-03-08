"use strict";
exports.__esModule = true;
exports.marked = void 0;
var chalk = require("chalk");
var conf_1 = require("conf");
var config = new conf_1["default"]({ projectName: 'todo-cli' });
var todoItems = Array.from(config.get('todo-cli'));
var marked = function (desc) {
    todoItems.forEach(function (todo) {
        if (todo.desc === desc) {
            todo.checked = true;
            console.log(chalk.green('this todo has been completed'));
            console.log(todo);
        }
    });
};
exports.marked = marked;
