
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


console.log("Kup Pany pyry!");
console.log("Wybrol Pon take pyry:");
console.log(" " + Pyra[0]);
console.log(" " + Pyra[1]);

var cena = (Arielle + Denar); 


if (cena >= 10.00) {
    console.log ("Przegral Pon")
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

