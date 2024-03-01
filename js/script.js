const gridContainer = document.querySelector('.grid-container');
// Selezione difficoltà
const selezione = document.querySelector('.difficulty');
console.log(selezione.value);
const difficulty = parseInt(selezione.value);
// btn start

const btnPlay = document.querySelector('.btn-play');

// RESET



btnPlay.addEventListener('click', startPlay);





/////////////////////////////////////////////////////////////////////////////////////
//                         FUNZIONI
/////////////////////////////////////////////////////////////////////////////////////

function startPlay(){
  
  reset();
  let nSquare;
  
  if(difficulty == 0){
    nSquare = 100;
  
  }else if(difficulty == 1){
    nSquare = 81;
    
  }else{
    nSquare = 49;
    
  }
  
  
  
  for(let i= 0; i<nSquare; i++){
    // console.log(i);
    const square = getSquare(i);
    if(difficulty == 1){
      square.classList.add('dif-medium');
    }else if(difficulty == 2){
      square.classList.add('dif-hard');
    }
    
    gridContainer.append(square);
  
    console.log(square);
    
  }
  }



function reset(){
  console.log(this);
  gridContainer.innerHTML = '';
}

// CREO square
function getSquare(numero){
  const sq = document.createElement('div');
  sq.className = 'square';
  
  // Proprietà custom
  // console.log(numero);
  sq._sqID = numero;
  const porcodio = this._sqID;

  sq.addEventListener('click', function(){
    const numero = this._sqID;
    
    // this.innerHTML = (!this.classList.contains('clicked'))
    // ? this.innerHTML = numero + 1
    // : this.innerHTML = '';

    this.classList.add('clicked');
  });

  return sq;

}


// Funzione random
