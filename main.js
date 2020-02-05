alert('hello')
const players = {
    "-1": 'Teal',
    "1": 'Red',
    "null": 'green',
}
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [6,4,2],
    [8,4,0],
    [2,5,8],
    [0,3,6],
    [1,4,7]
    
    ];
let board;
let turn;
let winner;

let move = function(e ){
    var idx = (e.target.id.replace('cell', ''));
    if (board[idx] || winner) return;
    board[idx] = turn;
    turn *= -1;
    winner = getWinner();
    render();

    }

let whosTurn = document.querySelector('h1')
console.log(whosTurn);

let box = document.querySelectorAll('div')
console.log(box);

document.querySelector('.gameBoard').addEventListener('click', move);
document.querySelector('button').addEventListener('click', init);


init();
function init() {
    board = [null,null,null,null,null,null,null,null,null];
    
    turn = 1;
    winner = null;
}
render();

function render() {
    board.forEach(function(cell, idx) {
         box[idx].style.background = players[cell];
    
        });
        if (winner === 'tie') {
            whosTurn.textContent = 'its a tie!'
        } else if (winner) {
            whosTurn.textContent = `${players[winner]} won the game`;
        } else {
            whosTurn.textContent = `${players[turn]}'s turn`;
        }
    }
    function getWinner() {
for (var i = 0; i < winningCombos.length; i++) {
        //if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3) return board[winningCombos[i][0]];
         if (Math.abs(board[0] + board[1] + board[2]) === 3) return board[0];
         if (Math.abs(board[3] + board[4] + board[5]) === 3) return board[3];
         if (Math.abs(board[6] + board[7] + board[8]) === 3) return board[6];
         if (Math.abs(board[0] + board[3] + board[6]) === 3) return board[0];
         if (Math.abs(board[1] + board[4] + board[7]) === 3) return board[1];
         if (Math.abs(board[2] + board[5] + board[8]) === 3) return board[2];
         if (Math.abs(board[0] + board[4] + board[8]) === 3) return board[0];
         if (Math.abs(board[2] + board[4] + board[6]) === 3) return board[2];
         if (board.includes(null)) return null;
         return 'tie';
    }
}