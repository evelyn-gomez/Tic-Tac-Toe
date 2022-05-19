/**
 * when start button 'click' remove start, 
 * then displays gameboard grid; 
 * 
 */
const showGameBoard = (() => {
  let start_div = document.querySelector('.start-game');
  let start_button = document.querySelector('.start-game-btn');
  let game = document.querySelector('.game');

  start_button.addEventListener('click', () => {
    //hide start button; 
    start_div.classList.add('hide-start-button');
    game.classList.add('display-gameboard');
  })
})();


const playerFactory = (name) => {
  let marker_X = 'pointer-X'; 
  let marker_O = 'pointer-O'; 

  let markerPositions = []; 
  let getMarker = () => {
    switch (name){
      case 'player-1':
        return marker_X; 
      case 'player-2':
        return marker_O;
      default:
        //test player
        return marker_X; 
    }
  }; 
  return {name, markerPositions, getMarker};
};

const player1 = playerFactory(`player-1`); 
const player2 = playerFactory(`player-2`); 
  
function returnMarkerError(square){
  square.classList.add('error');
  setTimeout(() => {
    square.classList.remove('error');
  }, 200);
}; 

function isMarkerAssigned(square) {
  if (square.classList == 'pointer-X' || square.classList == 'pointer-O') {
    return true;
  } else {
    return false;
  }
}

let currentPlayer; 

function whoIsCurrentPlayer(currentPlayer){
  switch (currentPlayer){
    case player1: 
      console.log(player2.getMarker());
      return player2; 
    case player2: 
      console.log(player1.getMarker());
      return player1;
    default:
    console.log(player1.getMarker());
    return player1;
  }
}; 

function assignMarker(player, square){
  if(player == player1.name){
    return square.classList.add('pointer-X');
  }else{
    return square.classList.add('pointer-O'); 
  }
}

let winCombos = {
  a:[1,2,3],
  b:[1,4,7],
  c:[1,5,9],
  d:[2,5,8],
  e:[3,6,9],
  f:[3,5,7],
  g:[4,5,6],
  h:[7,8,9],
}; 
//check out how to map -- new Map() ---  the technically correct can use an Obj better?

let testPlayer = playerFactory('test-player'); 
// let createPositionforTestPlayer = (() =>{
//   for(let i= 0; i < 10; i*i+2){
//     testPlayer.markerPositions.push(Number(i)); 
//   }; 
// })(); 
//iterate through each item entry compare to your player array entry and if it matches barf it up. 

function isThereAWinner(player){
  //array 
  let positionArray = player.markerPositions; 
  
  for(let key in winCombos){
    let item = winCombos[key]; 
    for (let elem of item){
      console.log(elem); 
    }
  }
  // for(let elem of positionArray){
  //   if(elem)
  // }
  //iterate through each winCombo item, if match then return number if not then skip to next, 


}; 
const playGame = (() => {
  let grid = document.querySelectorAll('.gameboard div');
  for (let square of grid) {
    square.addEventListener('pointerdown', (event) => {
      let square = event.target; 
      let square_data = square.dataset.card; 
      let markerOnSqure = isMarkerAssigned(square); 
      if(markerOnSqure){
        returnMarkerError(square); 
      }else{
        //there is no marker//assign 
        currentPlayer = whoIsCurrentPlayer(currentPlayer); 
        assignMarker(currentPlayer.name, square); 
        currentPlayer.markerPositions.push(Number(square_data)); 
        console.log(currentPlayer.markerPositions); 
        if(currentPlayer.markerPositions >= 3){
          let isWinner = isThereAWinner(currentPlayer); 
          if(isWinner){
            //isWinner == true; 
              //return name of currentPlayer bc is the winner; 
            console.log(currentPlayer.name);        
          }else{
            //NO winner 
            currentPlayer; 
            return 
          }
        }else{
          currentPlayer;
          return;
        }
      }
    });
  };
})(); 








