//store player turn
var nextPlayer = true;

//Store board state.
var boardState = [
null,null,null,
null,null,null,
null,null,null
];


function play(box) {
	//behavior : player takes turn on box,check box clicked is empty,then user place 'x' or 'o',populate board and change player playing, if player made move on already existing box,we trow warning .if all whent ok re-populate board.
	if(boardState[box.id] == null){
		nextPlayer ? boardState[box.id] = 'o' : boardState[box.id] = 'x';
		nextPlayer = !nextPlayer;
		populateBoard();
	}else{
		alert("made bad move!");
	}
	populateBoard();
	
}

function populateBoard(){
	//behavior : loops over 9 items and for each item display in each box from html state from board array.
	for(var i=0 ; i<9;i++){
		document.getElementById(i).innerHTML = boardState[i];
	}
}
