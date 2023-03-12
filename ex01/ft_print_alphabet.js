function alphabet_majuscule(alphabet) {
    // Convertir la chaîne de caractères en un tableau de caractères
    let tableau_alphabet = alphabet.split("");
    

    tableau_alphabet = tableau_alphabet.map(function(lettre) {
      return lettre.toUpperCase();
    });
    
    return tableau_alphabet;
  }
  