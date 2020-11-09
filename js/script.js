/**
Creare un oggetto che descriva uno studente con le seguenti proprietà: nome,
  cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti
  e stampare per ognuno nome e cognome
Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo
  oggetto studente inserendo nell’ordine: nome, cognome e età.

*/


var studente = {
  'nome' : 'Simone',
  'cognome' : 'Pagotto',
  'età' : 25,
}

for (var key in studente) {
  document.getElementById("proprietà-oggetto").innerHTML += key + ' : ' + studente[key] + "<br />";
  console.log(key + ' : ' + studente[key]);
}


var classe =
[
  {
    'nome' : 'Simone',
    'cognome' : 'Pagotto',
    'età' : 25,
  },
  {
    'nome' : 'Francesca',
    'cognome' : 'Ropolo',
    'età' : 24,
  },{
    'nome' : 'Paolo',
    'cognome' : 'Manzella',
    'età' : 25,
  },
]

for (var i = 0; i < classe.length; i++) {
  for (var key in classe[i]) {
    console.log(key + ' : ' + classe[i][key]);
    document.getElementById("proprietà-array-oggetti").innerHTML += key + ' : ' + classe[i][key] + "<br />";
  }
}


var newStudent = {};
console.log(typeof newStudent);

for (var key in studente) {
  newStudent[key] = prompt("Inserire " + key);
}

classe.push(newStudent);
console.log(classe);
