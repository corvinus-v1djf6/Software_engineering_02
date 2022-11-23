var viccek;

window.onload = () => {
    console.log("letöltés")
}


function letöltés() {
    fetch('/jokes.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    viccek = d;

    for (var i = 0; i < viccek.length; i++) {
        console.log(viccek[i].questionText)
        let elem = document.createElement("li")
        elem.innerHTML = viccek[i].questionText
        ide.appendChild(elem)
    }


}

