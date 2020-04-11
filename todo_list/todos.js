
console.log('Starting todos.js');

const fs = require('fs');

// Add Item
const add = (title, body) => {
    const todos = fetchData();
    id = id + 1
    checked = "false"
    const todo = {
        id,
        title,
        body,
        checked
    };

    const checkDuplication = todos.filter((todo) => todo.title === title);
 
    if (checkDuplication.length === 0) {
        todos.push(todo);
        fs.writeFileSync('./data.json', JSON.stringify(todos));
        console.log('-----------------------------');
        console.log('item is added successfully');
    }



};

// read data and convert to json object
const fetchData = () => {
    try {
        const todosString = fs.readFileSync('./data.json', 'utf8');
        return JSON.parse(todosString);
    } catch (e) {
        return [];
    }
};

// Edit item

const editItem = (id , title , body, checked ) => {

    const items = JSON.parse(fs.readFileSync('./data.json', 'utf8'))

            var i;
            for(i=0 ; i< items.length; i++)
            {        
                    if (items[i].id == id)
                    {
                        items[i].title = title;
                        items[i].body = body;
                        items[i].checked = checked;

                    }
                        
            }
        
        
                fs.writeFileSync('./data.json', JSON.stringify(items))  
                console.log('-------------')
                console.log("item is edited")
    
}


// delete a todo item //
const deleteItem = (title) => {
    const todos = fetchData();
    const filteredtodos = todos.filter((todo) => todo.title !== title);
    fs.writeFileSync('./data.json', JSON.stringify(filteredtodos));
 
    return todos.length !== filteredtodos.length;
};

// list all items 
const listItems = () => {
    return fetchData();
};

const checkedItems = () => {
    const todos = fetchData();
    const items = todos.filter((todo) => todo.checked === 'true');
    return items
}

const uncheckedItems = () => {
    const todos = fetchData();
    const items = todos.filter((todo) => todo.checked === 'false');
    return items
}


module.exports = {
    add,
    editItem,
    deleteItem,
    listItems,
    checkedItems,
    uncheckedItems

};