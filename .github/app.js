const form = document.getElementById("calcForm");
const errorMsg = document.getElementById("errorMsg");
const resultMsg = document.getElementById("result");
const historyList = document.getElementById("historyList");

// Tableau d'historique
let history = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();
    errorMsg.textContent = "";
    resultMsg.textContent = "";

    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const op = document.getElementById("op").value;

    
    if (a === "" || b === "") {
        errorMsg.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    if (op === "/" && Number(b) === 0) {
        errorMsg.textContent = "Division par zéro interdite.";
        return;
    }

    // Calcul
    let res;
    switch (op) {
        case "+": res = Number(a) + Number(b); break;
        case "-": res = Number(a) - Number(b); break;
        case "*": res = Number(a) * Number(b); break;
        case "/": res = Number(a) / Number(b); break;
    }

    resultMsg.textContent = "Résultat : " + res;

    const operation = `${a} ${op} ${b} = ${res}`;
    history.push(operation);

    updateHistory();
});

function updateHistory() {
    historyList.innerHTML = "";

    history.forEach(op => {
        const li = document.createElement("li");
        li.textContent = op;
        historyList.appendChild(li);
    });
}

