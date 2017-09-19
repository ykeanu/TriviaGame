// i. Global Variables + Functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var qa = [{
        question: "Who won NBA's Most Valuable Player during the 2016-2017 season?",
        answers: ["Russell Westbrook", "Sunny", "Raining", "Windy"]
    },
    {
        question: "What NBA hoopster is known as the \"Baby-Faced Assasin\"?",
        answers: ["Stephen Curry", "Answer 2.2", "Answer 2.3", "Answer 2.4"]
    },
    {
        question: "Who was the last team to win 3 consecutive championships?",
        answers: ["Los Angeles Lakers", "Answer 3.2", "Answer 3.3", "Answer 3.4"]
    },
    {
        question: "Which of the following dances was popularized by Houston Rocket star, James Harden?",
        answers: ["Swag Cooking", "Dabbing", "Answer 4.3", "Answer 4.4"]
    },
    {
        question: "In pop culture, which basketball family is considered to be the \"Kardashians\" of the NBA?",
        answers: ["Ball Family", "Curry Family", "[Lebron] James Family", "Jelly Fam"]
    }
];

var answerArr = ["Russell Westbrook", "Stephen Curry", "Los Angeles Lakers", "Swag Cooking", "Ball Family"];
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
}

//Displays questions
function displayQuestion(Q) {
    // for (var i = 0; i < 5; i++) {
    //Shuffle answers
    // aShuffled = qaShuffled[0].answers.shuffle();
    $('.question').html("<h2>" + qaShuffled[Q].question + "</h2>");
    $('.answerA').html("<button>A: <span class='options'>" + aShuffled[0] + "</span></button>");
    $('.answerB').html("<button>B: <span class='options'>" + aShuffled[1] + "</span></button>");
    $('.answerC').html("<button>C: <span class='options'>" + aShuffled[2] + "</span></button>");
    $('.answerD').html("<button>D: <span class='options'>" + aShuffled[3] + "</span></button>");
    // }
};


//Shuffle Questions
var qaShuffled = qa.shuffle();
//Shuffle Answers
var aShuffled = qaShuffled[0].answers.shuffle();

var test;


// +++++++++
// function stopWatch() {

//     }

// iii. Main Process ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Display the page with the start button
$(document).ready(function() {

    //Click even that begins game

    // if (userinput == array [i])


    displayQuestion(0);

    function startGame() {
        setInterval(displayImage)
    }

    // ++++++++++
    // stopWatch();

    $(".options").on('click', function() {
        var userChoice = $(this).html();
        console.log(userChoice, "Choice");
        console.log(answerArr.indexOf(userChoice), "IndexOf");
        if (answerArr.indexOf(userChoice) >= 0) {
            alert("Correct!");
        } else {
            console.log("Try again.");
        }



        // console.log($(this).html());
        // test = $(this).html();
        // console.log(test, "INSIDE")

    });



    //TESTING
    // console.log(test, "OUTSIDE");

    // for (var i=0; i < 4; i++) {
    // if (qa[i].question != oldQ)    
    // function displayQ() {
    //     $('.question').html("<h2>" + qa[0].question + "</h2>");
    //     $('.answerA').html("<button>A: " + newArr[0] + "</button>");
    //     $('.answerB').html("<button>B: " + newArr[1] + "</button>");
    //     $('.answerC').html("<button>C: " + newArr[2] + "</button>");
    //     $('.answerD').html("<button>D: " + newArr[3] + "</button>");
    // };

    // };




    // Playing around with loop
    // for (i = 0; i < qa[0].answers.length; i++ ){
    //     $("#q1").append("<button class='test" + i + "'>" + qa[0].answers[i] + "</button>");
    // }

    // Shuffled array
    // var newArr = qa[0].answers.shuffle();
    // $("#q1").on('click', function(){
    //     console.log(this);
    // });

    // TESTING
    // console.log (qa[0].answers[1]);
    // console.log(qa[0].answers[0]);
    // console.log(newArr);
    // console.log(newArr[0]);




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