const list = ["Yogurt", "Banana", "Uova", "Latte", "Pasta", "Pomodori"]; // Creo l'array
let listString = ""; // Creo la stringa vuota
let count = 0; // Creo variabile conttore
while (count < list.length) { // imposto la condizione di fine ciclo
    listString += ` <li>${list[count]}</li>`; // aggiungo alla stringa un elemento della lista della spesa
    count++;  // aumento di uno il contatote 
}
document.getElementById("list").innerHTML = listString; // stampo il risultato