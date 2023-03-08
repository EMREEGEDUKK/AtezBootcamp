"use strict";
exports.__esModule = true;
exports.searchByText = void 0;
var chalk = require("chalk");
var conf_1 = require("conf");
var config = new conf_1["default"]({ projectName: 'todo-cli' });
var todoItems = Array.from(config.get('todo-cli'));
var searchByText = function (text) {
    var searchResult = [];
    todoItems.forEach(function (todo) {
        if (todo.desc.includes(text)) {
            searchResult.push(todo);
        }
    });
    if (searchResult.length === 0) {
        console.log(chalk.red("the search for ".concat(text, " was not found")));
    }
    else {
        console.log(chalk.green("".concat(searchResult.length, " found different results.")));
        console.log(searchResult);
    }
};
exports.searchByText = searchByText;

