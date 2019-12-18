//Zasody:
//Mosz Pon dzisinć PLN-uf na kupno pyr
//Jak wydosz Pon wincej to Pon przegrywosz
//


//Pyr variables
let PyraName = [ "Arielle", "Denar", "Fresco", "Irys", "Lord", "Orlik" ];
  
let PyraPrice = [ 1.70, 2.25, 2.50, 2.80, 3.00, 3.30 ];

//DOM variables
let textArea = document.getElementById('text-area'),
  newGameButton = document.getElementById('nowa-gro-button'),
  hitButton = document.getElementById('dawoj-jeszcze-button'),
  stayButton = document.getElementById('storczy-button');

//Game variables
let gameStarted = false,
  gameOver = false,
  playerWon = false,
  playerPyrs = [],
  playerScore = 0,
  zakupy = [];

  hitButton.style.display = 'none';
  stayButton.style.display = 'none';
  showStatus();
  
  newGameButton.addEventListener('click', function() {
  gameStarted = true;
  gameOver = false;
  playerWon = false;
  
  zakupy = createZakupy();
  shuffleZakupy(zakupy);
  playerPyrs = [getNextPyr(), getNextPyr()];

  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
  showStatus();
});

hitButton.addEventListener('click', function() {
    playerPyrs.push(getNextPyr());
    checkForEndOfGame();
    showStatus();
  });
  
  stayButton.addEventListener('click', function() {
    gameOver = true;
    checkForEndOfGame();
    showStatus();
  });

function createZakupy () {
    let zakupy = [];
    for (let PyraNameIdx = 0; PyraNameIdx < PyraName.length; PyraNameIdx++) {
        for (let PyraPrice = 0; PyraPriceIdx < PyraPrice.lenght; PyraPriceIdx++) {
                let Pyr = {
                PyraName: PyraName[PyraNameIdx],
                PyraPrice: PyraPrice[PyraPriceIdx]
            };
            zakupy.push(Pyr);
        }
    }
    return zakupy;
}

function shuffleZakupy(zakupy) {
    for (let i = 0; i < zakupy.length; i++) {
      let swapIdx = Math.trunc(Math.random() * zakupy.length);
      let tmp = zakupy[swapIdx];
      zakupy[swapIdx] = zakupy[i];
      zakupy[i] = tmp;
    }
  }

function getPyrString(Pyr) {
    return Pyr.PyraName + " za " + Pyr.PyraPrice;
}

function getNextPyr() {
    return zakupy.shift();
}

console.log("Kup Pan pyry!");

console.log("Wybrol Pan takom pyre");
console.log(" " + getPyrString(createZakupy[0]) );
console.log(" " + getPyrString(createZakupy[1]) );

function checkForEndOfGame() {

    updateScores();

    if (price >= 10.00) {
        console.log ("Przegral Pan")
        console.log ("Bulisz", price, "i nic nie mosz");
        }
        
        else if (price < 10.00, price > 5.01) {
        console.log ("Dobra jest, trochem Ci zostalo")
        console.log ("Bulisz", price, "i mosz", 10.00 - price);
        }
        
        else if (price < 5.00) {
        console.log ("Ojjj Panie", price); 
        console.log ("Cos Pon malo wziol, dawej jeszcze roz");
        }
    }
  ;
