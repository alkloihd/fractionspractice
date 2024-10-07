// Morse Math Fractions/Decimals Game Script

// Global Variables
let gradeLevel;
let score = 0;
let currentQuestionIndex = 0;
let questions = [];
const totalQuestions = 20; // Number of questions per game

// Questions Database
const questionsDatabase = {
    5: [
        // Grade 5 Questions (20 examples)
        {
            question: "Select all equivalents of 1/2",
            options: ["0.5", "2/4", "50%", "0.25", "1/4"],
            answers: ["0.5", "2/4", "50%"],
            hint: "Think about dividing 1 into 2 equal parts."
        },
        {
            question: "Select all equivalents of 0.25",
            options: ["1/4", "25%", "2/5", "0.2", "1/5"],
            answers: ["1/4", "25%"],
            hint: "Consider what fraction represents a quarter."
        },
        {
            question: "Which fractions are equivalent to 3/6?",
            options: ["1/2", "0.5", "2/3", "3/6", "50%"],
            answers: ["1/2", "0.5", "3/6", "50%"],
            hint: "Simplify the fraction 3/6."
        },
        {
            question: "Select all decimals equivalent to 2/5",
            options: ["0.4", "0.25", "40%", "0.5", "0.2"],
            answers: ["0.4", "40%"],
            hint: "Divide 2 by 5."
        },
        {
            question: "Select all equivalents of 75%",
            options: ["3/4", "0.75", "75%", "2/3", "0.7"],
            answers: ["3/4", "0.75", "75%"],
            hint: "75% is three quarters of 100%."
        },
        {
            question: "Which decimals are equivalent to 1/4?",
            options: ["0.25", "25%", "0.5", "0.75", "0.2"],
            answers: ["0.25", "25%"],
            hint: "Divide 1 by 4."
        },
        {
            question: "Select all equivalents of 0.6",
            options: ["3/5", "60%", "0.06", "6%", "2/3"],
            answers: ["3/5", "60%"],
            hint: "Express 0.6 as a fraction and percentage."
        },
        {
            question: "Which fractions are equivalent to 0.8?",
            options: ["4/5", "80%", "2/5", "0.08", "8%"],
            answers: ["4/5", "80%"],
            hint: "Divide 4 by 5."
        },
        {
            question: "Select all equivalents of 50%",
            options: ["1/2", "0.5", "50%", "5%", "2/5"],
            answers: ["1/2", "0.5", "50%"],
            hint: "50% means half."
        },
        {
            question: "Which decimals are equivalent to 2/4?",
            options: ["0.5", "50%", "0.2", "2.4", "1/2"],
            answers: ["0.5", "50%", "1/2"],
            hint: "Simplify 2/4."
        },
        {
            question: "Select all equivalents of 1/3",
            options: ["0.333...", "33.3%", "3/9", "0.3", "30%"],
            answers: ["0.333...", "33.3%", "3/9"],
            hint: "1 divided by 3 gives a repeating decimal."
        },
        {
            question: "Which fractions are equivalent to 0.2?",
            options: ["1/5", "20%", "2/10", "0.02", "1/2"],
            answers: ["1/5", "20%", "2/10"],
            hint: "0.2 is two tenths."
        },
        {
            question: "Select all equivalents of 0.75",
            options: ["3/4", "75%", "0.7", "7/10", "75/100"],
            answers: ["3/4", "75%", "75/100"],
            hint: "0.75 represents three quarters."
        },
        {
            question: "Which decimals are equivalent to 4/10?",
            options: ["0.4", "40%", "2/5", "0.05", "5%"],
            answers: ["0.4", "40%", "2/5"],
            hint: "Simplify the fraction 4/10."
        },
        {
            question: "Select all equivalents of 0.125",
            options: ["1/8", "12.5%", "0.0125", "25/200", "1.25%"],
            answers: ["1/8", "12.5%"],
            hint: "0.125 is one eighth."
        },
        {
            question: "Which fractions are equivalent to 0.5?",
            options: ["1/2", "50%", "5/10", "0.05", "2/4"],
            answers: ["1/2", "50%", "5/10", "2/4"],
            hint: "0.5 is half."
        },
        {
            question: "Select all equivalents of 0.1",
            options: ["1/10", "10%", "1%", "10/100", "0.01"],
            answers: ["1/10", "10%", "10/100"],
            hint: "0.1 represents one tenth."
        },
        {
            question: "Which decimals are equivalent to 5/20?",
            options: ["0.25", "25%", "5%", "1/4", "0.5"],
            answers: ["0.25", "25%", "1/4"],
            hint: "Simplify 5/20."
        },
        {
            question: "Select all equivalents of 0.45",
            options: ["9/20", "45%", "0.045", "45/100", "4.5%"],
            answers: ["9/20", "45%", "45/100"],
            hint: "0.45 can be expressed as a fraction and percentage."
        },
        {
            question: "Which fractions are equivalent to 0.05?",
            options: ["1/20", "5%", "5/100", "0.5", "1/2"],
            answers: ["1/20", "5%", "5/100"],
            hint: "0.05 is five hundredths."
        },
        {
            question: "Select all equivalents of 1/5",
            options: ["0.2", "20%", "2/10", "0.02", "1/2"],
            answers: ["0.2", "20%", "2/10"],
            hint: "1 divided by 5."
        },
        {
            question: "Which decimals are equivalent to 3/10?",
            options: ["0.3", "30%", "3/100", "0.03", "30%"],
            answers: ["0.3", "30%", "30/100"],
            hint: "3 divided by 10."
        }
    ],
    6: [
        // Grade 6 Questions (20 examples)
        {
            question: "Select all equivalents of 1 1/2",
            options: ["1.5", "150%", "3/2", "0.5", "2"],
            answers: ["1.5", "150%", "3/2"],
            hint: "Convert mixed number to improper fraction and decimal."
        },
        {
            question: "Which decimals are equivalent to 5/8?",
            options: ["0.625", "62.5%", "0.58", "0.6", "5.8"],
            answers: ["0.625", "62.5%"],
            hint: "Divide 5 by 8."
        },
        {
            question: "Select all equivalents of 125%",
            options: ["1.25", "5/4", "1 1/4", "0.125", "12.5%"],
            answers: ["1.25", "5/4", "1 1/4"],
            hint: "125% is more than a whole."
        },
        {
            question: "Which fractions are equivalent to 0.2?",
            options: ["1/5", "20%", "2/10", "0.02", "1/2"],
            answers: ["1/5", "20%", "2/10"],
            hint: "0.2 is two tenths."
        },
        {
            question: "Select all equivalents of 7/4",
            options: ["1.75", "175%", "1 3/4", "0.75", "2"],
            answers: ["1.75", "175%", "1 3/4"],
            hint: "Convert improper fraction to mixed number and decimal."
        },
        {
            question: "Which decimals are equivalent to 9/8?",
            options: ["1.125", "112.5%", "0.98", "1.25", "9.8"],
            answers: ["1.125", "112.5%"],
            hint: "Divide 9 by 8."
        },
        {
            question: "Select all equivalents of 0.375",
            options: ["3/8", "37.5%", "0.35", "0.3", "8/3"],
            answers: ["3/8", "37.5%"],
            hint: "Express 0.375 as a fraction."
        },
        {
            question: "Which fractions are equivalent to 66.6%?",
            options: ["2/3", "0.666", "66.6%", "1/3", "6.6"],
            answers: ["2/3", "0.666", "66.6%"],
            hint: "66.6% is approximately two-thirds."
        },
        {
            question: "Select all equivalents of 1 2/5",
            options: ["1.4", "140%", "7/5", "1.5", "2"],
            answers: ["1.4", "140%", "7/5"],
            hint: "Convert mixed number to decimal and improper fraction."
        },
        {
            question: "Which decimals are equivalent to 4/5?",
            options: ["0.8", "80%", "0.4", "0.5", "8%"],
            answers: ["0.8", "80%"],
            hint: "Divide 4 by 5."
        },
        {
            question: "Select all equivalents of 2 1/2",
            options: ["2.5", "250%", "5/2", "0.25", "25%"],
            answers: ["2.5", "250%", "5/2"],
            hint: "Convert mixed number to improper fraction and decimal."
        },
        {
            question: "Which fractions are equivalent to 0.75?",
            options: ["3/4", "75%", "7.5%", "6/8", "0.075"],
            answers: ["3/4", "75%", "6/8"],
            hint: "0.75 represents three quarters."
        },
        {
            question: "Select all equivalents of 0.125",
            options: ["1/8", "12.5%", "0.0125", "25/200", "1.25%"],
            answers: ["1/8", "12.5%"],
            hint: "0.125 is one eighth."
        },
        {
            question: "Which decimals are equivalent to 7/10?",
            options: ["0.7", "70%", "7/100", "0.07", "7%"],
            answers: ["0.7", "70%"],
            hint: "Divide 7 by 10."
        },
        {
            question: "Select all equivalents of 0.05",
            options: ["1/20", "5%", "5/100", "0.5", "1/2"],
            answers: ["1/20", "5%", "5/100"],
            hint: "0.05 is five hundredths."
        },
        {
            question: "Which fractions are equivalent to 0.666...",
            options: ["2/3", "66.6%", "6/9", "0.6", "1/6"],
            answers: ["2/3", "66.6%", "6/9"],
            hint: "0.666... is a repeating decimal."
        },
        {
            question: "Select all equivalents of 0.2",
            options: ["1/5", "20%", "2/10", "0.02", "1/2"],
            answers: ["1/5", "20%", "2/10"],
            hint: "0.2 is two tenths."
        },
        {
            question: "Which decimals are equivalent to 3/4?",
            options: ["0.75", "75%", "7.5%", "0.7", "6/8"],
            answers: ["0.75", "75%", "6/8"],
            hint: "3 divided by 4."
        },
        {
            question: "Select all equivalents of 0.9",
            options: ["9/10", "90%", "0.09", "9%", "9/100"],
            answers: ["9/10", "90%"],
            hint: "0.9 represents nine tenths."
        },
        {
            question: "Which fractions are equivalent to 1.25?",
            options: ["5/4", "125%", "1 1/4", "0.125", "12.5%"],
            answers: ["5/4", "125%", "1 1/4"],
            hint: "Convert decimal to fraction and percentage."
        },
        {
            question: "Select all equivalents of 0.3",
            options: ["3/10", "30%", "30/100", "0.03", "3%"],
            answers: ["3/10", "30%", "30/100"],
            hint: "0.3 represents three tenths."
        }
    ]
};

// Function to Start the Game
function startGame(grade) {
    gradeLevel = grade;
    score = 0;
    currentQuestionIndex = 0;
    questions = shuffleArray(questionsDatabase[gradeLevel]).slice(0, totalQuestions);
    document.getElementById('grade-level').innerText = 'Grade ' + gradeLevel;
    document.getElementById('score').innerText = 'Score: ' + score;
    document.getElementById('question-number').innerText = 'Question 1 of ' + totalQuestions;
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'flex';
    loadQuestion();
}

// Function to Load a Question
function loadQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
    document.getElementById('options-area').innerHTML = '';
    document.getElementById('submit-button').disabled = true;
    document.getElementById('hint-button').disabled = false;
    document.getElementById('question-number').innerText = 'Question ' + (currentQuestionIndex + 1) + ' of ' + totalQuestions;

    currentQuestion.options.forEach((optionText, index) => {
        let optionBox = document.createElement('div');
        optionBox.classList.add('option-box');
        optionBox.setAttribute('data-option', optionText);

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'option' + index;
        checkbox.value = optionText;
        checkbox.onclick = handleOptionClick;

        let label = document.createElement('label');
        label.htmlFor = 'option' + index;
        label.innerText = optionText;

        optionBox.appendChild(checkbox);
        optionBox.appendChild(label);
        document.getElementById('options-area').appendChild(optionBox);
    });
}

// Function to Handle Option Click
function handleOptionClick(event) {
    let optionBox = event.target.parentElement;
    if (event.target.checked) {
        optionBox.classList.add('selected');
    } else {
        optionBox.classList.remove('selected');
    }
    toggleSubmitButton();
}

// Function to Toggle Submit Button
function toggleSubmitButton() {
    let selected = document.querySelectorAll('.option-box.selected');
    document.getElementById('submit-button').disabled = selected.length === 0;
}

// Function to Submit the Answer
function submitAnswer() {
    let currentQuestion = questions[currentQuestionIndex];
    let selectedOptions = Array.from(document.querySelectorAll('.option-box.selected'))
        .map(optionBox => optionBox.getAttribute('data-option'));

    // Check if the selected options match the answers
    let isCorrect = arraysEqual(selectedOptions.sort(), currentQuestion.answers.sort());

    // Update Score
    if (isCorrect) {
        score += 1;
        document.getElementById('score').innerText = 'Score: ' + score;
    }

    // Show Feedback
    showFeedback(isCorrect);
}

// Function to Show Feedback Popup
function showFeedback(isCorrect) {
    let feedbackPopup = document.getElementById('feedback-popup');
    let feedbackIcon = document.getElementById('feedback-icon');
    let feedbackMessage = document.getElementById('feedback-message');

    if (isCorrect) {
        feedbackIcon.innerText = '✔️';
        feedbackIcon.style.color = 'green';
        feedbackMessage.innerText = 'Correct!';
    } else {
        feedbackIcon.innerText = '❌';
        feedbackIcon.style.color = 'red';
        feedbackMessage.innerText = 'Incorrect.';
    }

    feedbackPopup.style.display = 'flex';
}

// Function to Retry the Question
function retryQuestion() {
    document.getElementById('feedback-popup').style.display = 'none';
    loadQuestion();
}

// Function to Proceed to Next Question
function nextQuestion() {
    document.getElementById('feedback-popup').style.display = 'none';
    currentQuestionIndex += 1;
    if (currentQuestionIndex < totalQuestions) {
        loadQuestion();
    } else {
        endGame();
    }
}

// Function to End the Game
function endGame() {
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('end-screen').style.display = 'flex';
    document.getElementById('final-score').innerText = 'Your final score is: ' + score + ' out of ' + totalQuestions;
}

// Function to Restart the Game
function restartGame() {
    document.getElementById('end-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'flex';
}

// Function to Show Hint
function showHint() {
    let currentQuestion = questions[currentQuestionIndex];
    alert('Hint: ' + currentQuestion.hint);
    document.getElementById('hint-button').disabled = true;
}

// Utility Function to Shuffle an Array
function shuffleArray(array) {
    let newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Utility Function to Compare Two Arrays
function arraysEqual(a1, a2) {
    if (a1.length !== a2.length) return false;
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i]) return false;
    }
    return true;
}
