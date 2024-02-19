// function play(){
//     // step-1: Hide the home Screen.to hide the screen add the class  hidden to the home section  
//     const homeScreen = document.getElementById('home-screen') ;
//     homeScreen.classList.add('hidden');
//     // console.log(homeScreen.classList)
// }
//     // step-1: Show the playGround
//     const playgroundsection = document.getElementById('play-ground');
//     playgroundsection.classList.remove('hidden');
//     // console.log(playgroundsection.classList);

function continueGame() {
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet', alphabet);

    const currentAlphabet = document.getElementById ('current-alphabet');
    currentAlphabet.innerText = alphabet;


    // set background color
    setaddbgclr (alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
 // Step 1: Generate a random alphabet 