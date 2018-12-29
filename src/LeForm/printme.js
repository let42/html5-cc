//Printing values
function printMe(nome, cognome, numTel, note, studente){
    if(studente == "on")
        studente = "Sì";
    else if (studente == "off") {
        studente = "No";
    }
    var strinToPrint="<p>Nome: "+ nome + "<br />"
    + "Cognome: " + cognome + "<br />" +
    " Numero di Telefono: " + numTel + "<br />" +
    "Note: " + note + "<br />"+ studente +"</p>";
    document.getElementById('printarea').innerHTML= strinToPrint;
}
