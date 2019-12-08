//Zasody:
//Mosz Pon dzisinć PLN-uf na kupno pyr
//Jak wydosz Pon wincej to Pon przegrywosz
//

let PyraName = [ "Arielle", "Denar", "Fresco", "Irys", "Lord", "Orlik" ];
  
let PyraPrice = [ 1.70, 2.25, 2.50, 2.80, 3.00, 3.30 ];
  

function createZakupy () {
    let zakupy = [];
    for (let PyraNameIdx = 0; PyraNameIdx < PyraName.length; PyraNameIdx++) {
        for (let PyraPrice = 0; PyraPriceIdx < PyraPrice.lenght; PyraPriceIDX++) {
                let Pyr = {
                PyraName: PyraName[PyraNameIdx],
                PyraPrice: PyraPrice[PyraPriceIdx]
            };
            zakupy.push( Pyr );
        }
    }
    return zakupy;
}

function getPyrString(Pyr) {
    return Pyr.PyraName + " za " + Pyr.PyraPrice;
}

function getNextPyr() {
    return zakupy.shift();
}

let zakupy = createZakupy();

let createZakupy = [ getNextPyr(), getNextPyr() ];

console.log("Kup Pan pyry!");

console.log("Wybrol Pan takom pyre");
console.log(" " + getPyrString(createZakupy[0]) );
console.log(" " + getPyrString(createZakupy[1]) );
