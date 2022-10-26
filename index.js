Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const vrece100 = [...Array(100).keys()].map((i) => (i + 1) % 2);
const vrece200 = [...Array(200).keys()].map((i) => (i + 1) % 2);

let vrece100_rovnake=0;
let vrece100_rozne=0;

let vrece200_rovnake=0;
let vrece200_rozne=0;
let pravdepodobnost_vrece100_rovnake;
let pravdepodobnost_vrece100_rozne;
let pravdepodobnost_vrece100_lava_biela;
let pravdepodobnost_vrece100_prava_biela;
let pravdepodobnost_vrece100_lava_cierna;
let pravdepodobnost_vrece100_prava_cierna;

let i = 0
for (i = 0; i < 10; i++) {
  let gulicka1_vrece100 = vrece100.random();
  let gulicka2_vrece100 = vrece100.random();
  let gulicka1_vrece200 = vrece200.random();
  let gulicka2_vrece200 = vrece200.random();

  if (gulicka1_vrece100 === gulicka2_vrece100) {
    vrece100_rovnake++;
  } else {
    vrece100_rozne++;
  }


  if (gulicka1_vrece200 === gulicka2_vrece200) {
    vrece200_rovnake++;
  } else {
    vrece200_rozne++;
  }

  //document.querySelector('#vrece100').innerHTML = vrece100
  //document.querySelector('#vrece100').innerHTML = vrece100
  //document.querySelector('#vrece100').innerHTML = vrece100
}
console.log("vreco100 " + vrece100_rovnake/i * 100+ " "+vrece100_rozne/i*100) ;
console.log("vreco200 " + vrece200_rovnake/i * 100+ " "+vrece200_rozne/i*100) ;


// Update header text
document.querySelector('#rovnake100').innerHTML = vrece100_rovnake/i * 100
document.querySelector('#rovnake200').innerHTML = vrece200_rovnake/i * 100
document.querySelector('#rozne100').innerHTML = vrece100_rozne/i * 100
document.querySelector('#rozne200').innerHTML = vrece200_rozne/i * 100



// Log to console
//console.log(gulicka2_vrece100 )
