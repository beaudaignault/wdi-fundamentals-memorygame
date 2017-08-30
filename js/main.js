//fundamentals.generalassemb.ly/v3.1/08_unit/control-flow-assignment.html

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[3];

cardsInPlay.push(cardOne, cardTwo);
//cardsInPlay.push('king');

console.log("The user flipped " + cardsInPlay);

 if ( cardsInPlay.length === 2 ) {

	if ( cardsInPlay[0] === cardsInPlay[1] ) { 
		alert("You've found a match!");
	} else {
		alert("Sorry, try again.");
	} 
} else {
	alert("Sorry, try again. Must be " + cardsInPlay.length * 2 + " cards played.");
}
