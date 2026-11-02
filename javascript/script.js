function setGreeting() {

    let now = new Date(); //built in script
    console.log("I am printing time: " + now.getHours());

    let hours = now.getHours();
    let greeting = "";

    if (hours < 12) {
        greeting = "Good Morning!";
    }
    else if (hours < 18) {
        greeting = "Good Afternoon!";
    }
    else {
        greeting = "Good Night!";
    }

    console.log(greeting);
    document.getElementById("greetingOutput").textContent = greeting;
}


window.onload = function () {
    setGreeting();
}

function setButtonText(){
    document.getElementById("buttonClickText").textContent="WOW THAT WAS SO COOL THAT WAS SO AWESOME WOW";
}

function setButtonTime(){
    let now =new Date();
    document.getElementById("buttonClickTime").textContent="today is " + now.toLocaleDateString();
}

function addNumbers () {
    let num1 = document.getElementById("numl").value;
    let num2 = document.getElementById("numl2").value;

    document.getElementById("sum").textContent= "the sum is: " + (parseInt(num1) + parseInt(num2));
}

function getStringLength() {
    let text = document.getElementById("lengthString").value;
    document.getElementById("StringLengthOutput").textContent= text + " has " + text.length +" charecters.";
}

function togglePassword() {
    let passwordButton = document.getElementById("password button");
    if (passwordButton.checked == true)
    {
        document.getElementById("password area").type = "text";
    }
    else
    {
        document.getElementById("password area").type = "password";
    }
}

function toggleText() {
    document.getElementById("changinText").style.fontSize="100px"
} 

let toggle =false;
function disaperaerTheText() {
    if (toggle)
    {
    document.getElementById("disaperingText").hidden = true;
    toggle = ! toggle;
}
else {
    document.getElementById("disaperingText").hidden = false;
    toggle = ! toggle;
}
}

