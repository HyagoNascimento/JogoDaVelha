// Variáveis para desenvolvimento do Jogo:
let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
//Fim do jogo
let gameOver = false;
let symbols = ['o', 'x'] 
//Possibilidades de Vitorias
let winStates = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
]

function handleMove(position) {
//Verifica se o jogo não existe mais possibilidades
if (gameOver) {
    return
}

if (board[position] == '') {
    board[position] = symbols[playerTime]
    gameOver = isWin();
    if (gameOver == false) {
        playerTime = (playerTime == 0) ? 1 : 0
    }
}
return gameOver
}

//função responsável por verificar se há um vencedor após cada jogada ela é acionada.
let sequenceWin
function isWin() {

//for para verificar se existem icones iguais
for (var i = 0; i < winStates.length; i++) {
    let seq = winStates[i]

    //variaveis para armazenar os conteudos de cada posição      
    let pos1 = seq[0]
    let pos2 = seq[1]
    let pos3 = seq[2]

    if (board[pos1] == board[pos2] &&
        board[pos1] == board[pos3] &&
        board[pos1] != '') {
        sequenceWin = seq
        return true
    }
}
return false
}

function restartGame() {
board = ['', '', '', '', '', '', '', '', ''];
playerTime = 0;
gameOver = false;
reloadSquares()
}