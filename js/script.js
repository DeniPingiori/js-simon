//definisco funzione che genera 5 num casuali
function generateRandomNumbers() {
    return Math.floor(Math.random() * 100 + 1);
}

//funzione che genera array numeri
function createArrayNumbers() {
    let numbers = [];

    //verifico se la lunghezza dell'array è < di 5. Se la condizione è vera genero il num e lo pusho nell'array
    while (numbers.length < 5) {
        //genero num con la funzione definita a riga 11
        let num = generateRandomNumbers();

        //verifico che il num non sia incluso nell'array
        if (!numbers.includes(num)) {
            //pusho il num nell'array
            numbers.push(num);
        }
    }

    return numbers;
}

//assegno ad una variabile il val restituito dalla funzione createArrayNumbers
let random_numbers = createArrayNumbers();

console.log(random_numbers);

//mostro a video, aggangiando id da html
document.getElementById('numbers').innerHTML = random_numbers;

//setTimeout che svuota la lista
setTimeout(function(){
    document.getElementById('numbers').innerHTML = '';  
}, 3000);  

//setTimeout in cui permettiamo all'utente di inserire i num e facciamo mostare il risultato
setTimeout(function (){
    //creo array vuoto per i num inseriti dall'user
    let user_numbers = [];

    //ciclo di 5 ripetizioni in cui vado a mostare ad ogni iterazione il prompt di inserimento
    for (let i = 0; i <5; i++) {
    //permettere all'utente di inserire i suoi num
    user_numbers.push(parseInt(prompt('inserisci il tuo num')));
    }

    //array di num individuati
    let guessed = [];
    //controllare che i numeri inseriti dallo user siano presenti nell'array di num casuali
    for (let i = 0; i <5; i++) {
        if(random_numbers.includes(user_numbers[i])) {
            guessed.push(user_numbers[i]);
        }
    }
    //mostro i num indovinati
    if (guessed.length === 0) {
        document.getElementById('numbers').innerHTML = 'Non hai indovinato nessun numero';
    }
    else if (guessed.length === 1) {
        document.getElementById('numbers').innerHTML = `hai indovinato ${guessed.length} numer0. e' il seguente ${guessed}`;
    }
    else {
    document.getElementById('numbers').innerHTML = `hai indovinato ${guessed.length} numeri. Sono i seguenti ${guessed}`;
    }
    
}, 6000)
