// check connection
console.log('form.js is connected');

// Get the elements
const messagesList = document.getElementsByClassName('messages');
const submitBtn = document.getElementById('submit');
let arr = [];
let canAdd = false;

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    verifyUserInput();

    addComment();
})

function verifyUserInput() {

    // guarantee that the array is empty
    arr = [];

    for (let i = 0; i < messagesList.length; i++) {
        
        if (messagesList[i].value === '') {
            changeInputColor(messagesList, i, 'LightCoral');
            canAdd = false;
        } else {
            changeInputColor(messagesList, i, 'White');
            canAdd = true;
        }
        arr.push(canAdd);
    }
}

// change color based on emptiness of the input
function changeInputColor(elementsList, index, color) {
    return elementsList[index].style.backgroundColor = color;
}

function checker(b) {
    return b === true;
}

// add comment to DOM
function addComment() {

    if (isEmailValid(messagesList)) {
        // if all the inputs are filled add the comment to the DOM
        if (arr.every(checker)) {
            let html = `<div class="msg">
                        <p>${new Date()}</p>
                        <p> <b>${messagesList[0].value}</b> escreveu:</p>
                        <p>${messagesList[2].value}</p>
                        </div>`;
            
            submitBtn.insertAdjacentHTML("afterend", html);

            cleanFields();
        }
    } else {
        alert('Email inválido');
        changeInputColor(messagesList, 1, 'LightCoral');
    }
}

// clean fields 
function cleanFields() {
    for (let i = 0; i < messagesList.length; i++) {
        messagesList[i].value = '';
    }
}

function isEmailValid(messagesList) {
    return messagesList[1].value.includes('@');
} 