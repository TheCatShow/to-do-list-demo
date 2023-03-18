const li = document.createElement("li");

let input = document.querySelector('input');
let text = document.querySelector('text');
let addBtn = document.querySelector('#addBtn');

li.classList.add('listElement');

addBtn.addEventListener('click', function (event) {
    event.preventDefault();
    list.append(input.value);
})
