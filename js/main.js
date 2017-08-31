
var cards = ["queen", "queen", "king", "king"]; // has global scope
var cardsInPlay = []; // has global scope
var checkForMatch = function() {
	if ( cardsInPlay.length === 2 ) {

		if ( cardsInPlay[0] === cardsInPlay[1] ) { 
			alert("You've found a match!");
		} else {
			alert("Sorry, try again.");
		} 
	} 
}

var flipCard = function(cardId) {

	console.log("The user flipped " + cards[cardId]);
	cardsInPlay.push(cardId);
	checkForMatch();
};
	flipCard(0);
	flipCard(2);

