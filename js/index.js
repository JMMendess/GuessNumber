const form = document.getElementById('form');
form.addEventListener('submit', handlesubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: -1,
    numberDrawn: function randomValue() {
        return Math.round(Math.random()* this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value){
        attempt.innerHTML = 'tentativa: ' + value;
};

function handlesubmit(e){ 
    e.preventDefault();
    console.log("enviou form")

    let kick = document.getElementById('kick').value;
    
    if(!kick) {
        alert ('digite algum valor!')
        return;
    }

    console.log(numberDrawn, kick)

    if(numberDrawn == kick) {
        console.log("entrou ==")
        playAgain();
        status.innerHTML = 'Parabéns, você acertou!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        status.style.color = '#fff';
        const btnJogar = document.getElementById('jogar')
        btnJogar.setAttribute('disabled', 'disabled');
        btnJogar.style.backgroundColor = '#ccc'
        clear();
        
    } else if(numberDrawn > kick){
        console.log("entrou >")
        status.innerHTML = 'O número é Maior!';
        status.style.color = '#de4251';
        clear();
    
    }else if(numberDrawn < kick) {
        console.log("entrou <")
        status.innerHTML = 'O número é menor';
        status.style.color = '#de4251';
        clear();
    }
};

updateAttempt(attempt, ++Guess.attemptsNumber);

function playAgain() {
    const btnRestart = document.getElementById('btnRestart');
    btnRestart.style.display = 'flex';
    btnRestart.onclick = restart;
};

function restart(){
    console.log('restart');
    document.location.reload(true);
};

function clear() {
  document.getElementById('kick').value = '';
};
