document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event) {
    if (handleMove(event.target.id)) {

        setTimeout(() => {
            let player = "Bolinha"
            if(playerTime == 0){
                player = "Bolinha"
            }else{
                player = "Xis"
            }
            alert("Player " + player + " Venceu. Parabéns!!")
        }, 10)
    }
    updateSquares(event.target.id)
}

function updateSquares(position) {
    let square = document.getElementById(position.toString())
    symbol = board[square.id]
    square.innerHTML = `<div class='${symbol}'></div>`
}

let restart = document.getElementById("restart").addEventListener('click', restartGame)

function reloadSquares() {

    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        symbol = board[square.id]
        if (symbol == '') {
            square.innerHTML = `<div class='${''}'></div>`
        }

    })
}