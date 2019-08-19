let imageSanFrancisco = document.querySelector('.trip-image');
let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');

function openModal() {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

imageSanFrancisco.onclick  = openModal;
backdrop.onclick = closeModal;