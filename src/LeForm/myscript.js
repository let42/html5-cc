function printMe(nome, cognome, numTel, note, passwd){
  var strinToPrint="Nome: "+ nome + "<br />" + "Cognome: " + cognome
  + "<br />" + " Numero di Telefono: " + numTel + "<br />" +
  "Note: " + note + "<br />" + "Password: " + passwd + "<br />";
  document.getElementById('printarea').innerHTML= strinToPrint;
}
