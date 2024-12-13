const questions = [
    {
        question: "Mert mutlu olsun mu?",
        answers: ["Evet", "Hayır",],
        correct: 0
    },
    {
        question: "Barışalım mı?",
        answers: ["Evet", "Hayır"],
        correct: 0
    },
    {
        question: "Emin misin?",
        answers: ["Evet", "Hayır"],
        correct: 1
    },
    {
        question: "İyi düşün",
        answers: ["Mert hayır diyorum", "Tamam düşündüm ."],
        correct: 1
    },
    {
        question: "Barışalım o zaman",
        answers: ["Mert hayır !!", "OLURRR<3<3<3"],
        correct: 1
    },
];

let currentQuestionIndex = 0;
let userAnswers = [];
let totalScore = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const continueButton = document.getElementById("continue-button");

    // Soruyu ve cevapları yükle
    questionElement.textContent = questions[currentQuestionIndex].question;
    answersElement.innerHTML = "";
    questions[currentQuestionIndex].answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersElement.appendChild(button);
    });

    continueButton.style.display = "none"; 
}

function selectAnswer(selectedIndex) {
    const continueButton = document.getElementById("continue-button");
    continueButton.style.display = "block";

 
    userAnswers[currentQuestionIndex] = selectedIndex;

    
    const answerButtons = document.querySelectorAll("#answers button");
    answerButtons.forEach((button, index) => {
        button.classList.remove("selected"); 
        if (index === selectedIndex) {
            button.classList.add("selected"); 
        }
    });
}

document.getElementById("continue-button").onclick = () => {
    
    const selectedAnswer = userAnswers[currentQuestionIndex];
    let scoreForQuestion = 0; 

    if (selectedAnswer === questions[currentQuestionIndex].correct) {
        totalScore += 60; // Doğru cevap
        scoreForQuestion = 60; 
    } else {
        totalScore -= 50; // Yanlış cevap
        scoreForQuestion = -50; 
    }

    currentQuestionIndex++;
    if (currentQuestionIndex === 1 && selectedAnswer === 1) {
        currentQuestionIndex++; 
    }
    if (currentQuestionIndex === 2 && selectedAnswer === 0) {
        currentQuestionIndex++;
        currentQuestionIndex++; 
    }
    if (currentQuestionIndex === 3 && selectedAnswer === 1) {
        currentQuestionIndex++;
         
    }
    if (currentQuestionIndex === 4 && selectedAnswer === 0) {
        currentQuestionIndex++;
         
    }
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        
        document.body.style.transition = "background-color 0.5s";
        document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16); // Rastgele renk
    } else {
        displayResults(scoreForQuestion); 
    }
};


function displayResults(lastScore) {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "<h2>Tamamlandı!</h2>";
    
    userAnswers.forEach((answer, index) => {
        const questionText = questions[index].question;
        const correctAnswer = questions[index].answers[questions[index].correct];
        const userAnswer = questions[index].answers[answer];
        
        const resultText = document.createElement("p");
        resultText.textContent = `${questionText} - Cevabın: ${userAnswer} | Doğru Cevap: ${correctAnswer} | Puan: ${answer === questions[index].correct ? 60 : -50}`;
        quizContainer.appendChild(resultText);
    });


    const scoreText = document.createElement("h3");
    scoreText.textContent = `Toplam Puan: ${totalScore}`;
    quizContainer.appendChild(scoreText);
}


function displayResults(lastScore) {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "<h2>Tamamlandı!</h2>";
    
    userAnswers.forEach((answer, index) => {
        const questionText = questions[index].question;
        const correctAnswer = questions[index].answers[questions[index].correct];
        const userAnswer = questions[index].answers[answer];
        
        const resultText = document.createElement("p");
        resultText.textContent = `${questionText} - Cevabın: ${userAnswer} | Doğru Cevap: ${correctAnswer} | Puan: ${answer === questions[index].correct ? 60 : -50}`;
        quizContainer.appendChild(resultText);
    });

    const scoreText = document.createElement("h3");
    scoreText.textContent = `Toplam Puan: ${totalScore}`;
    quizContainer.appendChild(scoreText);


    const buttonContainer = document.createElement("div");
    buttonContainer.style.marginTop = "20px"; 

    const button1 = document.createElement("button");
    button1.textContent = "Whatsapp";
    button1.onclick = () => {
        window.location.href = "https://wa.me/qr/VR3WRWTC2S7OB1";
    };
    buttonContainer.appendChild(button1);

    const button2 = document.createElement("button");
    button2.textContent = "Telefon";
    button2.onclick = () => {
        window.location.href = "tel:+905446683345";
    };
    buttonContainer.appendChild(button2);

    quizContainer.appendChild(buttonContainer);
}






loadQuestion();
