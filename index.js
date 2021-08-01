let firstCard;
let secondCard;
let cards = []; 
let hasBlackJack = false;
let isAlive; 
let messageMain = document.getElementById('message-el');
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el"); 
let sum = 0; 
let newcard = document.querySelector("#new-card");

let player = {
    Name: "Perez", 
    Chips: 145
}

let playerEl = document.querySelector('#amount'); 
playerEl.textContent = player.Name + ": $" + player.Chips; 

function getRandomIntInclusive() {
  
  /*  min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive

    
*/
    r = Math.floor(Math.random()*13)+ 1;
    console.log(r)
    if( r === 1){
        return 11; 
    }else if(r > 10 ){
        return 10; 
    }
    else{
        return r; 
    }

}

function newCard(){

    if(sum < 21){

    let x = getRandomIntInclusive(); 
    cards.push(x); 
    
    sum += x; 

    checkSum(); 
    cardShow();

    sumEl.textContent = 'Sum: ' + (sum); 
    
    console.log("x: " + x); 
    console.log('cards: ' + cards)
    console.log("New Sum: " + sum)

}
    

}

function playGame(){

   isAlive = true;
   cards = []; 



    cards[0] = getRandomIntInclusive();
    cards[1] = getRandomIntInclusive();

    sum = cards[0] + cards[1]; 
        
    
    console.log('sum = ' + sum)

    checkSum(); 

    sumEl.textContent = 'Sum: ' + sum; 

    cardShow(); 

    newcard.addEventListener('click',newCard);

}
    

function checkSum(){

    if (sum < 21) {
        messageMain.textContent = "Draw a new card? ";
    }
    else if (sum === 21) {
        messageMain.textContent = "You got blackjack! ";
        hasBlackJack = true;
    }
    else {
        messageMain.textContent = "You are out of the game! ";
        isAlive = false;
    }
}


function cardShow(){

    cardsEl.textContent = "Cards: "; 

    for(let count = 0; count < cards.length; count++){

        cardsEl.textContent += cards[count] + " "; 

    }

    
}