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

// Version 1
// this is a class - the constructor and methods


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


// Version 2 - style of ES6
// it's good practice not to add functions to the contructor so it doesn't add it to every instance of 
// the constructor 


class Paper() {
	constructor(thickness){
		this.thickness = thickness;
	}
}

// the super class to Card is Paper, must always use super with extends
// super is pointing to Paper and we are passing 0.5 as the parameter for Paper

class Card extends Paper {  // extends will add the properties of Paper to Card
	constructor(suit, number) {
		super(0.5); // pointing to the constructor of the class, add before 'this'
		this.suit = suit;
  		this.number = number;
	}
}

getImageUrl() {   // no longer need to add .prototype
	return 'cards/' + this.number + this.suit + '.png';
}


get suit() {
	return 'my suit is  ' + this.suit
}

set suit() {

}

var Card = new Card('h', 3);

card.suit = 'c';










