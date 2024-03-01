const gridContainer = document.querySelector('.grid-container');
// Selezione difficoltà
const selezione = document.querySelector('.difficulty');
console.log(selezione.value);
// selezione.value = 0;

console.log(selezione.value);
const difficulty = parseInt(selezione.value);
// btn start
const btnPlay = document.querySelector('.btn-play');

// TOTALE SQUARE
let totSquare = 0;
// ARRAY BOMBE
const arrayBomb = [];

// PUNTEGGIO
let punteggio = 0;
// RESET
reset();
// BOTTONE START
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

  totSquare = nSquare;
  
  
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

  const prova = document.querySelectorAll('square');
  prova.innerHTML = '';
  punteggio = 0;

  for(let i = 0; i < 16; i++){
    console.log(i);
    console.log(arrayBomb);
    arrayBomb.pop();
    console.log(arrayBomb);
  }
  console.log(arrayBomb);

  
}

// FACCIO ESPLODERE LE BOMBE
function boomAllBomb(){

  for(let i = 0; i < arrayBomb.length; i++){
    const boomBomb = document.getElementById(arrayBomb[i]);
    console.log(arrayBomb[i]);
    boomBomb.classList.add('boom');
    boomBomb.classList.remove('clicked');

  }
  for(let i = 1; i <= totSquare; i++){
    
    const boomBomb = document.getElementById(i);
    
    boomBomb.classList.add('clicked');
  }

}

// CREO square
function getSquare(numero){
  const sq = document.createElement('div');
  numero++;
  sq.setAttribute("id", numero);
  sq.className = 'square';
  
  // Proprietà custom

  sq._sqID = numero;

  sq.addEventListener('click', function(){
    const numero = this._sqID;

    this.classList.add('clicked');
    if(arrayBomb.includes(this._sqID)){
      this.classList.add('boom');
      // STAMPO IL PUNTEGGIO
      if((punteggio - arrayBomb.length) == totSquare){
        alert('HAI VINTO!!!!! hai totalizzato: ' + punteggio + ' punti.');
      }else{
        alert('Perso.... hai totalizzato: ' + punteggio + ' punti.');
      }
      //ACCENDO TUTTE LE BOMBE

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
