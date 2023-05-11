let playerOneDeck, playerTwoDeck
 let turnOn

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

function freshDeck(){
  return SUITS.flatMap(suit=> {
    return VALUES.map(value =>{
      return new Card(suit, value)
    })
    
  })
}

class Deck {
  constructor(cards= freshDeck()){
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
    
      
      const deckMidpoint = Math.ceil(dek.numberOfCards/2)
      playerOneDeck = new Deck (dek.cards.slice(0, deckMidpoint))
      playerTwoDeck = new Deck (dek.cards.slice(deckMidpoint, dek.numberOfCards))
      turnOn = true  //starts the turns right after shuffling
       
        
        function flipCards(){
         if (turnOn= true){
            let playerOneCard = playerOneDeck.pop();
            let playerTwoCard = playerTwoDeck.pop()
          
            
            
            if (cardValue[playerOneCard] < cardValue[playerTwoCard]){
              this.points.playerTwo+= 3
            }
            else if (cardValue [playerOneCard] > cardValue[playerTwoCard]){
              this.points.playerOne += 3
            }
            
            
            if (playerOneDeck.length == 0 && (playerTwoDeck.length = 0) && this.points.playerTwo> this.points.playerOne){
              `Player two is the winner, points: ${this.points.playerTwo}`
              `Player one lost,  points: ${this.points.playerOne} `
              turnOn= false
            }
            
            
            if (playerOneDeck.length == 0&&(playerTwoDeck.length ==0)&& ththis.points.playerTwo < this.points.playerOneis){
              `Player One is the winner, points: ${this.point.playerOne}`
              `Player two lost, points: ${this.point.playerTwo}`
              turnOn = false
            }
          }
        }
        flipCards()
      }
             alert(start())

       
          let playerOne = new Player
          let playerTwo = new Player
 