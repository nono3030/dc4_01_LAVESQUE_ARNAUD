/*
Écrire une fonction qui filtre tous les nombres impairs d’un tableau.
Affichez le résultat dans la console de développement
*/

function array_filter(){
    var array = [1,2,3,4,5,6,7,8,9,10];
    var i = 0;
    var seconnd_array = [];
    while (i < array.length) {
        if (array[i] % 2 === 0) {
            seconnd_array.push(array[i]);
        }
        i++;
    }
    console.log(seconnd_array); /* seulement le second tableau sera filtré et affiché */

}
array_filter();