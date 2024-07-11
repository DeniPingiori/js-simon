//definisco funzione che genera 5 num casuali
function generateRandomNumbers(){
    return Math.floor(Math.random() * 100 + 1);
}

//funzione che genera array numeri
function createArrayNumbers() {
    let numbers = [];

    //verifico se la lunghezza dell'array è < di 5. Se la condizione è vera genero il num e lo pusho nell'array
    while(numbers.lenght < 5) {
        //genero num con la funzione definita a riga 11
        let num = generateRandomNumbers();

        //verifico che il num non sia incluso nell'array
        if(!numbers.includes(num)) {
            //pusho il num nell'array
        }
    }
    return numbers;
}