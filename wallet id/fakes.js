
//En este arr pon en orden los billetes que vas a ir sumando. 
// Si lo corres así, primero se sumará un billete de 20, después uno de 50, después de 100, etc.

let listaDeFakes = [
    20,
    50,
    100,
    200,
    500,
    1000
];

let index = 0;
let total = 0;

// Tiene un delay de 1.2 segundos, para que se ves más real
document.querySelector('button').addEventListener('click', () =>{

    if(document.querySelector("input").value == ""){
        document.querySelector("input").placeholder = "Enter valid URL";
        return;
    }
 
    setTimeout(() => {
        total += listaDeFakes[index];
        document.getElementById("printTotal").innerHTML = total;
        console
        index = ++index%listaDeFakes.length;
        document.querySelector("input").value = "";
        document.querySelector("input").placeholder = "Type the URL";

    }, 1000);
});

document.getElementById("back").addEventListener('click', () => {
        document.getElementById("front").className = "";
        document.getElementById("back").className = "active";
});

document.getElementById("front").addEventListener('click', () => {
    document.getElementById("back").className = "";
    document.getElementById("front").className = "active";
});
