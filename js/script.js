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
  gridContainer.classList.toggle('hide');
  let nSquare;
  
  if(difficulty == 0){
    nSquare = 100;
  
  }else if(difficulty == 1){
    nSquare = 81;
    
  }else{
    nSquare = 49;
    
  }
  getBomb(nSquare);
  
  
  
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

// Bomb GENERATE
function getBomb(nSquare){
  let verify = true;
  const bomb = [];
  let c = 0;
  
  for(let i = 1; bomb.length < 16; i++){
    // const extract = getRnd(nSquare);
    // console.log(extract);
    // bomb.push(extract);
    
    do{
      const extract = getRnd(nSquare);
      console.log(extract);
      if(!bomb.includes(extract)){
        bomb.push(extract);
        verify = false;
        console.log(bomb);
      }
      // c++;
      // if(c == 15){
      //   verify = false;
      // }

    }while(verify);
    console.log('Ciclo n: ', i);
  }
  console.log('lunghezza ', bomb.length);
  
}



// Funzione random
function getRnd(max) {
  return Math.floor(Math.random() * (max - 0 + 1) ) + 0;
}
