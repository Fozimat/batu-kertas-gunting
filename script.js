const batu = 0;
const kertas = 1;
const gunting = 2;

let playerScore = 0;
let enemyScore = 0;

let enemySign = 0;

let round = 1;

function handleSigns(playerSign) {
    enemySign = Math.floor(Math.random() * 3);
    compareSigns(playerSign);
    round++;
    translateEnemySign();
    printScore();
    printRound();
    checkGameOver();
}

function compareSigns(playerSign) {
	if(playerSign === kertas && enemySign === batu) {
        playerScore++;
        console.log("Selamat Kamu Menang");
        alert("Selamat Kamu Menang!");
	} else if(playerSign === batu && enemySign === gunting){
        playerScore++;
        console.log("Selamat Kamu Menang");
        alert("Selamat Kamu Menang!");
	} else if(playerSign === gunting && enemySign === kertas){
        playerScore++;
        console.log("Selamat Kamu Menang");
        alert("Selamat Kamu Menang!");
	} else if(playerSign === enemySign){
        alert("Draw!");
        console.log("Draw");
	} else {
        enemyScore++;
        console.log("Kamu Kalah!");
        alert("Kamu kalah!");
    }
}

function translateEnemySign(){
    if(enemySign == 0){
        alert("Pilhan musuh adalah batu");
    }
    else if(enemySign == 1){
        alert("Pilhan musuh adalah kertas");
    }
    else{
        alert("Pilihan musuh adalah gunting");
    }
}

function printScore() {

  // TODO 1: Cetak skor dari player dan enemy ke tampilan
   const playerScoreElement = document.getElementById('playerScore');
   playerScoreElement.innerHTML = playerScore; 
 
   const enenmyScoreElement = document.getElementById('enemyScore');
   enenmyScoreElement.innerHTML = enemyScore;

}

function printRound() {
  
  // TODO 2: Cetak posisi round ke tampilan
    const roundElement = document.getElementById('round');
    roundElement.innerHTML = round;

}

function checkGameOver() {
    if(round == 6) {
        alert('Game Selesai!');
        showFinalScore();
	      reset();
    }
}

function showFinalScore() {
	if(playerScore > enemyScore){
		alert("Hasil akhir pertandingan adalah " + playerScore + "-" + enemyScore + " Selamat Anda menang");
	}
	else if(playerScore == enemyScore){
		alert("Hasil akhir pertandingan adalah " + playerScore + "-" + enemyScore + " Masih Draw nih");
	}
	else{
		alert("Hasil akhir pertandingan adalah " + playerScore + "-" + enemyScore + " Jangan sedih ya, coba lagi");
	}
}

function reset() {

/* TODO 3: Memulai kembali permainan dengan ketentuan sbb: 
   - Nilai playerScore dan enemyScore menjadi 0. 
   - Nilai round menjadi 1
   - Mengembalikan tampilan skor dari player dan enemy menjadi seperti semula dengan   memanggil fungsi printScore
   - Mengembalikan tampilan ronde menjadi seperti semula dengan memanggil fungsi printRound
*/
    playerScore = 0;
    enemyScore = 0;
    round = 1;

    printScore();
    printRound();
  
}