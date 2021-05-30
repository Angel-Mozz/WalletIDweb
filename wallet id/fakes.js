
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
 
    setTimeout(() => {
        total += listaDeFakes[index];
        document.getElementById("printTotal").innerHTML = total;
        console
        index = ++index%listaDeFakes.length;

    }, 1000);
});
