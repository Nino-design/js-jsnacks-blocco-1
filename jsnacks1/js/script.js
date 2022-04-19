/*jsnack1. L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

const firstWord = prompt('Inserisci una parola');
const secondWord = prompt('Inserisci un \'altra parola');

const firstWordLength = firstWord.length;
const secondWordLength = secondWord.length;

let result;

if(firstWordLength > secondWordLength){
    result = `${secondWord} è più corta di ${firstWord}`;
}else if(secondWordLength > firstWordLength){
    result = `${firstWord} è più corta di ${secondWord}`;
}else{
    result = `Le parole ${firstWord} e ${secondWord} hanno la stessa lunghezza`;
}

console.log(result);