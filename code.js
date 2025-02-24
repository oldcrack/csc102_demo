// Function that runs when form is submitted
function playGame() {
    // Gets the word
    let word = document.getElementById('word').value;
    
    // Gets the length of the word
    let length = word.length;

    // Calculates score per letter
    let score = length *10;
    
    // Generate random bonus points
    let bonus = Math.floor(Math.random() * 5) + 1;
  
    // Calculate the total score based on word length and bonus points
    let totalScore = score + bonus;
    
    // Get result div
    let resultDiv = document.getElementById('result');
    
    // Display different messages based on the length of the word
    if (length < 5) {
        resultDiv.innerHTML = "Short word! Score: "+ totalScore + 
                            "<br>Each letter = 10 points. Try a longer word to score more points!";
    
    // Displays game result, displaying the score, how many points for the word length, and the random bonus points added
    } else {
        resultDiv.innerHTML = "Good word! Score: "+ totalScore + 
                            "<br>Word points: "+ score +
                            "<br>Bonus points: "+ bonus;
    }
    
    // Prevent form submission
    return false;
}