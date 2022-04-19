/*jsnack2. Crea un array vuoto.
Chiedi per 6 volte all'utente di inserire un numero,
se è dispari inseriscilo nell'array.*/

const even = [];

for(i = 0; i < 6; i++){
    const number = parseInt(prompt('Scrivi un numero'));

    if((number % 2) === 0){
        even.push(number);
    }
}

console.log(even);