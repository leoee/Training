let listPeople = document.getElementById('listPeople');
let listStarships = document.getElementById('listStarships');
let text = document.getElementById('filter_input');
let radioChar = document.getElementById('radio_char');
let radioStar = document.getElementById('radio_starship');

let startships = [];
let characters = [];

document.body.style.backgroundImage = "url('images/d9ece2516f1ff9e56b73729a748d08c9.jpg')";

function filterCharacters(name) {

    let first = listPeople.firstElementChild;
    while (first) {
        first.remove();
        first = listPeople.firstElementChild;
    }

    characters.map(function (value) {
        if (value.includes(name)) {
            let li = document.createElement('li');
            li.textContent = value;
            listPeople.appendChild(li);

            li.addEventListener('mouseenter', function () {
                li.style.backgroundColor = "#708090";
                li.style.cursor = "pointer";
            });

            li.addEventListener('mouseleave', function () {
                li.style.background = "";
            });

            li.addEventListener('click', function () {
                let data = event.path[0].innerText;
                sessionStorage.setItem('name', data);
                window.location.href = "characters/character_details.html";
            });
        }
    });
}
function filterStarship(name) {

    let first = listStarships.firstElementChild;
    while (first) {
        first.remove();
        first = listStarships.firstElementChild;
    }

    startships.map(function (value) {
        if (value.includes(name)) {
            let li = document.createElement('li');
            li.textContent = value;
            listStarships.appendChild(li);

            li.addEventListener('mouseenter', function () {
                li.style.backgroundColor = "#708090";
                li.style.cursor = "pointer";
            });

            li.addEventListener('mouseleave', function () {
                li.style.background = "";
            });

            li.addEventListener('click', function () {
                let data = event.path[0].innerText;
                console.log(data);
                sessionStorage.setItem('name', data);
                window.location.href = 'starships/starship_details.html';
            });
        }

    });
}


text.addEventListener('input', function (evt) {
    if (radioChar.checked == true) {
        filterCharacters(this.value);
    }
    else if (radioStar.checked == true) {
        filterStarship(this.value);
    }
});

radioStar.addEventListener('click', function () {
    filterStarship(this.value);
});

radioChar.addEventListener('click', function () {
    filterCharacters(text.value);
});

async function searchAllStarships() {
    let next = "https://swapi.co/api/starships/";

    while (next != null) {
        let response = await fetch(next);
        response = await response.json();

        for (let i = 0; i < response.results.length; i++) {
            let li = document.createElement('li');
            listStarships.appendChild(li);
            li.textContent = response.results[i].name;

            startships.push(response.results[i].name);

            li.addEventListener('mouseenter', function () {
                li.style.backgroundColor = "#708090";
                li.style.cursor = "pointer";
            });

            li.addEventListener('mouseleave', function () {
                li.style.background = "";
            });

            li.addEventListener('click', function () {
                let data = event.path[0].innerText;
                console.log(data);
                sessionStorage.setItem('name', data);
                window.location.href = 'starships/starship_details.html';
            });
        }
        next = response.next;
    }
}

async function searchAllPeople() {
    let next = "https://swapi.co/api/people/";

    while (next != null) {
        let response = await fetch(next);
        response = await response.json();

        for (let i = 0; i < response.results.length; i++) {
            let li = document.createElement('li');
            listPeople.appendChild(li);
            li.textContent = response.results[i].name;

            characters.push(response.results[i].name);

            li.addEventListener('mouseenter', function () {
                li.style.backgroundColor = "#708090";
                li.style.cursor = "pointer";
            });

            li.addEventListener('mouseleave', function () {
                li.style.background = "";
            });

            li.addEventListener('click', function () {
                let data = event.path[0].innerText;
                sessionStorage.setItem('name', data);
                window.location = "characters/characters_details.html";
            });
        }
        next = response.next;
    }
}
searchAllStarships();
searchAllPeople();