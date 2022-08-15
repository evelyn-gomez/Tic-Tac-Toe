const BOARD = (() =>{
  let start_div = document.querySelector('.start-game');
  let start_btn = document.querySelector('.start-game-btn');
  let gameboard = document.querySelector('.game');

  let grid_squares = document.querySelectorAll('.gameboard div');
  let X_Class = 'pointer-X';
  let O_Class = 'pointer-O';
  let currentPlayer; 
  let endGame; 

  let winnerDisplay = document.querySelector('.hide-winner');
  let winner_message = document.querySelector('.hide-winner p'); 

  let new_game_btn = document.querySelector('.hide-winner button')



  const BOARD_VIEW = (() => {
     const SHOW = (() => {start_btn.addEventListener('click', () => {
      //hide start button; 
      start_div.classList.add('hide-start-button');
      gameboard.classList.add('display-gameboard');
    });})(); 

    const WINNER_HIDE = ()=>{
      winnerDisplay.classList.remove('display-winner-gameover');
      winnerDisplay.classList.add('hide-winner');
      winner_message.textContent = ``;
      endGame = false; 
      return; 
    }
    const WINNER_SHOW = () =>{
      winnerDisplay.classList.remove('hide-winner');
      winnerDisplay.classList.add('display-winner-gameover');
      winner_message.textContent = `${currentPlayer.name} is the winner!!Woohoo!`; 
    }

    return{
      SHOW, WINNER_HIDE, WINNER_SHOW
    }
  })(); 

  const GAME = (()=>{
    endGame = false;  
    currentPlayer = undefined;
    
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
      [3,5,7],
      [3,6,9],
      [4,5,6],
      [7,8,9],
    ]; 

    const SQUARE_PLAY = (()=>{ 
      for(let square of grid_squares){ 
        square.addEventListener('pointerdown', (event)=>{ 
          let square_div = event.target; 
          let square_data = Number(event.target.dataset.card); 
          if(isSquareEmpty(square_div)){
            //square taken, return error msg
            return;
          };
          //else add player marker to gameboard
          addPlayerMarkerToSquare(square_div, square_data);
          if(endGame == true){
            resetGame(); 
            new_game_btn.addEventListener('click', () =>{
              BOARD_VIEW.WINNER_HIDE(); 
              return;
            })
            return;
          }
          return
        })
      };
  
      function isSquareEmpty(square) {
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
      
      function addPlayerMarkerToSquare(square, square_num){
        if(currentPlayer == undefined){
          currentPlayer = player1; 
        }
        square.classList.add(currentPlayer.marker);
        currentPlayer.positions.push(square_num)
        console.log(currentPlayer.positions);
        endGameorUpdate();
        return;
      }; 
  
      function updateNextPlayer(){
        if(currentPlayer == player1){
          return currentPlayer = player2;
        }else if(currentPlayer == player2){
          return currentPlayer = player1; 
          
        }
      }
      let tester_player = Player('test_player', X_Class); 
  
      tester_player.positions = [3,5,6,4,7];
      
      let combo = [3,5,7];
    

      function singleCom(playerpositions, key){
        for(let i = 0; i < playerpositions.length; i++){
            if(playerpositions[i] === key){
                return key;
            }
        }
      }
      /**
       * 
       * @param {array} test_test 
       * 
       * @returns BOOLEAN
       */
      function checkIfWinner(test_test){
        let sortedPPositions = test_test.sort();
        return winCombos.find(combo => {
          let result = []; 
          combo.map(elem=>{
            if(singleCom(sortedPPositions, elem)){
              result.push(elem) ; 
            };
          }); 
          if(result.length == 3){
            return true;
          }
        }) 
      };
     console.log(checkIfWinner(tester_player.positions)); 
    // 3 6 7 
    // 2,3 5 6 7
  
   
      
      function resetGame(){
          player1.positions = [];
          player2.positions = [];
          for(square of grid_squares){
            console.log(square.classList);
            if(!square.classList.value == ''){
              square.classList.remove('pointer-X');
              square.classList.remove('pointer-O');
            } 
          }
          return;
      }
  
      function showCaseWinner(){
        console.log(`yay the winner is ${currentPlayer.name}`);
        BOARD_VIEW.WINNER_SHOW(currentPlayer);
        return;
      }
  
      function endGameorUpdate(){
          if(currentPlayer.positions.length >= 3){
          if(checkIfWinner(currentPlayer.positions)){ 
            showCaseWinner(); 
            // winnerDisplay.classList.remove('hide-winner');
            endGame = true;
            return
          }
          console.log('no winner yet');
          updateNextPlayer(); 
          return;
        }
        updateNextPlayer(); 
        return;
      }
    })(); 
  })(); 
})();
// document.addEventListener('DOMContentLoaded', function (){
// });
