//store player turn
var nextPlayer = true;

//Store board state.
var boardState = [
null,null,null,
null,null,null,
null,null,null
];


function play(box) {
	//behavior : player takes turn on box,check box clicked is empty,then user place 'x' or 'o' and change player playing, if player made move on already existing box,we trow warning .if all whent ok we console.log board.
	if(boardState[box.id] == null){
		nextPlayer ? boardState[box.id] = 'o' : boardState[box.id] = 'x';
		nextPlayer = !nextPlayer;
	}else{
		alert("made bad move!");
	}
	console.log(boardState);
	
}
