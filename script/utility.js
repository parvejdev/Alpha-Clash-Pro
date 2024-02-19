function hideElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setaddbgclr (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('');
    
    const randomNumber = Math.random() * 25; // Use 'Math' instead of 'math', and fix the range to 25
    const index = Math.round(randomNumber);
    
    const randomAlphabet = alphabet[index];
    // console.log(index, randomAlphabet);
    return randomAlphabet;
}
// console.log(alphabets);

    // get random index between 0-25
