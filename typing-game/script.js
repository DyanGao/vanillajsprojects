const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

//List of words for game
const words = [
  'grammer',
  'interview',
  'ultimate',
  'tense',
  'ball',
  'silver',
  'loving',
  'north',
  'eight',
  'speed',
  'airplane',
  'dependent',
  'superficial',
  'juice',
  'admit',
  'drop'
];

//init word
let randomWord;

//init score
let score = 0;

//init time
let time = 10;

// set difficulty to value in localstorage or medium
let difficulty = localStorage.getItem('difficulty') !== null ?
  localStorage.getItem('difficulty') : 'medium';

// set difficulty select value
difficultySelect.value = localStorage.getItem('difficulty') !== null ?
  localStorage.getItem('difficulty') : 'medium';

//focus on text on start
text.focus();

//start counting down
const timeInterval = setInterval(updateTime, 1000);

//generate random word for game
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
//console.log(getRandomWord());

//add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

//update time
function updateTime() {
  //console.log(1);
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    //end game
    gameOver();
  }
}

//game over, show end screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;
  endgameEl.style.display = 'flex';
}

addWordToDOM();

//update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}


//typing
text.addEventListener('input', e => {
  const insertedText = e.target.value;
  //console.log(insertedText)
  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    //clear 
    e.target.value = '';

    if (difficulty === 'hard') {
      time += 2;
    } else if (difficulty === 'medium') {
      time += 4;
    } else {
      time += 6;
    }


    updateTime();
  }
})

//settings btn click
settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

//settings select
settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  //console.log(difficulty);
  localStorage.setItem('difficulty', difficulty)
})