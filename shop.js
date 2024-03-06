window.onload = function () {
    loadData();
    document.querySelector("#animal").addEventListener("change", loadData);
    document.querySelector("#type").addEventListener("change", loadData);
}

let underline = (html) => {
    html.setAttribute("style", "text-decoration: underline");
}

let removeUnderline = (html) => {
    html.setAttribute("style", "text-decoration: none");
}

async function loadData() {
    const file = await fetch("./data.json");
    const data = await file.json();
    var select1 = document.querySelector('#animal').value;
    var select2 = document.querySelector('#type').value;

    var card = document.getElementById("col");

    card.innerHTML = ``;
    for (var i = 0; i < data.shop.length; i++) {
        let animal = data.shop[i].animal;
        let type = data.shop[i].type;
        let title = data.shop[i].title;
        let price = data.shop[i].price;
        let url = data.shop[i].image;

        if ((animal == select1) || select1 == "all") {
            if ((type == select2) || select2 == "all") {

                let newCard = document.createElement("div")
                newCard.classList.add("col");

                newCard.innerHTML = `
                <div class="card shadow-sm">
                    <img src=${url} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <p class="card-text" style="font-size:15px;"> <strong style="font-size:20px;">${title}</strong> (${animal}/${type})</p>
                        <p class="card-text">${price}</p>
                    </div>
                </div>
                `;

                card.appendChild(newCard);
            }
        }
    }
}