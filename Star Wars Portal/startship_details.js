let name = sessionStorage.getItem('name');
let h1 = document.getElementById('starshipName');
let data;
let status = false;

let textName = document.getElementById('name');
let textModel = document.getElementById('model');
let textManufacturer = document.getElementById('manufacturer');
let textCost = document.getElementById('cost_in_credits');
let textLength = document.getElementById('length');
let textMaxSpeed = document.getElementById('max_atmosphering_speed');
let textPassenger = document.getElementById('passengers');
let textPilots = document.getElementById('pilots');
//background-image: url('images/d9ece2516f1ff9e56b73729a748d08c9.jpg');

//h1.style.color = 'white';
h1.innerHTML = name;

async function searchPeople(link, last) {
    console.log(link);
    fetch(link)
        .then(result => result.json())
        .then(response => {
            if (last === false)
                textPilots.textContent += response.name + ", ";
            else
                textPilots.textContent += response.name;
        })
        .catch(err => console.log(err));
}

async function searchStarshipDetails() {
    status = false;
    let list = document.getElementById('listStarships');
    let next = "https://swapi.co/api/starships/";

    while (next != null) {
        let response = await fetch(next);
        response = await response.json();

        for (let i = 0; i < response.results.length; i++) {
            if (response.results[i].name == name) {
                data = response.results[i];
                status = true;
                break;
            }
        }
        if (status)
            break;
        next = response.next;
    }

    textName.textContent = data.name;
    textModel.textContent = data.model;
    textManufacturer.textContent = data.manufacturer;
    textCost.textContent = data.cost_in_credits;
    textLength.textContent = data.length;
    textMaxSpeed.textContent = data.max_atmosphering_speed;
    textPassenger.textContent = data.passengers;

    if (data.pilots.length == 0) {
        textPilots.textContent = "-";
    }

    for (let i = 0; i < data.pilots.length; i++) {
        if (i == data.pilots.length - 1)
            searchPeople(data.pilots[i], true);
        else
            searchPeople(data.pilots[i], false);
    }
}

searchStarshipDetails();
