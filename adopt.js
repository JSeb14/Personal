let underline = (html) => {
    html.setAttribute("style", "text-decoration: underline");
}

let removeUnderline = (html) => {
    html.setAttribute("style", "text-decoration: none");
}

window.onload = function () {
    document.querySelector("#selectPetType").addEventListener("change", readJSON);
}

readJSON();
function readJSON() {
    fetch("./data.json")
        .then(response => response.json())
        .then(data => loadPets(data))
}

function loadPets(data) {
    let filter = document.querySelector("#selectPetType").value;
    console.log(filter);
    var pets = document.getElementById("col");
    pets.innerHTML = "";
    var cards = [];
    for (var i = 0; i < data.adopt.length; i++) {

        let name = data.adopt[i].name;
        let animal = data.adopt[i].animal;
        let description = data.adopt[i].description;
        let image = data.adopt[i].image;
        let age = data.adopt[i].age;
        let card = "card" + i.toString();
        // create a new HTML div division
        let addPet = document.createElement("div");
        // add class = “col” to new division for Bootstrap
        addPet.classList.add("col");
        // create Bootstrap card
        if (filter === "all" || filter === animal) {
            addPet.innerHTML = `
<div id=${card} class="card shadow-sm">
    <img src=${image} class="card-img-top" alt="..."></img>
        <div class="card-body">
            <p class="card-text"> <strong>${name}</strong> - ${age} old<br>${description}</p>
        </div>
    </div>
</div>
`;
            // append new division
            pets.appendChild(addPet);
            let ccard = document.getElementById(card);
            cards.push(ccard);
        }
    } // end of for

} // end of function