"use strict";
exports.__esModule = true;
exports.list = void 0;
var conf_1 = require("conf");
var chalk = require("chalk");
var config = new conf_1["default"]({ projectName: 'todo-cli' });
var todoItems = Array.from(config.get('todo-cli'));
var list = function () {
    if (todoItems.length == 0) {
        console.log(chalk.yellow('to do bulunamadı'));
    }
    else {
        todoItems.forEach(function (todos) {
            if (todos.checked) {
                console.log(chalk.green(" ToDo ID : ".concat(todos.id, "  desc: ").concat(todos.desc)));
            }
            else {
                console.log(chalk.blue(" ToDo ID : ".concat(todos.id, "  desc: ").concat(todos.desc)));
            }
        });
        console.log('completed todos are green, others are blue');
    }
};
exports.list = list;
