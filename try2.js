let playerOneDeck, playerTwoDeck

const SUITS = ['♣︎','♦︎','♠︎','♥︎']
const VALUES= [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

const cardValue = {'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, 
'8':8, '9':9, '10':10, 'J':11, 'Q':12, 'K':13, 'A':14}

class Card{
  constructor(suit, value){
this.suit = suit
this.value= value
}
}

function deck(){
  return SUITS.flatMap(suit=> {
    return VALUES.map(value =>{
      return new Card(suit, value)
    })
    
  })
}

class Deck {
  constructor(cards= deck()){
      this.cards = cards
      
  }


get numberOfCards (){
return this.cards.length
}
shuffle(){
    for (let i =this.cards.length-1; i>0; i--){
    let index = Math.floor(Math.random()*(i+1))
    let newIndex =this.cards[index]
    this.cards[index]= this.cards[i]
    this.cards[i]= newIndex
    }
  }

}
class Player{
  constructor(points){
    this.points= points
    
  }
}




    
    
    function start(){
      
      const dek = new Deck()
      dek.shuffle()
    
      
      let deckMidpoint = Math.ceil(dek.numberOfCards/2)
     let playerOneDeck = new Deck (dek.cards.slice(0, deckMidpoint))
      let playerTwoDeck = new Deck (dek.cards.slice(deckMidpoint, dek.numberOfCards))
      turnOn = true  //starts the turns right after shuffling

      function flipCards(){
          let playerOne = new Player(0)
             let playerTwo = new Player(0)
        while ((playerOneDeck.cards.length && playerTwoDeck.cards.length)!== 0){
            let playerOneCard = playerOneDeck.cards.pop();
            
            let playerTwoCard = playerTwoDeck.cards.pop()
     
  
          // console.log('round start')
           //console.log(cardValue[playerOneCard.value]< cardValue[playerTwoCard.value])

            if (cardValue[playerOneCard.value]< cardValue[playerTwoCard.value]){
              playerTwo.points += 3
            }

            else if (cardValue [playerOneCard.value] > cardValue[playerTwoCard.value]){
              playerOne.points += 3
             
            }
            else if (cardValue [playerOneCard.value] == cardValue[playerTwoCard.value]){
              playerOne.points += 0
              playerOne.points += 0

             
            }
            if ((playerOneDeck.cards.length == 0 || (playerTwoDeck.cards.length == 0) )&& playerTwo.points > playerOne.points){
              console.log( `Player two is the winner, points: ${playerTwo.points}
              Player one lost,  points: ${playerOne.points} `)
              turnOn= false
            }
            
            
           else if ((playerOneDeck.cards.length == 0 || (playerTwoDeck.length ==0))&& playerTwo.points < playerOne.points){
              console.log(`Player One is the winner, points: ${playerOne.points}
              Player two lost, points: ${playerTwo.points}`)
           }
              turnOn = false
            
          }
        }
        flipCards()
      }
      start()
      

       
