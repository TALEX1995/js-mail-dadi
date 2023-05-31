console.log('JS OK');


// Recover element from DOM

const emailInput = document.getElementById('e-mail');
const access = document.getElementById('access');
const messageAccessPlaceholder = document.getElementById('message-access');


// Create Array

const emailArray = ['alextanase95@gmail.com', 'pippo@gmail.com', 'achille@gmail.com', 'spartacus#gmail.com', 'mario@gmail.com', 'drstrange@gmail.com']


// Message into DOM

let messageAccess = ''


// Function on click Listener

access.addEventListener('click', function() {

    // Cicle
    for (let i = 0; i < emailArray.length; i++) {
        
        const emailControl = emailArray[i];
        const emailUser = emailInput.value;
        
        if (emailUser === emailControl) {
            messageAccess = 'Prego può entrare'
        }   else {
            messageAccess = 'Mi dispiace non è in lista'
        }

        // Inizialmente ho fatto la condition senza else, in quanto però andando ad inserire una mail esatta mi cambiava il messaggio, poi cancellando l'input e mettendo qualcosa di sbagliato il messaggio non cambiava più e risultava sempre essere prego puoi entrare almeno che non si refreshava la pagina
    }

    console.log(messageAccess);
})




