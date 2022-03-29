const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');
const answerArr = [
    "I have no idea. I am just a ball",
    "I consider it as very hard question. I think you should go to your doctor.",
    "Yes",
    "No",
    "What a question!? I don't know",
    "Ask again and try to write down in slowly...",
    "Maybe",
    "Yes, definitely!",
    "No. I don't think so.",
    "Sure!",
    "Probably yes, but check it additionally in Wikipedia",
    "Yes, why not?",
    "Let's do it!",
    "I am smart MagicBall I am sure the answer should be 'YES'.",
    "And how DO YOU think?"
]

// funkcje - losowanie odpowiedzi, spradzanie inputa,wypisowyanie errora, usuwanie errora i odpowiedzi oraz inputa, uruchamianie kuli,


const ballShake = () => {
    ball.classList.add('shake-animaton');
setTimeout(checkInput,1000)};

const checkInput = () => {
    if (input.value !== '' && input.value.slice(-1) === '?') {
        generateAnswer();
        error.textContent = '';
        
    } else if (input.value !== '' && input.value.slice(-1) !== '?'){
        error.textContent = 'The question must finish with "?" sign.'
        answer.textContent = ''
        
    }
    else {
        error.textContent = 'Ask a question.'
        answer.textContent = ''
        
    }
    ball.classList.remove('shake-animaton');
}

const generateAnswer = () => {
 
const number = Math.floor(Math.random() * answerArr.length)
answer.innerHTML = `<span>Answer:</span> ${answerArr[number]}`
}



ball.addEventListener('click', ballShake);
