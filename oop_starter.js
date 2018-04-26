/* Create a constructor Card. A card object will have 2 properties:

point - the point value of the card: a number between 1 and 13.
suit - the suit of the card: one of diamonds, clubs, hearts and spades.
A card will be created thus:

> var myCard = new Card(5, 'diamonds')
And you can access the individual properties like:

> myCard.point
5
> myCard.suit
'diamonds' */


function Card(suit, number) {
  this.suit = suit;
  this.number = number;
}

Card.prototype.getImageUrl = function() {
	return 'cards/' + this.number + this.suit + '.png';
}



/* getImageUrl()
Add a getImageUrl method to card objects by adding it as a property to Card.prototype. 
The method should return the URL path to the png image file for the card.

> myCard.getImageUrl()
'images/5_of_diamonds.png' */


