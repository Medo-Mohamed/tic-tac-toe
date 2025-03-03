let boxsContain = document.querySelector(".boxsContain");
let info = document.querySelector(".info");
let turnSign = document.querySelector(".info span");
let footerButton = document.querySelector(".footer button");
// console.log(boxsContain);
let winPosiable = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [4, 5, 6],
    [7, 8, 9]
]

boxsContain.addEventListener("click", play);
let player1 = [];
let player2 = [];
let turn = true;
let winner = false;
function play(e) {
    let num = e.target.getAttribute("number");
    if (num > 0 && num <= 9 && !(player1.find(n => n == num) || player2.find(n => n == num)) && !winner) {
        let ans;
        if (turn) {
            player1.push(+num);
            ans = checkWinPlayer(player1);
            e.target.innerHTML = 'X';
            e.target.style.backgroundColor = "rgb(135, 0, 0)";
            turnSign.innerHTML = 'O';
            turnSign.classList.toggle('X');
        }
        else {
            player2.push(+num);
            ans = checkWinPlayer(player2);
            e.target.innerHTML = 'O';
            e.target.style.backgroundColor = "rgb(5, 153, 0)";
            turnSign.innerHTML = 'X';
            turnSign.classList.toggle('X');
        }

        if (ans) {
            info.innerHTML = `Congrats! player <span class="${turn ? "X" : ""}">${turn ? "X" : "O"}</span>`;
            footerButton.textContent = "NEW GAME ?";
            if (turn)
                console.log(player1)
            else
                console.log(player2)
            winner = true;
        }
        turn = !turn;
    }

    if (player1.length + player2.length == 9) {
        info.innerHTML = "GAME OVER! No one win.";
        footerButton.textContent = "NEW GAME ?";
    }

}
function checkWinPlayer(player) {
    return winPosiable.some(winCheck => {
        return winCheck.every(num => player.includes(num));
    })
}

function resetGame() {
    location.reload();
}
