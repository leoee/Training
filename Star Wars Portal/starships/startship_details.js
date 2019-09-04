let name = sessionStorage.getItem('name');
let data;
let status = false;

let button = document.getElementById('button');
let h1 = document.getElementById('starshipName');
let textName = document.getElementById('name');
let textModel = document.getElementById('model');
let textManufacturer = document.getElementById('manufacturer');
let textCost = document.getElementById('cost_in_credits');
let textLength = document.getElementById('length');
let textMaxSpeed = document.getElementById('max_atmosphering_speed');
let textPassenger = document.getElementById('passengers');
let textPilots = document.getElementById('pilots');


button.addEventListener('click', function () {
    window.location.href = '../index.html';
});

// Search peoples from link
function searchPeople(link) {
    console.log(link);
    fetch(link)
        .then(result => result.json())
        .then(response => {
            textPilots.textContent += response.name + "; ";
        })
        .catch(err => console.log(err));
}

// Search starships details
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

    // if film vector is empty, it set with "-"
    if (data.pilots.length == 0) {
        textPilots.textContent = "-";
    }

    for (let i = 0; i < data.pilots.length; i++) {
        searchPeople(data.pilots[i]);
    }
}

function setUp() {
    document.body.style.backgroundImage = "url('../images/d9ece2516f1ff9e56b73729a748d08c9.jpg')";
    h1.style.color = 'white';
    h1.innerHTML = name;

    searchStarshipDetails();
}

setUp();

