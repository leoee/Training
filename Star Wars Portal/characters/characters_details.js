let name = sessionStorage.getItem('name');
let h1 = document.getElementById('peopleName');
let data;
let status = false;

let button = document.getElementById('btnBack');
let textName = document.getElementById('name');
let textHeight = document.getElementById('height');
let textMass = document.getElementById('mass');
let textHairColor = document.getElementById('hair_color');
let textSkinColor = document.getElementById('skin_color');
let textEyeColor = document.getElementById('eye_color');
let textBirthYear = document.getElementById('birth_year');
let textGender = document.getElementById('gender');
let textFilms = document.getElementById('films');
let textSpecies = document.getElementById('species');
let textStarships = document.getElementById('starships');
let textVehicles = document.getElementById('vehicles');



button.addEventListener('click', function () {
    window.location.href = '../index.html';
});

// Search data from link
// Type = 1 -> Films
// Type = 2 -> Species
// Type = 3 -> Starships
// Type = 4 -> Vechicles
function searchData(link, type) {
    console.log(link);
    fetch(link)
        .then(result => result.json())
        .then(response => {
            if (type == 1) {
                textFilms.textContent += response.title + "; ";
            }
            else if (type == 2)
                textSpecies.textContent += response.name + "; ";
            else if (type == 3)
                textStarships.textContent += response.name + "; ";
            else if (type == 4)
                textVehicles.textContent += response.name + "; ";
        })
        .catch(err => console.log(err));
}

// Load details about some character and set the texts into page
async function searchCharacterDetails() {
    status = false;
    let next = "https://swapi.co/api/people/";

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
    textHeight.textContent = data.height;
    textMass.textContent = data.mass;
    textHairColor.textContent = data.hair_color;
    textSkinColor.textContent = data.skin_color;
    textEyeColor.textContent = data.eye_color;
    textBirthYear.textContent = data.birth_year;
    textGender.textContent = data.gender;

    // if some vector is empty, it set with "-"
    if (data.films.length == 0)
        textFilms.textContent = "-";
    if (data.starships.length == 0)
        textStarships.textContent = "-";
    if (data.vehicles.length == 0)
        textVehicles.textContent = "-";
    if (data.species.length == 0)
        textSpecies.textContent = "-";

    for (let i = 0; i < data.films.length; i++) {
        searchData(data.films[i], 1);
    }

    for (let i = 0; i < data.species.length; i++) {
        searchData(data.species[i], 2);
    }

    for (let i = 0; i < data.starships.length; i++) {
        searchData(data.starships[i], 3);
    }

    for (let i = 0; i < data.vehicles.length; i++) {
        searchData(data.vehicles[i], 4);
    }

}

function setUp() {
    document.body.style.backgroundImage = "url('../images/d9ece2516f1ff9e56b73729a748d08c9.jpg')";
    h1.style.color = 'white';
    h1.textContent = name;
    h1.innerHTML = name;
    
    searchCharacterDetails();
}
setUp();

