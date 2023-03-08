"use strict";
exports.__esModule = true;
exports.update = void 0;
var conf_1 = require("conf");
var chalk = require("chalk");
var config = new conf_1["default"]({ projectName: 'todo-cli' });
var todoItems = Array.from(config.get('todo-cli'));
var update = function (todoID, changedText) {
    var todoToUpdate = todoItems.find(function (todo) { return todo.id === todoID; });
    if (todoToUpdate) {
        todoToUpdate.desc = changedText;
        console.log(chalk.green('todo item updated'));
        config.set('todo-cli', todoItems);
    }
};
exports.update = update;
