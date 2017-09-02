var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
]; // has global scope

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

	console.log("The user flipped a " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch();
};
	flipCard(0);
	flipCard(2);

