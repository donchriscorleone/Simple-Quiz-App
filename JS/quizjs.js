const quizData = [
    {
        question: 'What is 1+1?',
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        correct: 'b'
    },
    {
        question: 'What is 2*2?',
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        correct: 'd'
    },
    {
        question: 'What is 5-4?',
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        correct: 'a' 
    },
    {
        question: 'What is 9 divided by 3?',
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        correct: 'c'
    }
]
const quiz = document.getElementById("quiz");
const question = document.getElementById("currentQuestion");
const a_txt = document.getElementById("a_txt");
const b_txt = document.getElementById("b_txt");
const c_txt = document.getElementById("c_txt");
const d_txt = document.getElementById("d_txt");
const submitBtn = document.getElementById('submit');
const resetDiv = document.getElementById('quiz')
let currentQuiz = 0;
var score = 0,
    answerElements

loadQuiz();

function getSelected(){
    answerElements = document.querySelector('input[name="choices"]:checked');
    console.log(answerElements.id)
    /*answerElements.forEach(radio =>{
        if(radio.checked)
            answer = answerElements.id;
            console.log(answer);
    })
    */
};

function deSelect(){ // reset the radio button
    const answerElements = document.querySelectorAll('input[name="choices"]');
    answerElements.forEach(answerElem => {
        if (answerElem.checked === true)
            answerElem.checked = false;
    });
};

function loadQuiz(){

    const currentQuizData = quizData[currentQuiz];
    question.innerHTML = quizData[currentQuestion]
    
    question.innerHTML = currentQuizData.question
    a_txt.innerText = currentQuizData.a
    b_txt.innerText = currentQuizData.b
    c_txt.innerText = currentQuizData.c
    d_txt.innerText = currentQuizData.d
    deSelect();

}
submitBtn.addEventListener('click', () =>{
    const answer = getSelected();
        
    if (answerElements.id === quizData[currentQuiz].correct){
        score++;
        console.log(score)
    }
    currentQuiz++;
    if (currentQuiz < quizData.length){
        loadQuiz(); 
    }
        else{
            quiz.innerHTML = `<h1>Your score is ${score}</h1>`;
        }   
    
});
