"use strict";
exports.__esModule = true;
exports.deleteByID = void 0;
var conf_1 = require("conf");
var chalk = require("chalk");
var config = new conf_1["default"]({ projectName: 'todo-cli' });
var todoItems = Array.from(config.get('todo-cli'));
var deleteByID = function (todoID) {
    var todoIndex = todoItems.findIndex(function (todo) { return todo.id === todoID; });
    if (todoIndex !== -1) {
        todoItems.splice(todoIndex, 1);
        console.log(chalk.green('todo deleted'));
        config.set('todo-cli', todoItems);
    }
    else {
        console.log(chalk.red('No todo with this id was found'));
    }
};
exports.deleteByID = deleteByID;

