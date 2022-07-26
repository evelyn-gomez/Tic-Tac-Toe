
document.addEventListener('DOMContentLoaded', function (){
  const Gameboard = (() =>{
    const displayBoard = (() => {
      let start_button = document.querySelector('.start-game-btn');
      start_button.addEventListener('click', () => {
        let gameboard = document.querySelector('.game');
        let start_div = document.querySelector('.start-game');
        //hide start button; 
        start_div.classList.add('hide-start-button');
        gameboard.classList.add('display-gameboard');
      }); 
    })();
  
    let boardArray = [1,2,3,4,5,6,7,8,9]; 
  
    let winCombos = [
      [1,2,3],
      [1,4,7],
      [1,5,9],
      [2,5,8],
      [3,6,9],
      [3,5,7],
      [4,5,6],
      [7,8,9],
    ]; 
    
    const Player = (name) => { 
      this.name = name; 
      let markerPositions = []; 
      let getMarker = () => {
        let marker_X = 'pointer-X'; 
        let marker_O = 'pointer-O'; 
        switch (name){
          case 'player-1':
            return marker_X; 
          case 'player-2':
            return marker_O;
          default:
            //test player
            return marker_X; 
        };
      }; 
      const ArrayComparedToWinCombos = () =>{
        let anArray = []; 
        for (let combo of winCombos) {
          for(let num of combo){
            // debugger
            if(!anArray.includes(num)){
              if(!markerPositions.includes(num)){
                break;
              };
              // debugger
              anArray.push(num);
              break;
            } 
          };
        };
        return anArray
      }
      return {name, markerPositions, getMarker, ArrayComparedToWinCombos};
    };  

    const player1 = Player(`player-1`); 
    const player2 = Player(`player-2`); 
  
    function isSquareAssignedMarker(square) {
      if(square.classList == 'pointer-X' || square.classList == 'pointer-O') {
        return true; 
      } else {
        return false
      }
<<<<<<< HEAD
    }; 
=======
    }
>>>>>>> 7ebc250210f17b8ac4d998e590cc3fff4b26ee8a
  
    function nextPlayer(player){
      switch (player){
        case player1: 
          return player2; 
        case player2: 
          return player1;
        case undefined:
          return player1; 
      }
    };

  
    function postPlayerMarkerOnDOM(player,square,square_data){
      player.markerPositions.push(Number(square_data));
      assignMarker(player,square);
      return player.markerPositions; 
    }
    function assignMarker(player, square){
      if(player.name == player1.name){
        return square.classList.add('pointer-X'); 
      }else if(player.name == player2.name){ 
         return square.classList.add('pointer-O'); 
      }
    };
  
    function returnMarkerError(square){
      square.classList.add('error');
      setTimeout(() => {
        square.classList.remove('error');
      }, 200);
    }; 
  
    function checkWinner(thisPlayer){
    }
<<<<<<< HEAD
  const playGame = (() => {
    let grid = document.querySelectorAll('.gameboard div');
    let currentPlayer =  ;
    for (let square of grid) {
      square.addEventListener('pointerdown', (event) => {
        let square = event.target; 
        let square_data = square.dataset.card; 
        let squareAssignedMarker = isSquareAssignedMarker(square); 
        if(squareAssignedMarker){
          returnMarkerError(square); 
          return; 
        }else{
          //there is no marker//need to assign
          currentPlayer = nextPlayer(currentPlayer); 
          postPlayerMarkerOnDOM(currentPlayer, square, square_data);  
          console.log(currentPlayer.markerPositions); 
          if(currentPlayer.markerPositions.length >= 3){
            debugger;
            let isWinner = currentPlayer.ArrayComparedToWinCombos();
            console.log(isWinner);
            };  
          return;
        }
      });
    };
  })(); 
})(); 
=======
    const playGame = (() => {
      let grid = document.querySelectorAll('.gameboard div');
      let currentPlayer = undefined;
      for (let square of grid) {
        square.addEventListener('pointerdown', (event) => {
          let square = event.target; 
          let square_data = square.dataset.card; 
          let squareAssignedMarker = isSquareAssignedMarker(square); 
          if(squareAssignedMarker){
            returnMarkerError(square); 
            return; 
          }else{
            //there is no marker//need to assign
            currentPlayer = nextPlayer(currentPlayer); 
            postPlayerMarkerOnDOM(currentPlayer, square, square_data);  
            console.log(currentPlayer.markerPositions); 
            if(currentPlayer.markerPositions.length >= 3){
              debugger;
              let isWinner = currentPlayer.ArrayComparedToWinCombos();
              console.log(isWinner);
              };  
            return;
          }
        });
      };
    })(); 
  })(); 
>>>>>>> 7ebc250210f17b8ac4d998e590cc3fff4b26ee8a
  
  let winCombos = [
    [1,2,3],
    [1,4,7],
    [1,5,9],
    [2,5,8],
    [3,6,9],
    [3,5,7],
    [4,5,6],
    [7,8,9],
  ]; 
  
  const Player = (name) => { 
    this.name = name; 
    let markerPositions = []; 
    let getMarker = () => {
      let marker_X = 'pointer-X'; 
      let marker_O = 'pointer-O'; 
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
    const ArrayComparedToWinCombos = () =>{
      for (let combo of winCombos) {
        for(let num of combo){
          for(let i = 0; i < markerPositions.length; i++){
            if(num == markerPositions[i]){
            };
          }
        }
        return combo;
      }
    };
    return {name, markerPositions, getMarker, ArrayComparedToWinCombos};
  };  

  module.exports = {
    Player,
  }
  
  let testPlayer = Player('test-player');
  testPlayer.markerPositions = [1,5,6,9];
  console.log(testPlayer.ArrayComparedToWinCombos());
  
  function TestFUN() {
    if(sumo()){
      let array = iterateWinCombos();
      for(let combo of winCombos){
        for(let i =0; i < combo.length; i++){
          if(combo[i] == array[i]){
            break; 
          }
        }
      } 
    
      console.log('ooutof scope but anArray is true');
    }else{
      console.log('wuamp wuamp waump');
    }; 
  }
});



// const calculator = (() => {
//   const add = (a, b) => a + b;
//   const sub = (a, b) => a - b;
//   const mul = (a, b) => a * b;
//   const div = (a, b) => a / b;
//   return {
//     add,
//     sub,
//     mul,
//     div,
//   };
// })();
// calculator.add(3,5); // 8 