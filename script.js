const BOARD = (() =>{
  let startBtn = document.querySelector('.start-game-btn');
  let gameboard = document.querySelector('.game');
  let start_div = document.querySelector('.start-game');

  let grid = document.querySelectorAll('.gameboard div');
  let X_Class = 'pointer-X';
  let O_Class = 'pointer-O';
  let currentPlayer; 

  const DISPLAY_BOARD = (() => {
     startBtn.addEventListener('click', () => {
      //hide start button; 
      start_div.classList.add('hide-start-button');
      gameboard.classList.add('display-gameboard');
    }); 

    function getCurrentPlayer(player){
      switch (player){
        case X_Class:
          return O_Class; 
        case O_Class:
          return X_Class; 
        default:
          return X_Class; 
      }
    }; 
    function markBoard(currentPlayer, squ){
      if(currentPlayer == X_Class){
        return squ.classList.add(X_Class);
      }else{
        return squ.classList.add(O_Class); 
      }
    };

    function checkIfEmpty(square){

    }

    const playGame = (()=>{
      currentPlayer = undefined; 
      for(let square of grid){ 
        square.addEventListener('pointerdown', (event)=>{ 
          let board_square = event.target; 
          let square_data = event.target.dataset.card; 
          
          let isEmptySquare = checkIfEmpty(board_square); 
          if(isEmptySquare){
            
          }
          
          // check if square empty 
            //if true -- check who is currentPlayer
            //assign currentPlayer to board
            //change currentPlayer to next
            //else
            //return false and return error. 
        })
      }
    })(); 

  })();
})();