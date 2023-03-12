let tab = [5, 9, 2, 1, 4, 6, 3];


function print_insertion(tab) {
    
  for (let i = 1; i < tab.length; i++) {

    let j = i - 1;

    let temp = tab[i];

    while (j >= 0 && tab[j] > temp) {

        tab[j + 1] = tab[j];

        j--;

      }

      tab[j + 1] = temp;
    }

    console.log(tab);
  }
    print_insertion(tab)