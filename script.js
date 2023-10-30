
var inputField = document.querySelector("#input1");
var addButton = document.querySelector(".btn1");
var headoutput = document.querySelector(".head2");
headoutput.classList.add("heading");
var attemptoutput = document.querySelector(".attempt1");
var number = Math.floor(Math.random() * 100);
var attempts = 5;
attemptoutput.innerHTML = "<h3>You have " + attempts + " attempts left.</h3>";

addButton.addEventListener("click", function () {
    var inputValue = parseInt(inputField.value);
    if (attempts > 0) {
        if (inputValue == number) {
            headoutput.innerHTML = "<h2>You guessed correctly, Your number was: " + number;
            headoutput.style.color="green"
        } else if (inputValue > number) {
            headoutput.innerHTML = "<h2>Your number is lower.<b></h2>";
            attempts--;
        } else if (inputValue < number) {
            headoutput.innerHTML = "<h2><b>Your number is higher.<b></h2>";
            attempts--;
        }

        inputField.value = "";
        attemptoutput.innerHTML = "<h3>Remaining lives :" + attempts + " </h3>";
    } else {
        headoutput.innerHTML = "<h2>Game over. The correct number was: " + number + "</h2>";
        
    }
});

inputField.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        e.preventDefault();
        addButton.click();
    }
});
function refreshPage() {
    // Using location.reload()
    location.reload();
  
    // Using location.href
    // location.href = location.href;
  }
  