# Trazzia 1

Mail

- Inventiamo una lista di email a nostro piacimento
- Chiediamo all'utente una mail (con un prompt)
- controlliamo che la mail inserita sia presente nella lista
- se è presente, gli diamo il benvenuto. (in console)
- altrimenti gli diciamo che non può accedere (in console)
  :avviso:non potete usare il metodo .includes())!!!

  BONUS:

- Nell'esercizio mail, raccogliamo la mail dell'utente con un input e facciamo la verifica al click del bottone

  ## Svolgimento

  1. Creiamo un input nell'html e un button
  1. Andiamo a prendere l'input e il button dall'DOM
  1. Creiamo un array con dei valori di e-mail inventati.
  1. Creiamo una variabile con una stringa da far vedere in pagina es "Mi dispiace non è in lista"
  1. Andiamo a creare la funzione al click del button

     - Andiamo a creare un ciclo che si ripeterà fino a quando la i sarà inferiore alla length dell'array.

       - Creiamo una variabile per andarci a prendere il value dell'input
       - Creiamo una variabile che ci restituisca la parola dell'array corrispondente con il valore della i
       - Creiamo una condizione

         - **SE** il value dell'input è uguale alla variabile presa al punto sopra (array corrispondente alla nostra i)

           - la Variabile con scope globale "Mi dispiace non è in lista" verrà cambiata in "Prego può entrare"

         - Non Ho bisogno dell'altrimenti in quanto se la condizione non è vera il messaggio rimane quello dichiarato in precedenza.

  1. Vado a stampare in pagina il messaggio

  <br>
  <br>
  <br>
  <br>

# Traccia 2

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare (in console)
