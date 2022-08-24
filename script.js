const BOARD = (() =>{
  let start_div = document.querySelector('.start-game');
  let start_btn = document.querySelector('.start-game-btn');
  let game_console = document.querySelector('.game');


  let grid_squares = document.querySelectorAll('.winner_and_game .gameboard div');
  let X_Class = 'pointer-X';
  let O_Class = 'pointer-O';
  
  let p1_display = document.querySelector('.player1');
  let p2_display = document.querySelector('.player2'); 

  let currentPlayer; 
  let endGame; 
  let draw; 

  let winnerDisplay = document.querySelector('.hide-winner');
  let winner_message = document.querySelector('.hide-winner div p'); 

  let new_game_btn = document.querySelector('.hide-winner div button')

  
  const BOARD_VIEW = (() => {
     const HIDE_START_BTN = (() => {
       start_btn.addEventListener('click', () => {
      //hide start button; 
      start_div.classList.add('hide-start-button');
      game_console.classList.add('display-gameboard');
    });})(); 

    const display_winner_or_draw = ()=>{
      winnerDisplay.classList.remove('hide-winner');
      winnerDisplay.classList.add('display-winner-gameover');
    }

    const WINNER_HIDE = ()=>{
      winnerDisplay.classList.remove('display-winner-gameover');
      winnerDisplay.classList.add('hide-winner');
      winner_message.textContent = ``;
      endGame = false; 
      return; 
    }

    const WINNER_SHOW = () =>{
      display_winner_or_draw();
      if(p1_display.classList == 'currentP' || p2_display.classList == 'currentP'){
        p1_display.classList.remove('currentP'); 
        p2_display.classList.remove('currentP');
      }
      winner_message.textContent = `${currentPlayer.name} is the winner!!Woohoo!`; 
    }

    const DRAW_SHOW = ()=>{
      display_winner_or_draw(); 
      if(p1_display.classList == 'currentP' || p2_display.classList == 'currentP'){
        p1_display.classList.remove('currentP'); 
        p2_display.classList.remove('currentP');
      }
      winner_message.textContent = `It's a DRAW -- NO winner`;  
    }

    return{
      WINNER_HIDE, WINNER_SHOW, DRAW_SHOW
    }
  })(); 

  const GAME = (()=>{
    endGame = false; 
    draw = false;  
    currentPlayer = undefined;
    
    const Player = (name, marker)=> {
      let positions = []; 
      return {
        name, 
        marker, 
        positions, 
      }; 
    };

    let player1 = Player('Player 1', X_Class); 
    let player2 = Player('Player 2', O_Class); 

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
    
    if(currentPlayer == undefined ){
      p1_display.classList.add('currentP'); 
    }
    
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
          //end game
          if(endGame == true){
            resetGame(); 
            return;
          }
          updateNextPlayer(); 
          return;
        })
      };
  
      function isSquareEmpty(square) {
        console.log(square)
        if(!square.classList.value == ''){
          square.classList.add('error');
          setTimeout(() => {
            square.classList.remove('error');
          }, 200);
        return true; 
        }
        return false;
      }
      
      function addPlayerMarkerToSquare(square, square_num){
        if(currentPlayer == undefined){
          currentPlayer = player1;
        }
        square.classList.add(currentPlayer.marker);
        console.log(square.classList.value)
        currentPlayer.positions.push(square_num)
        endGameorUpdate();
        return;
      }; 
  
      function updateNextPlayer(){
        if(currentPlayer == player1){
          p1_display.classList.remove('currentP');
          p2_display.classList.add("currentP"); 
          return currentPlayer = player2;
        }else if(currentPlayer == player2){
          p2_display.classList.remove('currentP');
          p1_display.classList.add('currentP');
          return currentPlayer = player1; 
          
        }
      };

      function elemInPlayerPosition(playerpositions, key){
        for(let i = 0; i < playerpositions.length; i++){
          if(playerpositions[i] === key){
              return key;
          }
        }
      }

      function checkIfWinner(test_test){
        let sortedPPositions = test_test.sort();
        let winner = winCombos.find(combo => {
          let result = []; 
          combo.map(elem=>{
            if(elemInPlayerPosition(sortedPPositions, elem)){
              result.push(elem) ; 
            };
          }); 
          if(result.length == 3){
            console.log(combo); 
            return true;
          }
        });
        if(winner){
          return true; 
        }
      };

      function resetGame(){
          player1.positions = [];
          player2.positions = [];
          new_game_btn.addEventListener('click', () =>{
            for( square of grid_squares){
              console.log(square); 
              if(!square.classList.value == ''){
                square.classList.remove('pointer-X');
                square.classList.remove('pointer-O');
              } 
            } 
            BOARD_VIEW.WINNER_HIDE(); 
            return;
          })
        return;
      }
  
      function endGameorUpdate(){
          if(currentPlayer.positions.length >= 3){
          if(checkIfWinner(currentPlayer.positions)){ 
            console.log(`yay the winner is ${currentPlayer.name}`);
            BOARD_VIEW.WINNER_SHOW(currentPlayer); 
            endGame = true;
            return
          }
          //for draw;
          if(currentPlayer.positions.length == 5){
            if(player1.positions.length == 5 || player2.positions.length ==5){
              console.log('draw');
              BOARD_VIEW.DRAW_SHOW()
              endGame = true;
              draw = true; 
              return
            }
          }
          return 
        }
        return;
      }
    })(); 
  })(); 
})();

