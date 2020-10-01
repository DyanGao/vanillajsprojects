console.log('Welcome to QuizApp');
const questions = [
    {
        question: 'When was JavaScript Created ?',
        a: '1996',
        b: '1995',
        c: '1992',
        d: '1997',
        correct: 'b'
    },
    {
        question: 'Which is the most popular language in year 2019 ?',
        a: 'Java',
        b: 'C++',
        c: 'Python',
        d: 'JavaScript',
        correct: 'a'
    },
    {
        question: 'Who is the Prime Minister of India ?',
        a: 'Narendra Modi',
        b: 'Rahul Gandhi',
        c: 'Imran Khan',
        d: 'Dr.Manmohan Singh',
        correct: 'a'
    },
    {
        question: 'Who created SpiderMan ?',
        a: 'Tony Stark',
        b: 'Peter Parker',
        c: 'Stan Lee',
        d: 'Sheng Chi',
        correct: 'c'
    },
    {
        question: 'What is the Capital of Jharkhand ?',
        a: 'Patna',
        b: 'Jamshedpur',
        c: 'Daltonganj',
        d: 'Ranchi',
        correct: 'd'
    }
]

let quesNumber = 0 ;
const quiz = document.getElementById('quiz') ;

const a_option = document.getElementById('a_option') ; 
const b_option = document.getElementById('b_option') ; 
const c_option = document.getElementById('c_option') ; 
const d_option = document.getElementById('d_option') ;
const heading = document.getElementById('heading') ;  
const button = document.getElementById("submit") ;

displayQues() ;

function displayQues(){
    const currentQues = questions[quesNumber] ; 
    heading.innerText = currentQues.question ; 
    a_option.innerText = currentQues.a ;
    b_option.innerText = currentQues.b ; 
    c_option.innerText = currentQues.c ; 
    d_option.innerText = currentQues.d ;
}

let result = 0 ;
button.addEventListener("click", ()=>{
    let answerkey = getRadioValue() ;
    console.log(answerkey) ; 
    if(answerkey){
        if(answerkey==questions[quesNumber].correct){
            result++ ;
        }
        quesNumber++ ; 
        deselect() ; 
        if(quesNumber<questions.length){
            displayQues()  ;
        }
        else{
            // alert('You have finished the Quiz and You Scored '+result+' marks') ; 
            quiz.innerHTML = `
            <h2>You have finished the Quiz and You Scored ${result}/${questions.length}</h2>
            `
        }
     }
     
}) ;

function getRadioValue(){
    const ans = document.getElementsByName('answer') ; 
    let answer = undefined ; 
    for(i=0 ; i<ans.length ; i++){
        if(ans[i].checked){
            answer = ans[i].id ; 
        }
    }
    return answer ; 
}

function deselect(){
    let ans = document.getElementsByName('answer') ;
    for(i=0 ; i<ans.length ;i++){
        if(ans[i].checked){
            ans[i].checked = false ; 
        }
    }
}