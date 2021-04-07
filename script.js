
const ul = document.querySelector('#toDoList');
const clearBtn = document.querySelector('#clearList');

function createLi(text) {
    const li = document.createElement('li');
    
    const removeButton = createRemoveButton(li);
    const textSpan = createTextSpan(text);

    li.appendChild(textSpan);
    li.appendChild(removeButton);

    clearBtn.setAttribute('style', 'display: show');

   return li;
}


//
document.querySelector('#addForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const text = input.value; 
    if (text === "") return;


    const li = createLi(text);
 
    ul.appendChild(li);
    
    input.value = "";
});


function createRemoveButton(todo) { 
    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';

    removeButton.addEventListener("click", () => { 
        todo.remove();
    })
    return removeButton;
}


function createTextSpan(text) { 
    const span = document.createElement('span');
    span.textContent = text;

    span.addEventListener("click", () => { 
        span.classList.toggle('line')
    })
    return span; 
}



function clearList(){
    ul.innerHTML ="";
    clearBtn.setAttribute('style', 'display: none');
}

