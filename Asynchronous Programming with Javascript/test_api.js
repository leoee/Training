/*async function searchAllMovies() {
    let list = document.getElementById('listMovies');
    let response = await fetch("https://swapi.co/api/films/");
    let resp = await response.json();

    for (let i = 0; i < resp.results.length; i++) {
        let li = document.createElement('li');
        li.textContent = resp.results[i].title;
        list.appendChild(li);
    }
}*/
function searchAllVehicles() {
    let list = document.getElementById('listVehicles');
    let response = fetch("https://swapi.co/api/vehicles/")
                    .then(result => result.json())
                    .then(response => {
                        console.log(response.results);
                        for (let i = 0; i < response.results.length; i++) {
                            let li = document.createElement('li');
                            li.textContent = response.results[i].name;
                            list.appendChild(li);
                        }
                    })
                    .catch(err => console.log(err));
}

function searchAllPlanets() {
    let list = document.getElementById('listPlanets');
    let response = fetch("https://swapi.co/api/planets/")
                    .then(result => result.json())
                    .then(response => {
                        console.log(response.results);
                        for (let i = 0; i < response.results.length; i++) {
                            let li = document.createElement('li');
                            li.textContent = response.results[i].name;
                            list.appendChild(li);
                        }
                    })
                    .catch(err => console.log(err));
}

function searchAllSpecies() {
    let list = document.getElementById('listSpecies');
    let response = fetch("https://swapi.co/api/species/")
                    .then(result => result.json())
                    .then(response => {
                        for (let i = 0; i < response.results.length; i++) {
                            let li = document.createElement('li');
                            li.textContent = response.results[i].name;
                            list.appendChild(li);
                        }
                    })
                    .catch(err => console.log(err));
}

function searchAllStarships() {
    let list = document.getElementById('listStarships');
    let response = fetch("https://swapi.co/api/starships/")
                    .then(result => result.json())
                    .then(response => {
                        for (let i = 0; i < response.results.length; i++) {
                            let li = document.createElement('li');
                            li.textContent = response.results[i].name;
                            list.appendChild(li);
                        }
                    })
                    .catch(err => console.log(err));
}

function searchAllMovies() {
    let list = document.getElementById('listMovies');
    let response = fetch("https://swapi.co/api/films/")
                    .then(result => result.json())
                    .then(response => {                    
                        for (let i = 0; i < response.results.length; i++) {
                            let li = document.createElement('li');
                            li.textContent = response.results[i].title;
                            list.appendChild(li);
                        }
                    })
                    .catch(err => console.log(err));
}

async function searchAllPeople() {
    let list = document.getElementById('listPeople');
    let response = await fetch("https://swapi.co/api/people/");
    let resp = await response.json();

    for (let i = 0; i < resp.results.length; i++) {
        let li = document.createElement('li');
        li.textContent = resp.results[i].name;
        list.appendChild(li);
    }
}

searchAllMovies();
searchAllPeople();
searchAllStarships();
searchAllSpecies();
searchAllVehicles();
searchAllPlanets();
