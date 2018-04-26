/* Deck constructor
A deck is also represented as a collection of cards, but it would also be convenient for it to be able 
to shuffle itself, and be asked to draw a card. We would like to be able to do this with a Deck constructor:

> var myDeck = new Deck()
> myDeck.draw()
Card {point: 6, suit: "clubs"}
> myDeck.draw()
Card {point: 1, suit: "spades"}
> myDeck.shuffle()
> myDeck.numCardsLeft()
50
Implement a Deck constructor that will allow for the above code to work. */