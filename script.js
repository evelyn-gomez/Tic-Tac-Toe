<<<<<<< HEAD
const BOARD = (() =>{
  let start_div = document.querySelector('.start-game');
  let start_btn = document.querySelector('.start-game-btn');
  let gameboard = document.querySelector('.game');

  let grid_squares = document.querySelectorAll('.gameboard div');
  let X_Class = 'pointer-X';
  let O_Class = 'pointer-O';

  const DISPLAY_BOARD = (() => {
     start_btn.addEventListener('click', () => {
      //hide start button; 
      start_div.classList.add('hide-start-button');
      gameboard.classList.add('display-gameboard');
    }); 
  })();


  const GAME = (()=>{
    const Player = (name, marker)=> {
      let positions = []; 
      return {
        name, 
        marker, 
        positions, 
      }; 
    };

    let player1 = Player('player1', X_Class); 
    let player2 = Player('player2', O_Class); 

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

    const SQUARE_PLAY = (()=>{
      let currentPlayer = player1; 
      let endGame = false;  
      for(let square of grid_squares){ 
        square.addEventListener('pointerdown', (event)=>{ 
          let square_div = event.target; 
          let square_data = Number(event.target.dataset.card); 

          if(isSquareEmpty(square_div)){
            //square taken, return error msg
            return;
          };
          //else add player marker to gameboard
          addPlayerMarkerToSquare(square_div, currentPlayer.marker, square_data); 
          endGameorUpdate(currentPlayer, endGame); 
        })
      };

      function isSquareEmpty(square) {
        console.log(currentPlayer.marker);
        if(!square.classList.value == '') {
           takenSquareError(square); 
           return true;
        }
        return false; 
      }

      function takenSquareError(square) {
        square.classList.add('error');
        setTimeout(() => {
          square.classList.remove('error');
        }, 200);
        return; 
      }
      
      function addPlayerMarkerToSquare(square, currentPlayer_marker, square_num){
        square.classList.add(currentPlayer_marker);
        currentPlayer.positions.push(square_num)
        console.log(currentPlayer.positions);
        return
      }; 

      function updateNextPlayer(player){
        if(player == player1){
          return currentPlayer = player2; 
        }else{
          return currentPlayer = player1; 
        }
      }

      let checkIfWinner = (test_test) => { 
        let sorted_test_a = test_test.sort();
        return winCombos.some(combo =>{ 
          return combo.every((elem, index) => {
            return elem == sorted_test_a[index] 
          })
        });  
      }
      
      function resetGame(p1,p2,currentP){
          p1.positions = [];
          p2.positions = [];
          currentP = p1; 
          start_div.classList.remove('hide-start-button'); 
          gameboard.classList.remove('display-gameboard');
      }

      function showCaseWinner(currentP, endG){
        console.log(`yay the winner is ${currentP.name}`)
        
        resetGame(player1,player2,currentP);
      }

      function endGameorUpdate(currentP, endG){
        console.log(currentP); 
        if(currentP.positions.length >= 3){
          if(checkIfWinner(currentP.positions)){
            endGame = true; 
            showCaseWinner(currentP,endGame); 
            return;
          }
          console.log('no winner yet');
          updateNextPlayer(currentPlayer); 
          return;
        }
        updateNextPlayer(currentP); 
        return;
      }
    })(); 
  })(); 
})();
=======
document.addEventListener('DOMContentLoaded', function (){
  
  
});
>>>>>>> 7ebc250210f17b8ac4d998e590cc3fff4b26ee8a
