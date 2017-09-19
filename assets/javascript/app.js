// -------------------- I. Global Variables + Functions --------------------
var qa = [{
        question: "Who won NBA's Most Valuable Player during the 2016-2017 season?",
        options: ["Russell Westbrook", "James Harden", "Kevin Durant", "Lebron James"],
        answer: "Russell Westbrook",
        image: "assets/images/westbrook.gif"

    },
    {
        question: "What NBA hoopster is known as the \"Baby-Faced Assasin\"?",
        options: ["Stephen Curry", "Kyrie Irving", "Lonzo Ball", "Devin Booker"],
        answer: "Stephen Curry",
        image: "assets/images/curry.gif"
    },
    {
        question: "Who was the last team to win 3 consecutive championships?",
        options: ["Los Angeles Lakers", "Chicago Bulls", "Boston Celtics", "Golden State Warriors"],
        answer: "Los Angeles Lakers",
        image: "assets/images/lakers.gif"
    },
    {
        question: "Which of the following dances was popularized by star of the Houston Rockets, James Harden?",
        options: ["Swag Cooking", "The Dab", "The Quan", "Square Dancing"],
        answer: "Swag Cooking",
        image: "assets/images/harden.gif"
    },
    {
        question: "In pop culture, which basketball family is considered as the \"Kardashians\" of the NBA?",
        options: ["Ball Family", "Curry Family", "[Lebron] James Family", "Jelly Fam"],
        answer: "Ball Family",
        image: "assets/images/ballfamily.gif"
    }
];
var answerArr = ["Russell Westbrook", "Stephen Curry", "Los Angeles Lakers", "Swag Cooking", "Ball Family"];
// Prevents the clock from being sped up unnecessarily
var clockRunning = false;
// Keeps track of question displayed
var count = 0;
// Holds timeout/interval functions
var startTimeout;
var nextQTimeout;
var intervalId;

// -------------------- II. Functions --------------------
// Stopwatch object
var stopwatch = {
    time: 15,
    reset: function() {
        stopwatch.time = 15;
        $(".timer").html("00:15")
    },
    start: function() {
        if (!clockRunning) {
            intervalId = setInterval(stopwatch.clock, 1000);
            clockRunning = true;
        }
    },
    stop: function() {
        clearInterval(intervalId);
        clockRunning = false;
    },
    clock: function() {
        stopwatch.time--;
        var converted = stopwatch.timeConverter(stopwatch.time);
        $(".timer").html(converted);
    },
    timeConverter: function(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }
};

//Fisher Yates Shuffle method (shuffles questions or options when called)
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
//Shuffle Questions
var qaShuffled = qa.shuffle();
//Shuffle options
var aShuffled;

//Displays questions
function displayQuestion() {
    //Shuffle options
    aShuffled = qaShuffled[count].options.shuffle();
    $('.question').html("<h2>" + qaShuffled[count].question + "</h2>");
    $('.answerA').html("<button>A: <span class='select'>" + aShuffled[0] + "</span></button>");
    $('.answerB').html("<button>B: <span class='select'>" + aShuffled[1] + "</span></button>");
    $('.answerC').html("<button>C: <span class='select'>" + aShuffled[2] + "</span></button>");
    $('.answerD').html("<button>D: <span class='select'>" + aShuffled[3] + "</span></button>");
};

//Displays image of correct choice
function displayImage() {
    $('#image-holder').html("<img src='" + qaShuffled[count].image + "' width='400px'>");
};

// Displays correct answer screen
function displayCorrect() {
    clearTimeout(startTimeout);
    displayImage();
    nextQTimeout = setTimeout(nextQuestion, 5000);
    $('.trivia').hide();
    $('.imageContainer').show();
    $('.imageContent').show().html("<h2>Correct!</h2>" + "<h3>You Answered: " + qaShuffled[count].answer + "</h3>");
    // displayImage();
    // nextQTimeout = setTimeout(nextQuestion, 5000);
}

// Displays incorrect answer screen
function displayIncorrect() {
    clearTimeout(startTimeout);
    displayImage();
    nextQTimeout = setTimeout(nextQuestion, 5000);
    $('.trivia').hide();
    $('.imageContainer').show();
    $('.imageContent').show().html("<h2>Nope!</h2>" + "<h3>The Correct Answer was: " + qaShuffled[count].answer + "</h3>");
    // displayImage();
    // nextQTimeout = setTimeout(nextQuestion, 5000);
}

// Displays out of time answer screen
function displayOutOfTime() {
    displayImage();
    nextQTimeout = setTimeout(nextQuestion, 5000);
    clearTimeout(startTimeout);
    $('.trivia').hide();
    $('.imageContainer').show();
    $('.imageContent').show().html("<h2>Out of Time!</h2>" + "<h3>The Correct Answer was: " + qaShuffled[count].answer + "</h3>");
    // displayImage();
    // nextQTimeout = setTimeout(nextQuestion, 5000);
}

function nextQuestion() {
    count++;
    stopwatch.reset();
    startGame();
    $('.trivia').show();
    $('.imageContainer').hide();
};

function startGame() {
    displayQuestion(count);
    startTimeout = setTimeout(displayOutOfTime, 15000);
    stopwatch.start();
};

// -------------------- III. Main Process --------------------
// Display the page with the start button
$(document).ready(function() {

    // Click on button to begin game
    $('#start').on('click', function() {
        startGame(count);
        $('#buttons').hide();
    });


    // Determines whether answer is correct or wrong
    $(document).on('click', '.select', function() {
        var userSelect = $(this).html();
        console.log(userSelect, "Choice");
        console.log(answerArr.indexOf(userSelect), "IndexOf");
        if (answerArr.indexOf(userSelect) >= 0) {
            displayCorrect();
        } else {
            displayIncorrect();
        }
    });


    // Click the start button 

    // Randomize the array

    // Display the question and options

    // Set timer for 30 seconds

    // If you guess the correct answer in 30 seconds, up the win count, display image, display array[1] question and options

    // If you guess the wrong options, display that you lost, and image of the new correct answer

    // The timer can run out, you lose, display the correct answer

    // Reset the timer

    // Go to the next question

    // Repeat till last question

    // Have a button to reset the game

    //



});
