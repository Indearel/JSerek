let zarcie = ['Schobowy', 'Fryty', 'Buraczki'];

console.log(zarcie[1]);

let Pyra = 'DN'

switch (Pyra) {
       case 'FR':
           console.log('Fresco')
           break;
        case 'DN':
            console.log('Denar')
            console.log('Najlepszy ziemnior na fryty')
            break;
        default:
            console.log('Unknown')
            break;

}

let count = 5;

while (count <= 3) {
    console.log(count);

}

function triplePlus(value) {

    let newValue = value + value + value;
    return newValue;
}

console.log(triplePlus(3))

let Pyra = [
    "Arielle",
    "Denar",
    "Fresco", 
    "Iris",
    "Lord",
    "Orlik"
];

let values = [ 2.50, 3.00, 2.25, 1.70, 3.30, 2.80 ];

function createZakupy () {
    let zakupy = [];
    for (let PyraIdx = 0; PyraIdx < Pyra.lenght; PyraIdx++) {
    for (let valueIdx =0; valueIdx < values.length; valueIdx++) {
        zakupy.push(values[valueIdx]  );
    }
    }
    return zakupy;
}

function getNextPyra() {
    return zakupy.shift();
}

let zakupy = createZakupy[ getNextPyra(), getNextPyra()];

    for (let i = 0; i < deck.leght; i++) {
        console.log(zakupy[i]);
    }
