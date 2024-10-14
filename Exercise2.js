// Fauzi Maulana Alam
function threeStepAB(text) {
    const splitText = text.split('');
    for (let i = 0; i < splitText.length; i++) {
        const element = splitText[i];
        if (element === 'a' && splitText[i+4] !== undefined && splitText[i+4] ==='b') return true;
        else if(element === 'b' && splitText[i+4] !== undefined && splitText[i+4] ==='a') return true;
    }
    return false;
}

console.log(threeStepAB('lane borrowed')) // true
console.log(threeStepAB('i am sick')) // false
console.log(threeStepAB('you are boring')) // true
console.log(threeStepAB('barbarian')) // true
console.log(threeStepAB('bacon and meat')) // false