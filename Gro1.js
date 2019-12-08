//Zasody:
//Mosz Pon dzisinć PLN-uf na kupno pyr
//Jak wydosz Pon wincej to Pon przegrywosz
//

let Pyra = [
            "Arielle",
            "Denar",
            "Fresco", 
            "Iris",
            "Lord",
            "Orlik"
];

var Arielle = 2.50;
var Denar = 3.00;
var Fresco = 2.25;
var Irys = 1.70;
var Lord = 3.30;
var Orlik = 2.80;

function createZakupy () {
    let zakupy = [];
    for (let PyraIdx = 0; PyraIdx < Pyra.length; PyraIdx++) {
        zakupy.push(Pyra[PyraIdx];
    }
    return zakupy;
}

function getNextPyra() {
    return zakupy.shift();
}

let zakupy = createZakupy[ getNextPyra(), getNextPyra()];

function myFunction(message) {
    console.log (message);
}

myFunction("Kup Pan pyry!");
myFunction("Wybrol Pan takom pyre");

console.log(" " + Pyra[0]);
console.log(" " + Pyra[1]);
console.log(" " + Pyra[2]);
console.log(" " + Pyra[5]);

var cena = (Arielle + Denar + Fresco + Orlik); 

if (cena >= 10.00) {
    console.log ("Przegral Pan")
    console.log ("Bulisz", cena, "i nic nie mosz");
    }
    
    else if (cena < 10.00, cena > 5.01) {
    console.log ("Dobra jest, trochem Ci zostalo")
    console.log ("Bulisz", cena, "i mosz", 10.00 - cena);
    }
    
    else if (cena < 5.00) {
    console.log ("Ojjj Panie", cena); 
    console.log ("Cos Pon malo wziol, dawej jeszcze roz");
    }

