let gameboard = document.querySelector('.gameboard'); 
let all_single_squares = document.querySelectorAll('.gameboard div'); 


function checkIfAssignedAMarker(){

}
for(let singleSquare of all_single_squares){
  console.log(singleSquare);
  singleSquare.addEventListener('pointerdown', (event)=> {
    let isMarkerAssigned = checkIfAssignedAMarker(event.target);
    if (isMarkerAssigned){
      //return error -- has already a marker
    }else{
      //assign marker
      event.target.classList.add('pointer-X'); 
    }
    // singleSquare.innerHtml = 'X';  
  });
};


