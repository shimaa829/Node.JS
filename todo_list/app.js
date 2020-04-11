const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const todos = require('./todos.js');

const argv = yargs.argv;
const command = argv._[0];
// console.log('Running Command: ', command);

const exists =  fs.existsSync('./data.json')

if (!exists){
    id = 0
}else{
    id = todos.listItems().length
    // console.log("id ==> ",id)
    if (command === 'add') {
        todos.add(argv.title , argv.body);
        
    }else if (command === 'delete') {
            const ItemDeleted = todos.deleteItem(argv.title);
            const message = ItemDeleted ? 'Item was deleted' : 'Item not found';
            console.log(message);

    }else if (command === 'edit'){
        
      todos.editItem(argv.id , argv.title , argv.body, argv.checked);

    } else if (command === 'list-all') {
            const allItems = todos.listItems();
            console.log('-----------------------------');
            allItems.forEach((todo) => console.log("Title:",todo.title ,"      |Body:", todo.body ,"      |checked:", todo.checked));
    } else if (command === 'list-checked') {
            const checkedItems = todos.checkedItems();
            console.log('-----------------------------');
            checkedItems.forEach((todo) => console.log("Title: ",todo.title ,"  Body: ", todo.body ,"   checked: ", todo.checked));
   
    } else if (command === 'list-unchecked') {
            const uncheckedItems = todos.uncheckedItems();
            console.log('-----------------------------');
            uncheckedItems.forEach((todo) => console.log("Title: ",todo.title ,"  Body: ", todo.body ,"   checked: ", todo.checked));
    } else {

        console.log('Invalid command.');
    }
}