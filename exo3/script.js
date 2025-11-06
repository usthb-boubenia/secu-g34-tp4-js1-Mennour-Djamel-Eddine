"use strict"; // slide 141

// Déclaration de variable globale (slide 37) de type Tableau d’Objets / JSON (slide 40)
let students = [
  // Objets (slide 39)
  { id: 1000, prenom: "JOHN", nom: "DOE", moyenne: 14.0, rang: 5 }, 
  { id: 2000, prenom: "BOB", nom: "CARLTON", moyenne: 7.0, rang: 1 },
  { id: 3000, prenom: "RAYANE", nom: "SMITH", moyenne: 13.0, rang: 3 }
];


// Définition de la fonction B (slide 45)
function B(moyenne) {
  // Opération de comparaison (slide 29)
  return moyenne >= 10;
}

// Définition de la fonction A (slide 45)
function A() {
  // Boucle for standard (slide 44)
  for (let i = 0; i < students.length; i++) {
    // Déclaration de variable locale (slide 37)
    let etu = students[i];
    // Accès aux propriétés d'objet (slide 39)
    // Opération conditionnelle (ternaire) (slide 29)
    let resultat = B(etu.moyenne) ? "ADMIS" : "AJOURNÉ";
    // Opération de concaténation (slide 29)
    console.log(etu.id + ": " + resultat); // slide 33
  }
}