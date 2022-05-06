let gameboard = document.querySelector('.gameboard'); 
let all_single_squares = document.querySelectorAll('.gameboard div'); 

for(let singleSquare of all_single_squares){
  console.log(singleSquare);
  singleSquare.addEventListener('pointerdown', (event)=> {
    event.target.classList.add('pointer-O'); 
    // singleSquare.innerHtml = 'X';  
  });
};


