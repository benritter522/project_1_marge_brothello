console.log('yes connected');
console.log('maybe connected');

// modal

// set up players 1 and 2
    // player 1 readout
    // player 2 readout

// intial board setup
    // create 10x10 2D array
        // outer row/column of the arrays = null
        // 8x8 'active' spaces

    // set up the 4 starting pieces

// player tries to make a move
    // isValidMove()

        // checkSpaceIsAvailable()
            // Seeing if space is empty--has a value of 0. value of 1 means white, value of 2 means black, value of null means out of bounds

        // checkNeighbors()
            // checkSingleNeighbor() // --in given direction as parameter? --maybe temporarily assign ids to help with logistics if it gets messy // WHILE neighbor.value !== null ?? maybe??
                // if neighbor.value = 0 // || neighbor.value = null // -- could I just do if neighbor.value == 0 bc that's 'falsey' and so is null?
                    // return false for this neighbor
                // else if neighbor.value = this.value //if both black or both white
                    // return false for this neighbor
                // else
                    //  call checkSingleNeighbor() from this neighbor -- RECURSIONNNN

                    /*  going to need to make conditions for the end boundary 
                        that's the same value as the placed piece. 
                        Keep track of 'last piece checked in line' or something */

                    /*  if just one of the directions is valid for the move,
                        the move is valid. can return when that is true and exit the function*/

    // if move is valid
        // flip pieces() // check all possible directions, don't stop after one direction is valid. Can sandwich in multiple directions with one move.

            

// end condition