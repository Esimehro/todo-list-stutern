let inputValue = document.getElementById('input-btn');
let addBtn = document.getElementById('add-btn');
let listNum = document.getElementById('list-num');
let list = document.querySelector('li');
let editBtn = document.querySelector('button');
let deleteBtn = document.querySelector('button');
let todoTask = document.querySelector('p');

let todoList = [];



// let addNewTask = function(){
//     document.getElementById('input-btn').value = todoList;
//     let list = document.createElement('li');
//     list.appendChild(document.createTextNode(input.value));

//     // input.value = listItem;
//     // if(input.value === ){
//     //     return console.log(listItem.push(input.value));
//     // } else{
//     //     console.log('nothing');
//     // }
    
// }

// function addNewItem(){
//     if (inputValue.value === ''){
//         return '';
//     }else{
//         createNewTask();
//     }
// }




 function createNewTask(){
    if (inputValue.value === ''){
        console.log('ERROR!');
    }else{
        // create li element and append it to the parent element ol
        let list = document.createElement('li');
        listNum.appendChild(list);
        // create p element that holds the name of the task and append to the parent element li
        let todoTask = document.createElement('p');
        list.appendChild(todoTask);
        todoTask.appendChild(document.createTextNode(inputValue.value));
        todoList.unshift(1, todoTask);
        // create edit button, give the button a name, style, and append edit button to li
        let editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        editBtn.style.cssText = 'background: green; margin: 5px; border: none; color: white; padding: 4px;';
        list.appendChild(editBtn); 
        // create delete button, give the button a name, style, and append edit button to li
        deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.style.cssText = 'background: red; border: none; color: white; padding: 4px;';
        list.appendChild(deleteBtn);
    } resetInputField();
 }

 function resetInputField(){
    todoList = [];
    inputValue.textContent.todoList = '';
 }

// console.log(addBtn.addEventListener('click', addNewItem));
addBtn.addEventListener('click', createNewTask);

 // listNum.appendChild(document.createTextNode(inputValue));
    // if(inputValue === inputValue.value){
    //     return console.log('wrong!!!');


     // list.appendChild(listNum);
    // let editBtn = document.createElement('button');
    // editBtn.appendChild(list);
    // let deleteBtn = document.createElement('button');
    // deleteBtn.appendChild(list);