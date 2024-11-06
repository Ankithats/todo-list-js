
let todo = [];


function add() {
    let item = prompt("Enter the item to add:");
    if (item) {
        todo.push(item);
       
    } 
}

function display() {
    if (todo.length === 0) {
        alert("To-do list is empty.");
    } else {
        alert("To-do list:\n" + todo.map((item, index) => `${index + 1}. ${item}`).join("\n"));
    }
}


function update() {
    display();
    let index = parseInt(prompt("Enter the number of the item you want to update:")) - 1;
    if (index >= 0 && index < todo.length) {
        let newItem = prompt("Enter the new item:");
        todo[index] = newItem;
        
    }
}


function remove() {
    displayTodos();
    let index = parseInt(prompt("Enter the number of the item you want to delete:")) - 1;
    if (index >= 0 && index < todo.length) {
        let removed = todo.splice(index, 1);
        alert(`Deleted: ${removed}`);
    } else {
        alert("Invalid item number!");
    }
}


function main() {
    let choice;
    do {
        choice = prompt("Choose an option:\n1. Add item\n2. Display items\n3. Update item\n4. Delete item\n5. Exit");
        switch (choice) {
            case '1':
                add();
                break;
            case '2':
                display();
                break;
            case '3':
                update();
                break;
            case '4':
                remove();
                break;
            case '5':
                alert("Exiting...");
                break;
            default:
                alert("Invalid choice! Please enter a number from 1 to 5.");
        }
    } while (choice !== '5');
}


main();
