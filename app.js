//recupeér les elements du DOM
const touches =[...document.querySelectorAll(".bouton")]; /* mettre les elenemts dans un tableau*/
const listKeycode =  touches.map( touch => touch.dataset.key);/* recuperer les data-key dans un nouveau tableau */
const ecran = document.querySelector('.ecran');
document.addEventListener('keydown',(e) => {
    const valeur=e.key;
    calculer(valeur);
})
document.addEventListener('click',(e) => {
   const valeur=e.target.dataset.key; //on recuper la touche cliquer
    calculer(valeur);
})
 const calculer = (valeur)=> {
    if (listKeycode.includes(valeur)){
        switch (valeur){
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent); /* pour evaluer ce qui se trouver dans l'ecran */
                ecran.textContent=calcul;
                break;
            default:
                const indexkeycode = listKeycode.indexOf(valeur);/* index de valeur dans listekeycode */
                const touche = touches[indexkeycode];/* touches[lindexkeycode]=> donne la toucher cliquer */
                ecran.textContent += touche.innerHTML; /* on ajouter la touche cliquer dans l'ecran */
        }

    }
 }
 window.addEventListener('error', (e) => {
     alert("Error:Veillez bien regarder de nouveau les opperateurs " + e.message);
 });