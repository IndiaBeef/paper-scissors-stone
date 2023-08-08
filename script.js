

const pick = ['rock', 'paper', 'scissors'];

let score = JSON.parse(localStorage.getItem('score')) || {
    'win':0,
    'lose':0,
    'tie':0,
};

var btnRock = document.querySelector('.js-rock-btn');
var btnPaper = document.querySelector('.js-paper-btn');
var btnScissors = document.querySelector('.js-scissors-btn');
var result = document.querySelector('.js-result');
var scoreElement = document.querySelector('.js-score');
var btnReset = document.querySelector('.js-reset-btn');
var showElement = document.querySelector('.js-show');

scoreElement.innerHTML = `Wins:${score.win} Losses:${score.lose} Ties:${score.tie}`;

btnRock.addEventListener('click', function(e){
    play('rock');
}, false);

btnPaper.addEventListener('click', function(e){
    play('paper');
}, false);

btnScissors.addEventListener('click', function(e){
    play('scissors');
}, false);

btnReset.addEventListener('click', function(e){
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    scoreElement.innerHTML = `Wins:${score.win} Losses:${score.lose} Ties:${score.tie}`;
    result.innerHTML = '';
    showElement.innerHTML = '';
    localStorage.removeItem('score');
}, false);


function play(picked){
    const computer = pick[parseInt(Math.random() * 10 % 3)];
    //rock
    if(picked === 'rock'){
        if(computer === 'rock'){
            score.tie++;
            result.innerHTML = 'Tie!';
        }
        else if(computer === 'paper'){
            score.lose++;
            result.innerHTML = 'you lose!';
        }
        else{
            score.win++;
            result.innerHTML = 'you win!';
        }
        show(picked, computer);
    }
    //paper
    else if(picked === 'paper'){
        if(computer === 'rock'){
            score.win++;
            result.innerHTML = 'you win!';
        }
        else if(computer === 'paper'){
            score.tie++;
            result.innerHTML = 'Tie!';
        }
        else{
            score.lose++;
            result.innerHTML = 'you lose!';
        }
        show(picked, computer);
    }
    //scissors
    else{
        if(computer === 'rock'){
            score.lose++;
            result.innerHTML = 'you lose!';
        }
        else if(computer === 'paper'){
            score.win++;
            result.innerHTML = 'you win!';
        }
        else{
            score.tie++;
            result.innerHTML = 'Tie!';
        }
        show(picked, computer);
    }
    localStorage.setItem('score', JSON.stringify(score));
    scoreElement.innerHTML = `Wins: ${score.win} Losses: ${score.lose} Ties: ${score.tie}`;
}

function show(picked, computer){
    showElement.innerHTML = `You
        <img class = 'move-icon' src="image/${picked}-emoji.png">
        <img class = 'move-icon' src="image/${computer}-emoji.png">
        Computer`;
}