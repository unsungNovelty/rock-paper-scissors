// Loads the entire JS as the page is loaded. This makes it possible for JS and HTML to be in sync.
window.onload = function() {

    // Event listeners only assign the events. So it needs to be called first.  
    assignEventListener();

    // Function which will randomly tell either rock paper or scissors.
    function computerSelect() {
        let options = ['Rock', 'Paper', 'Scissors'];
        let computerCalculation = Math.floor(Math.random() * (options.length) );
        computerSelection = options[computerCalculation];
        return computerSelection;
    }

    const infoTextElement = document.getElementById('info-text');
    const roundNumberElement = document.getElementById('round-number');
    const playerScoreElement = document.getElementById('player-score');
    const computerScoreElement = document.getElementById('computer-score');

    function assignEventListener() {
        const items = document.querySelectorAll('.item');
        
        
        for (const item of items) {
            item.addEventListener('click', () => {
                let playerSelected = item.innerText;
                singleRound(playerSelected, computerSelect());
            });       
        }
    }


    let roundNumber = 0;
    let playerScore = 0;
    let computerScore = 0;
    

    // singleRound function plays one round of rock paper scissors with computer.
    function singleRound(playerSelected, computerSelected) {

        if (playerScore === 5) {
            infoTextElement.innerText = 'Game over! Player wins the game!';
            return;

        } else if (computerScore === 5) {
            infoTextElement.innerText = 'Game over! Computer wins the game!';
            return;  
        } else {

            if (playerSelected === 'Rock' && computerSelected === 'Rock' || 
                playerSelected === 'Paper' && computerSelected === 'Paper' ||
                playerSelected === 'Scissors' && computerSelected === 'Scissors') {
            
                console.log('draw');
                roundNumber++;
                roundNumberElement.innerText = 'Round number: ' + roundNumber;
                infoTextElement.innerText = 'This round: You and computer selected ' + playerSelected + '. It\'s a draw! ';


            } else if (playerSelected === 'Rock' && computerSelected === 'Paper') {
            
                console.log('Computer scores!');
                roundNumber++;
                computerScore++
                roundNumberElement.innerText = 'Round number: ' + roundNumber;
                computerScoreElement.innerText = 'Computer score: ' + computerScore;
                infoTextElement.innerText = 'This round: Paper beats your Rock. Computer scores!';

            } else if (playerSelected === 'Rock' && computerSelected === 'Scissors') {
            
                console.log('Player scores!');
                roundNumber++;
                playerScore++;
                roundNumberElement.innerText = 'Round number: ' + roundNumber;
                playerScoreElement.innerText = 'Player score: ' + playerScore;
                infoTextElement.innerText = 'This round: Rock beats Scissors. Player scores!';

            } else if (playerSelected === 'Paper' && computerSelected === 'Rock') {

                console.log('Player scores!');
                roundNumber++;
                playerScore++;
                roundNumberElement.innerText = 'Round number: ' + roundNumber;
                playerScoreElement.innerText = 'Player score: ' + playerScore;
                infoTextElement.innerText = 'This round: Paper beats Rock. Player scores!';

            } else if (playerSelected === 'Paper' && computerSelected === 'Scissors') {

                console.log('Computer scores!');
                roundNumber++;
                computerScore++
                roundNumberElement.innerText = 'Round number: ' + roundNumber;
                computerScoreElement.innerText = 'Computer score: ' + computerScore;
                infoTextElement.innerText = 'This round: Scissors beats Paper. Computer scores!';

            } else if (playerSelected === 'Scissors' && computerSelected === 'Rock') {

                console.log('Computer scores!');    
                roundNumber++;  
                computerScore++ 
                roundNumberElement.innerText = 'Round number: ' + roundNumber;  
                computerScoreElement.innerText = 'Computer score: ' + computerScore;
                infoTextElement.innerText = 'This round: Rock beats Scissors. Computer scores!';    

            } else if (playerSelected === 'Scissors' && computerSelected === 'Paper') {

                console.log('Player scores!');
                roundNumber++;
                playerScore++;
                roundNumberElement.innerText = 'Round number: ' + roundNumber;
                playerScoreElement.innerText = 'Player score: ' + playerScore;
                infoTextElement.innerText = 'This round: Scissors beats Rock. Player scores!';

            } else {
            
                console.log('Something is wrong!');
                roundNumber++;
                roundNumberElement.innerText = 'Round number: ' + roundNumber;
                infoTextElement.innerText = 'This round: Something went wrong!';

            }

        }
        
    }
}