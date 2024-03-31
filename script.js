function calculate() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    var result = num1 + num2;

    document.getElementById("vysl").innerHTML = "Výsledek: " + result;
}

function randomColor() {
    var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = color;
}

function whiteColor(){
    document.body.style.backgroundColor = "white";
}

