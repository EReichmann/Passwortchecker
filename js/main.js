let text
let laenge = false
let zahlen = false
let klein = false
let gross

function ersterTest() {
    text = document.getElementById("eingegebenesPasswort").value
    let textArray = text.split("")
    console.log(textArray)

    if (textArray.length >= 10){
    console.log("sicheres Passwort 1/5")
        laenge = true
    }else{
        console.log("Passwort zu kurz")
    }

    for (let i = 0; i < textArray.length; i++) {
        if (!isNaN(textArray[i])){
            zahlen = true;
            console.log("sicheres Passwort 2/5")
        }
    }

    if (zahlen === false){
        console.log("Passwort enthält keine Zahlen")
    }


        if (/[a-z]/.test(textArray)){
            klein = true;
            console.log("sicheres Passwort 3/5")
        }else{
            console.log("Passwort enthält keine Kleinbuchstaben")
        }



        if (/[A-Z]/.test(textArray)){
            gross = true;
            console.log("sicheres Passwort 4/5")
        }else{
            console.log("Passwort enthält keine Großbuchstaben")
        }

if(gross && klein && zahlen && laenge === true) {
    document.getElementById("bewertung").innerHTML = "Dein Passwort ist sicher!"
    document.getElementById("bewertung").style.color = "green"
    document.getElementById("bewertungBild").image = "img/Häkchen-richtig-Daumen-hoch.webp"
}else{
    document.getElementById("bewertung").innerHTML = "Dein Passwort ist unsicher!"
    document.getElementById("bewertung").style.color = "red"
    document.getElementById("bewertungBild").image = "img/falsch-22537660.jpg"
}

}

