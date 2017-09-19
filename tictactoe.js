//store player turn
var nextPlayer = true;

//Store board state.
var boardState = [
[null,null,null],
[null,null,null],
[null,null,null]
];


function play(box) {
	var column = box.getAttribute('column');
	var row = box.getAttribute('row');
	//behavior : player take move on board,his place 'x' or 'o' on on board box state with colum and row atribute,if is empty,we check witch player playing,and place 'x' or 'o' on board state,then we populate.if player placed on not empty box we trow warning with message and populate board.
	if(boardState[row][column] == null){
		nextPlayer ? boardState[row][column] = 'o' : boardState[row][column] = 'x';
		nextPlayer = !nextPlayer;
		populateBoard();
	}else{
		alert("made bad move!");
	}
	populateBoard();
	
}

function populateBoard(){
	var eleID = 0;
	//behavior : loops over 9 items and for each item display in each box from html state from board array.
	for(var i=0 ; i<3;i++){
		for(var j = 0;j < 3;j++){

			document.getElementById(eleID).innerHTML = boardState[i][j];
			eleID++ ;
		}
	}
}
