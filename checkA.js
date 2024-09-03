function thereIsA(letter, str){
    
    let countA = 0;
    let upperCaseLetter = letter.toUpperCase();

    if (str.includes(letter) || str.includes(upperCaseLetter)){
        console.log(`Tem letra ${letter} na palavra.`);
    } else {
        console.log(`Não tem letra ${letter} na palavra`);
    }

}

function countA(letter, str){
    let contA = 0;
    let lowerCaseLetter = letter.toLowerCase();
    let lowerCaseStr = str.toLowerCase();

    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (lowerCaseStr[i] === lowerCaseLetter) {
            contA++;
        }
    }
    return contA;
}

let letter = "a";
let palavra = "arara azul";

thereIsA(letter, palavra);
console.log(countA(letter, palavra));