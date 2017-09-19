# Tictactoe...

## version 0.1.0

* nextPlayer: boolean
    * initialized : true
    * purpose: store player turn


* boardState : array
    * initialized: 9 x null
    * Store board state.

* play: function
    * args: 1
        * box : node
        * purpose : take node as argument
    * return : undefined
    * purpose: place players move 
    * behavior : player takes turn on box,check box clicked is empty,then user place 'x' or 'o' and change player playing, if player made move on already existing box,we trow warning .if all whent ok we console.log board.
        