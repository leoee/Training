let listPeople = document.getElementById('listPeople');

async function searchAllStarships() {
    let list = document.getElementById('listStarships');
    let next = "https://swapi.co/api/starships/";

    while (next != null) {
        let response = await fetch(next);
        response = await response.json();

        for (let i = 0; i < response.results.length; i++) {
            let li = document.createElement('li');
            list.appendChild(li);
            li.textContent = response.results[i].name;

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
                window.location = 'startship_details.html';
            });
        }
        next = response.next;
    }
}

async function searchAllPeople() {
    let list = document.getElementById('listPeople');
    let next = "https://swapi.co/api/people/";

    while (next != null) {
        let response = await fetch(next);
        response = await response.json();

        for (let i = 0; i < response.results.length; i++) {
            let li = document.createElement('li');
            list.appendChild(li);
            li.textContent = response.results[i].name;

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
                window.location = 'characters_details.html';
            });
        }
        next = response.next;
    }
}
searchAllStarships();
searchAllPeople();