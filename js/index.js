let inputValue = document.getElementById('input-btn');
let addBtn = document.getElementById('add-btn');
let listNum = document.getElementById('list-num');
let list = document.querySelector('li');
let editBtn = document.querySelector('button');
let deleteBtn = document.querySelector('button');


let todoList = [];



function uniqueId(){
	let rtn = '';
    let ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let ID_LENGTH = 5;
        for (let i = 0; i < 5; i++) {
      rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return rtn;
}

function taskLength(){
	return inputValue.value.length;
}


function addItem(){
    const uniqueNum = uniqueId();

    
        if (taskLength() != 0){

            let list = document.createElement('li');
            list.innerText = inputValue.value;
            list.classList.add(uniqueNum);
            listNum.prepend(list);
            

            let editBtn = document.createElement('button');
            editBtn.innerText = 'Edit';
            editBtn.classList.add('edit-button');
            editBtn.style.cssText = 'background: #595a549e; border-radius: 5px; margin: 5px; border: none; color: white; padding: 4px; margin-left: 40px; font-size: 11px;';
            list.appendChild(editBtn);

    
            let deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Delete';
            deleteBtn.classList.add(uniqueNum);
            deleteBtn.style.cssText = 'background: red; border-radius: 5px; border: none; color: white; padding: 4px; font-size: 11px;';
            list.appendChild(deleteBtn);  
            deleteBtn.addEventListener('click', () =>{
                list.remove('list.' + uniqueNum);  
            })
    
        } else {
            clearInput();
        }
 };


 function clearInput(){
    inputValue = document.getElementById('input-btn');
    inputValue.value = '';
 }

 function deleteBtnWasClicked(){
	if(taskLength() > 0){
		addItem();
	}
}

// let storageLi = document.querySelector('li');
// storageLi = localStorage.getItem('TODO')

// inputValue.addEventListener('keyup', display);
// function display(){
//     localStorage.setItem('TODO', JSON.stringify(inputValue.value));
// }


addBtn.addEventListener("click", addItem);
addBtn.addEventListener('click', addItem);
addBtn.addEventListener('click', clearInput);
deleteBtn.addEventListener('click', deleteBtnWasClicked);
// inputValue.addEventListener('keyup', display);