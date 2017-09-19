// i. Global Variables + Functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var qa = [{
        question: "Who won NBA's Most Valuable Player during the 2016-2017 season?",
        answers: ["Russell Westbrook", "James Harden", "Kevin Durant", "Lebron James"]
    },
    {
        question: "What NBA hoopster is known as the \"Baby-Faced Assasin\"?",
        answers: ["Stephen Curry", "Kyrie Irving", "Lonzo Ball", "Devin Booker"]
    },
    {
        question: "Who was the last team to win 3 consecutive championships?",
        answers: ["Los Angeles Lakers", "Chicago Bulls", "Boston Celtics", "Golden State Warriors"]
    },
    {
        question: "Which of the following dances was popularized by star of the Houston Rockets, James Harden?",
        answers: ["The Swag Cook", "The Dab", "The Quan", "Square Dancing"]
    },
    {
        question: "In pop culture, which basketball family is considered to be the \"Kardashians\" of the NBA?",
        answers: ["Ball Family", "Curry Family", "[Lebron] James Family", "Jelly Fam"]
    }
];

var answerArr = ["Russell Westbrook", "Stephen Curry", "Los Angeles Lakers", "The Swag Cook", "Ball Family"];
// var oldQ[];
// var arrayofAnswers[];
var count = 0;

// ii. Functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Fisher Yates Shuffle method (shuffles questions or answers when called)
Array.prototype.shuffle = function() {
    var i = this.length,
        j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
    return this;
};

//Displays correct answers image
function displayImage() {
    $('#image-holder').html("<img src='assets/images/" + imageArr[count] + ".png' width='400px'>");
};

//Displays questions
function displayQuestion(Q) {
    $('.question').html("<h2>" + qaShuffled[Q].question + "</h2>");
    $('.answerA').html("<button>A: <span class='options'>" + aShuffled[0] + "</span></button>");
    $('.answerB').html("<button>B: <span class='options'>" + aShuffled[1] + "</span></button>");
    $('.answerC').html("<button>C: <span class='options'>" + aShuffled[2] + "</span></button>");
    $('.answerD').html("<button>D: <span class='options'>" + aShuffled[3] + "</span></button>");
};

//Shuffle Questions
var qaShuffled = qa.shuffle();
//Shuffle Answers
var aShuffled = qaShuffled[0].answers.shuffle();


// +++++++++
// function stopWatch() {

// };

function startGame (Q) {
    displayQuestion(Q);
    // setInterval(displayImage, 30000)
};


// iii. Main Process ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Display the page with the start button
$(document).ready(function() {

    // Click on button to begin game
    $('#start').on('click', function () {
        startGame(count);
    });
    // displayQuestion(0);

    // function startGame() {
    //     setInterval(displayImage, 30000)
    // }

    // // ++++++++++
    // stopWatch();


    // Determines whether answer is correct or wrong
    $(document).on('click', '.options', function() {
        var userSelect = $(this).html();
        console.log(userSelect, "Choice");
        console.log(answerArr.indexOf(userSelect), "IndexOf");
        if (answerArr.indexOf(userSelect) >= 0) {
            alert("Correct!");
        } else {
            console.log("Try again.");
        }



    });



    //TESTING
    // console.log(test, "OUTSIDE");



    // Click the start button 

    // Randomize the array

    // Display the question and answers

    // Set timer for 30 seconds

    // If you guess the correct answer in 30 seconds, up the win count, display image, display array[1] question and answers

    // If you guess the wrong answers, display that you lost, and image of the new correct answer

    // The timer can run out, you lose, display the correct answer

    // Reset the timer

    // Go to the next question

    // Repeat till last question

    // Have a button to reset the game

    //


    // TEST ONE






});