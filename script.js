
function hide_buttons() {
    document.getElementById("choice1_wrapper").style.display = "none";
    document.getElementById("choice2_wrapper").style.display = "none";
    document.getElementById("choice3_wrapper").style.display = "none";
}

function update1(desc, choice1, choice1_link) {
    hide_buttons()

    // current description
    document.getElementById("desc").innerHTML = desc;

    // Choice 1
    document.getElementById("choice1").innerHTML = choice1;
    document.getElementById("choice1").onclick = choice1_link;
    document.getElementById("choice1_wrapper").style.display = "block";

}

function update2(desc, choice1, choice1_link, choice2, choice2_link) {
    hide_buttons();

    // current description
    document.getElementById("desc").innerHTML = desc;

    // Choice 1
    document.getElementById("choice1").innerHTML = choice1;
    document.getElementById("choice1").onclick = choice1_link;
    document.getElementById("choice1_wrapper").style.display = "block";

    // Choice 2
    document.getElementById("choice2").innerHTML = choice2;
    document.getElementById("choice2").onclick = choice2_link;
    document.getElementById("choice2_wrapper").style.display = "block";

}

function update3(desc, choice1, choice1_link, choice2, choice2_link, choice3, choice3_link) {
    hide_buttons();

    // current description
    document.getElementById("desc").innerHTML = desc;

    // Choice 1
    document.getElementById("choice1").innerHTML = choice1;
    document.getElementById("choice1").onclick = choice1_link;
    document.getElementById("choice1_wrapper").style.display = "block";

    // Choice 2
    document.getElementById("choice2").innerHTML = choice2;
    document.getElementById("choice2").onclick = choice2_link;
    document.getElementById("choice2_wrapper").style.display = "block";

    // Choice 3
    document.getElementById("choice3").innerHTML = choice3;
    document.getElementById("choice3").onclick = choice3_link;
    document.getElementById("choice3_wrapper").style.display = "block";

}

function guilty1() {
    desc = "You confessed to your crimes and you were found guilty in the murder of Melina, \
            the Princess of the Lands Between. You will be publicly executed effective immediately."


    choice1 = "Reset";
    update1(desc, choice1, start);
}

function guilty2() {
    desc = "You were found guilty in the murder of Melina, the Princess of the Lands Between. \
            You will be publicly executed effective immediately. \
            George and Tommy conspired against you in order to escape death "

    choice1 = "Reset";
    update1(desc, choice1, start);
}

function innocent1() {
    desc = "You were found to be innocent in the murder of Melina, the Princess of the Land Between. \
            You conspired with George to ensure your freedom; but at the cost of Tommy's life."

    choice1 = "Reset";
    update1(desc, choice1, start);
}

function innocent2() {
    desc = "You were found to be innocent in the murder of Melina, the Princess of the Land Between. \
            You conspired with Tommy to ensure your freedom; but at the cost of George's life."

    choice1 = "Reset";
    update1(desc, choice1, start);
}

function start() {
    desc = "You and two others have been detained in a murder investigation.\
            The Knights of the Land Between raided your farm, covered your head, and have thrown \
            you in cold cell beneath the Castle of Thorns \
            their are two other alleged perpetrators who are placed alone in cells to your left and right. \
            <br><br> What will you do?"
    choice1 = "Wait it out."
    choice2 = "Try to talk to one of the other suspects."
    choice3 = "Confess to your crimes."

    update3(desc, choice1, wait, choice2, talk, choice3, guilty1);
}

function wait() {
    desc = "You decided to wait it out... what is taking so long? \
            The other alleged suspects are getting agitated and start to try and get your attention."
    choice1 = "Wait it out some more."
    choice2 = "Talk with one of the suspects."

    update2(desc, choice1, guilty2, choice2, talk);
}

function talk() {
    desc = "You decided to try and get some information about the murder. \
            Try and talk to one of the other suspects to see what they know."
    choice1 = "Talk with the suspect to your left."
    choice2 = "Talk with the suspect to your right."

    update2(desc, choice1, left, choice2, right);
}

function left() {
    desc = "You decided to talk to the suspect to your left. He calls himself George. \
            He talks a bit about his wife and kids who are worried for him. \
            But his demeanor qucikly changes. He asks how you killed Melina, \
            the daughter of the King."
    choice1 = "With a knife."
    choice2 = "Deny his alligations."
    choice3 = "Talk with the suspect to your right."

    update3(desc, choice1, guilty1, choice2, left1, choice3, right);
}

function left1() {
    desc = "You claim you didn't murder the princess."
    choice1 = "Tell him you were lying. You're the murderer."
    choice2 = "Cooperate with George to put Tommy under the guillotine."

    update2(desc, choice1, guilty1, choice2, innocent1);
}

function right() {
    desc = "You decided to talk to the suspect to your right. He says his name is Tommy. \
            He talks about his previous encounters with the Knights of the Lands Between. \
            He calls them corrupt scumbags who will do anything for a dime. \
            He then quietly whispers to you so the other suspect won't hear. \
            He believes that George is the one who killed Melina."
    choice1 = "Tell him he's wrong. You're the murderer."
    choice2 = "Cooperate with Tommy to put George under the guillotine."

    update2(desc, choice1, guilty1, choice2, innocent2);
}
