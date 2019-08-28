let button = document.getElementById('button');


button.addEventListener('click', () => {
    let text = document.getElementById('input-text');
    let list = document.getElementById('list');
    let li = document.createElement('li');

    if(text.value !== ""){
        li.textContent = text.value;
        list.appendChild(li);
        text.value="";
        text.focus();
    }
    else {
        alert('Campo vazio!');
    }

});

button.addEventListener('mouseenter', () => {
    button.style.background = 'red';
});

button.addEventListener('mouseleave', () => {
    button.style.background = "";
});