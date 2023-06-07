var highscore = document.querySelector("#Highscore");
var timerT = document.querySelector(".timertext");
var timerN = document.querySelector(".timernumbercount");
var QuizSBtn = document.querySelector(".Quiz-start");
var hidden = document.querySelector(".hidden");
var question = document.querySelector(".question");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");
var Title = document.querySelector("#T1");
var InitalsPage = document.querySelector(".InitialsPage");
var InitialNameBtn = document.querySelector("#InitialNameSubmit");
var InitialNameText = document.querySelector("#Initialsname");
var InitialPreText = document.querySelector("#InitialsPreText");
var BackClear = document.querySelector(".BackClear");
var Back = document.querySelector("#Back");
var Clear = document.querySelector("#Clear");
let score = 0;
var InitialsArr = [];
var ScoreArr = [];
// all varible listed 





// on document load hides any visible text/buttons from later pages
// then grabs and stores all local name and scores into varibles 
document.addEventListener("DOMContentLoaded", function () {
    InitialNameBtn.style.display = "none";
    InitialNameText.style.display = "none";
    InitialPreText.style.display = "none";
    Back.style.display = "none";
    Clear.style.display = "none";
    var storedinitials = JSON.parse(localStorage.getItem("initials"));
    var storedscore = JSON.parse(localStorage.getItem("score"));
    InitialsArr = storedinitials;
    ScoreArr = storedscore;
    console.log(InitialsArr);
    console.log(ScoreArr);
});




// function for the imer to count down to 0 if it goes too 0 it grabs 
// current score and runs the hs function
function countercountdown() {
    let count = parseInt(timerN.textContent);
    const countdown = setInterval(() => {
        count--;
        if (count < 0) {
            clearInterval(countdown);
            HSNameInput(score);
        } else {
            timerN.textContent = count;
        }
    }, 1000);
    QuizSBtn.style.display = "none";
    hidden.style.display = "inline";
}




// from question 1-5 are just rewording of questions and answers while adding or subtracting from 
// the score that is passed along starting with 0 
// exception of 5 also calls the hs function

function q1() {
    question.textContent = "What's the condition in an if/else statement enclosed with?";
    a1.textContent = "1.String";
    a2.textContent = "2.Boolean";
    a3.textContent = "3.Alert";
    a4.textContent = "4.Numbers";
    a1.addEventListener("click", function () {
        score--;
        q2(score);
    })
    a2.addEventListener("click", function () {
        score++;
        q2(score);
    })

    a3.addEventListener("click", function () {
        score--;
        q2(score);
    })

    a4.addEventListener("click", function () {
        score--;
        q2(score);
    })
}


function q2(score) {
    question.textContent = ("the condition in and if / else staement is enclosed with ___?")
    a1.textContent = ("1.quotes")
    a2.textContent = ("2.curly brackets")
    a3.textContent = ("3.parentheses")
    a4.textContent = ("4.square brackets")
    a1.addEventListener("click", function () {
        score--;
        q3(score);
    })
    a2.addEventListener("click", function () {
        score--;
        q3(score);
    })
    a3.addEventListener("click", function () {
        score++;
        q3(score);
    })
    a4.addEventListener("click", function () {
        score--;
        q3(score);
    })
}

function q3(score) {
    question.textContent = ("Arrays in Javascript can be used to store ?")
    a1.textContent = ("1.number and strings")
    a2.textContent = ("2.booleans")
    a3.textContent = ("3.other arrays")
    a4.textContent = ("4.all of the above")
    a1.addEventListener("click", function () {
        score--;
        q4(score);
    })

    a2.addEventListener("click", function () {
        score--;
        q4(score);
    })

    a3.addEventListener("click", function () {
        score--;
        q4(score);
    })

    a4.addEventListener("click", function () {
        score++;
        q4(score);
    })
}



function q4(score) {
    question.textContent = ("string values must be enclosed within ___ when being assigned to a varibles?")
    a1.textContent = ("1.commas")
    a2.textContent = ("2.curly brackets")
    a3.textContent = ("3.quotes")
    a4.textContent = ("4.parentheses")
    a1.addEventListener("click", function () {
        score--;
        q5(score);
    })

    a2.addEventListener("click", function () {
        score++;
        q5(score);
    })

    a3.addEventListener("click", function () {
        score--;
        q5(score);
    })

    a4.addEventListener("click", function () {
        score--;
        q5(score);
    })
}

function q5(score) {
    question.textContent = (" A very useful tool used during development and debugging for printing content to debugger is:")
    a1.textContent = ("1.javascript")
    a2.textContent = ("2.terminal/bash")
    a3.textContent = ("3.for loop")
    a4.textContent = ("4.console log")
    a1.addEventListener("click", function () {
        score--;
        HSNameInput(score);
    })

    a2.addEventListener("click", function () {
        score--;
        HSNameInput(score);
    })

    a3.addEventListener("click", function () {
        score++;
        HSNameInput(score);
    })

    a4.addEventListener("click", function () {
        score--;
        HSNameInput(score);
    })
}






//  hides all uneeded questions text, removes none style from initals input and related text
// also displays score gained 
function HSNameInput(score) {
    Title.textContent = ("All Done!")
    question.textContent = ("Your final score is  ") + score + (".");
    timerT.style.display = "none";
    timerN.style.display = "none";
    a1.style.display = "none";
    a2.style.display = "none";
    a3.style.display = "none";
    a4.style.display = "none";
    InitialNameBtn.style.display = "";
    InitialNameText.style.display = "";
    InitialPreText.style.display = "";

    //  storing the gained initials text and score to local storage 
    InitialNameBtn.addEventListener("click", function () {
        var initials = InitialNameText.value;
        InitialsArr = InitialsArr || [];
        ScoreArr = ScoreArr || [];
        InitialsArr.push(initials);
        ScoreArr.push(score);
        localStorage.setItem("score", JSON.stringify(ScoreArr));
        localStorage.setItem("initials", JSON.stringify(InitialsArr));

        FinalHSPage();
        displayHighScores();
    });
}

// hides all uneeded questions text if the link is clicked then  displays hidden buttons and changes title content
function FinalHSPage() {
    timerT.style.display = "none";
    timerN.style.display = "none";
    QuizSBtn.style.display = "none";
    a1.style.display = "none";
    a2.style.display = "none";
    a3.style.display = "none";
    a4.style.display = "none";
    Title.textContent = ("Highscore");
    Back.style.display = "";
    Clear.style.display = "";
    question.style.display = "none";
    InitialNameBtn.style.display = "none";
    InitialNameText.style.display = "none";
    InitialPreText.style.display = "none";
}

// sorts score array by top 5 scores then grabs the value of the score and the name thats in the mirroring array 
// and appends them to the page with some styles
function displayHighScores() {
    const scoreC = ScoreArr.sort(function(a, b) {return b - a;  }).slice(0, 5);
    const ArrayLength = scoreC.length;
    for (let i = 0; i < ArrayLength; i++) {
        InitalsPage.style.display = 'inline';
        BackClear.style.marginTop = '5vh';
        const score = ScoreArr[i];
        console.log(score);
        let Scoreli = document.createElement("ol");
        Scoreli.textContent = `${InitialsArr[i]} ${ScoreArr[i]}`;
        InitalsPage.appendChild(Scoreli);

    }
    
}


//add event listeners for each button 
highscore.addEventListener("click", function () {
    FinalHSPage();
    displayHighScores();
});

Clear.addEventListener("click", function() {
    InitalsPage.innerHTML = "";
    localStorage.clear();

});


Back.addEventListener("click", function() {
    location.reload();
});


QuizSBtn.addEventListener("click", function () {
    countercountdown();
    q1();
});




// answers if needed


// <!-- q1= commonly used data types do not include?
// A= string, boolean(C) , alert, numbers -->

// <!-- q2= the condition in and if / else staement is enclosed with ___?
// A= quotes, curly brackets , parenthases(C), square brackets -->

// <!-- q3= Arrays in Javascript can be used to store ?
// A= number and strings, booleans , other arrays, all of the above (C) -->

// <!-- q4= string values must be enclosed within ___ when being assigned to a varibles?
// A= commas, curly brackets(C) , quotes, parentheses-->

// <!-- q5= A very useful tool used during development and debugging for printing content to debugger is:
// A= javascript, terminal/bash , for loops (C), console log -->