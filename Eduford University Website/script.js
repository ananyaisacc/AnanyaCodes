const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.button');
// const storageInput = localStorage.getItem('textinput')

// if(storageInput) {
//     text.textContent = storedInput
// }

storageInput.addEventListener('input', letter => {
    //console.log(letter.target.value)
    //console.log(letter)
    text.textContent = letter.target.value;
})

const saveToLocalStorage = () =>{
    localStorage.setItem('textinput', text.textContent)
}

button.addEventListener('click', saveToLocalStorage);

alert(localStorage.getItem('textinput'));

var a = localStorage.getItem('textinput');
console.log(document.getElementById('demo').innerHTML);