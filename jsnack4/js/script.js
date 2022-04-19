/*jsnack4. Chiedi un numero di 4 cifre all'utente
e calcola la somma di tutte le cifre che compongono il numero.*/

let number = parseInt(prompt('Dimmi un numero formato da quattro cifre'));

let sum = 0;

while(number > 0){
    let rem = number % 10;
    sum += rem;
    number = parseInt(number / 10);
}

console.log(sum);