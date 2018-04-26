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

function Deck() {
	this.cards = [];

	var suits = ['h', 'd', 's', 'c'];
	for (var i=0; i<52; i++) {
		var currentSuit = suits[Math.floor(i/13)];
		var currentNumber = i%13 + 1;
		this.cards.push(new Card(currentSuit, currentNumber));
	}

	this.shuffleDeck();
}

Deck.prototype.shuffleDeck = function() {
	this.cards.sort(function(a, b){
		return Math.random() - 0.5;
	});
}

Deck.prototype.drawCard= function() {
	return this.cards.pop();
}

Deck.prototype.numCardsLeft = function() {
	return this.cards.length;
}





