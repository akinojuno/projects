let typedText = document.querySelector('#text');
let wordToType = document.querySelector('#wordGenerator');
let gameTimer = document.querySelector('#seconds');
let time = 30;
let timeInterval = setInterval(countDown, 1000);
let score = 0;
let scoreBoard = document.querySelector('#score');
let text = document.querySelector('#text');
let gameWords = [
  
  'valorant',
  'Phasmophobia',
  'impostor',
  'genshin impact',
  'revenant',
  'shade',
  'oni',
  'Banshee',
  'poltergeist',
  'omen',
  'Sage',
  'Phoenix',
  'Brimstone',
  'Cypher',
  'Jett rebibe me',
  'Diluc',
  'singularity',
  'The Truth Untold',
  'Epiphany',
  'Serendipity',
  'Filter',
  'Mikrokosmos',
  'Magic Shop',
  'Chicken Noodle Soup',
  'Fancy, woo~',
  'Eyes Wide Open',
  `Can't stop me`,
  'Stray Cat',
  'One in a Million',
  'Nayeon',
  'Jeongyeon',
  'Momo',
  'Sana',
  'Jihyo',
  'Mina',
  'Dahyun',
  'Chaeyoung',
  'Tzuyu'


]
text.focus();


let randomWord;
function randomizeWords() {
  return gameWords[Math.floor(Math.random() * gameWords.length)];
}
// console.log(randomizeWords());

function getChallengeWords() {
  randomWord = randomizeWords();
  wordToType.textContent = randomWord;
}
getChallengeWords();

let gameOver = document.querySelector('#game-over');

function countDown(){
  time--;
  seconds.textContent = time + 's';
  if (time == 0){
    clearInterval(timeInterval);
    // gameOver.textContent = `Game Over. Your score is: ${score}. Refresh to play again.`
    gameOver.innerHTML = ` <h1>Game Over. Your score is: ${score}. Play again?</h1>
    
    <button onclick='location.reload()'> Play Again </button>`
    document.querySelector('#game-over').style.display = 'block';
    // gameOver.innerHTML
    // let reloadBtn = document.querySelector('#play-again');
    // reloadBtn.addEventListener('click', function(){
    //   location.reload();
    // })
  }
}


text.addEventListener('input', function(){
  
  let textInput = typedText.value;
  if(textInput == randomWord){
    getChallengeWords();
    score++;
    // textInput.value = '';
    typedText.value = '';
  }
  scoreBoard.textContent = score;
  // countDown();
})


