const gridContainer = document.querySelector('.grid-container');
// Selezione difficoltà
const selezione = document.querySelector('.difficulty');
console.log(selezione.value);
// selezione.value = 0;

console.log(selezione.value);
const difficulty = parseInt(selezione.value);
// btn start
const btnPlay = document.querySelector('.btn-play');

// ARRAY BOMBE
const arrayBomb = [];

// PUNTEGGIO
let punteggio = 0;
// RESET

btnPlay.addEventListener('click', startPlay);

/////////////////////////////////////////////////////////////////////////////////////
//                         FUNZIONI
/////////////////////////////////////////////////////////////////////////////////////

function startPlay(){
  
  reset();
  // gridContainer.classList.remove('hide');
  let nSquare = 100;
  
  if(difficulty == 1){
    nSquare = 81;
    
  }else if(difficulty == 2){
    nSquare = 49;
    
  }
  
  
  getBomb(nSquare);
  console.log('Array globale bombe: ', arrayBomb);
  
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

// FACCIO ESPLODERE LE BOMBE
function boomAllBomb(){
  for(let i = 0; i < arrayBomb.length; i++){
    const boomBomb = document.getElementById(arrayBomb[i]);
    console.log(arrayBomb[i]);
    boomBomb.classList.add('boom');
  }
}

// CREO square
function getSquare(numero){
  const sq = document.createElement('div');
  numero++;
  sq.setAttribute("id", numero);
  sq.className = 'square';
  
  // Proprietà custom
  // console.log(numero);
  sq._sqID = numero;
  // const prova = this._sqID;


  sq.addEventListener('click', function(){
    const numero = this._sqID;
    
    // this.innerHTML = (!this.classList.contains('clicked'))
    // ? this.innerHTML = numero + 1
    // : this.innerHTML = '';

    this.classList.add('clicked');
    if(arrayBomb.includes(this._sqID)){
      this.classList.add('boom');
      // STAMPO IL PUNTEGGIO
      alert('Il tuo punteggio è: ' + punteggio);
      //ACCENDO TUTTE LE BOMBE
      // TODO: funzione bombe
      boomAllBomb();
    }else{
      // PUNTEGGIO
      punteggio++;
    }
    
  });
  return sq;

}

// Bomb GENERATE
function getBomb(nSquare){
  let verify = true;
  const bomb = [];
  let c = 0;
  for(let i = 1; i <= 16; i++){
    // const extract = getRnd(nSquare);
    // console.log(extract);
    // bomb.push(extract);
    console.log(arrayBomb);
    do{
      const extract = getRnd(nSquare);
      console.log(extract);
      if(!bomb.includes(extract)){
        bomb.push(extract);
        verify = false;
        console.log(bomb);
        arrayBomb.push(extract);
      }else{
        verify = true;
      }
      c++;
      if(c == 50){
        verify = false;
      }

    }while(verify);
    console.log('Ciclo n: ', i);
  }
  console.log('lunghezza ', bomb.length);
  
}


// Funzione random
function getRnd(max) {
  return Math.floor(Math.random() * (max - 1 + 1) ) + 1;
}
