//store player turn
var nextPlayer = true;


function play(box) {
	//sets box to 'o' or 'x' depends on player playing,and change who's turn it is.
	nextPlayer ? box.innerHTML = 'o' : box.innerHTML = 'x';
	nextPlayer = !nextPlayer;
	
}
