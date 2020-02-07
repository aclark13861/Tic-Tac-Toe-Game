const players = {
    "-1": 'O',
    "1": 'X',
    '' : '',
}
const x = "1"
console.log(players[x])
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

let move = function(e) {
    var idx = (e.target.id.replace('cell', ''));
    if (board[idx] || winner) return;
    board[idx] = turn;
    turn *= -1;
    winner = checkWinner();
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
    board = ['','','','','','','','',''];
    
    turn = 1;
    winner = '';
}
render();

function render() {
    board.forEach(function(cell, idx) {
         box[idx].textContent = players[cell];
    });
    if (winner === '') {
        whosTurn.textContent = `${players[turn]}'s turn`;
    } else if (winner === 'tie') {
        whosTurn.textContent = `it's a tie`;
    } else {
        if (winner === 1) {
            whosTurn.textContent = `${players[winner]} won the game`;
        } else {
            whosTurn.textContent = `${players[winner]} won the game`;
        }
    }
}

function checkWinner() {
    if (Math.abs(board[0] + board[1] + board[2]) === 3) return board[0];
    if (Math.abs(board[3] + board[4] + board[5]) === 3) return board[3];
    if (Math.abs(board[6] + board[7] + board[8]) === 3) return board[6];
    if (Math.abs(board[6] + board[4] + board[2]) === 3) return board[6];
    if (Math.abs(board[8] + board[4] + board[0]) === 3) return board[8];
    if (Math.abs(board[2] + board[5] + board[8]) === 3) return board[2];
    if (Math.abs(board[0] + board[3] + board[6]) === 3) return board[0];
    if (Math.abs(board[1] + board[4] + board[7]) === 3) return board[1];
    if (board.includes('')) return '';
    return 'tie';
}
