# Tictactoe...

## version 0.1.0

* nextPlayer: boolean
    * initialized : true
    * purpose: store player turn


* boardState : array
    * initialized: 3x array with 3x nulls
    * Store board state.

* play: function
    * args: 1
        * box : node
        * purpose : take node as argument
    * return : undefined
    * purpose: place players move 
    * behavior : player take move on board,his place 'x' or 'o' on on board box state with colum and row atribute,if is empty,we check witch player playing,and place 'x' or 'o' on board state,then we populate.if player placed on not empty box we trow warning with message and populate board.

* populateBoard: function
    * args : 0
    * return : undefined
    * purpose: display players boards state to player
    * behavior : loop over board state and display to a player in DOM.


