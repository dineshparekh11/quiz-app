const endDate = "4 November 2023 11:00 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");


function clock(){
    const end = new Date(endDate)
    const now = new Date();
    // console.log(end);
    // console.log(now);

    const diff = (end - now) / 1000;

    if(diff < 0) return;
    console.log(diff);
    // // convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // convert into hours
    inputs[1].value = Math.floor(diff / 3600) % 24;
    // convert into minutes
    inputs[2].value = Math.floor(diff / 60) % 60;
    // convert into seconds
    inputs[3].value = Math.floor(diff) % 60;
    
}
clock()

setInterval(
    () => {
        clock()
    },
    1000
)

const questions = [
    {
        'que': 'Which of the following is markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'JavaScript',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que': 'What does CSS stand for?',
        'a': 'Hypertext Transfer Protocol',
        'b': 'Cascading Style Sheets',
        'c': 'JavaScript',
        'd': 'Python Style Sheets',
        'correct': 'b'
    },
    {
        'que': 'Which of the following is not a data type in JavaScript?',
        'a': 'String',
        'b': 'Number',
        'c': 'Boolean',
        'd': 'Array',
        'correct': 'd'
    },
    {
        'que': 'Which HTML tag is used to create a hyperlink?',
        'a': '<link>',
        'b': '<a>',
        'c': '<href>',
        'd': '<hyperlink>',
        'correct': 'b'
    },
    {
        'que': 'What is the primary purpose of CSS?',
        'a': 'To add interactivity to web pages',
        'b': 'To structure the content of a web page',
        'c': 'To define the presentation and layout of a web page',
        'd': 'To store data on a web server',
        'correct': 'c'
    },
    {
        'que': 'Which JavaScript keyword is used to declare a variable?',
        'a': 'var',
        'b': 'let',
        'c': 'const',
        'd': 'variable',
        'correct': 'a'
    },
    {
        'que': 'What is the purpose of the HTML <head> section?',
        'a': 'To define the main content of the web page',
        'b': 'To define the structure of the web page',
        'c': 'To include metadata and resources like styles and scripts',
        'd': 'To display the web page title',
        'correct': 'c'
    },
    {
        'que': 'What CSS property is used to change the text color of an element?',
        'a': 'background-color',
        'b': 'text-color',
        'c': 'color',
        'd': 'font-color',
        'correct': 'c'
    },
    {
        'que': 'Which JavaScript function is used to display a dialog box with a specified message and an "OK" button?',
        'a': 'alert()',
        'b': 'prompt()',
        'c': 'confirm()',
        'd': 'message()',
        'correct': 'a'
    },
    {
        'que': 'What does the HTML <br> tag represent?',
        'a': 'A line break',
        'b': 'A horizontal rule',
        'c': 'A bullet point',
        'd': 'A hyperlink',
        'correct': 'a'
    }
]

let currentQuestion = 3;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const prevButton = document.getElementById('prv-btn');
const nextButton = document.getElementById('nxt-btn');

const loadQuestion = () => {
    const data = questions[currentQuestion]
    quesBox.innerText = ` ${currentQuestion+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

    console.log(data);
}
loadQuestion()

function displayQuestion(questionIndex) {
    const currentQuestionData = questions[questionIndex];
    questionText.textContent = currentQuestionData.question;

    currentQuestionData.options.forEach((option, index) => {
        optionButtons[index].textContent = option;
    });
}

function checkAnswer(selectedOptionIndex) {
    const currentQuestionData = questions[currentQuestion];
    return selectedOptionIndex === currentQuestionData.correctAnswer;
}

function showNextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion(currentQuestion);
    }
}

function showPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion(currentQuestion);
    }
}

optionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (checkAnswer(index)) {
            // Handle correct answer
        } else {
            // Handle incorrect answer
        }
    });
});

prevButton.addEventListener('click', () => {
    showPreviousQuestion();
});

nextButton.addEventListener('click', () => {
    showNextQuestion();
});

// Initialize the quiz
displayQuestion(currentQuestion);