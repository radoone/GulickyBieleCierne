

const vrece100 = [...Array(100).keys()].map((i) => (i + 1) % 2)
.map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value)


const vrece200 = [...Array(200).keys()].map((i) => (i + 1) % 2)
.map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value)



let vrece100_rovnake = 0;
let vrece100_rozne = 0;

let vrece200_rovnake = 0;
let vrece200_rozne = 0;
let i = 0;
const data_rozne_100 = [];
const data_rozne_200 = [];
for (i = 1; i <= 91000; i++) {
  let random100_1 
  let random100_2 
do {
  random100_1 = Math.floor(Math.random() * vrece100.length)
  random100_2 = Math.floor(Math.random() * vrece100.length)

}
while (random100_1==random100_2);

let random200_1 
let random200_2 
do {
random200_1 = Math.floor(Math.random() * vrece200.length)
random200_2 = Math.floor(Math.random() * vrece200.length)

}
while (random200_1==random200_2);
  let gulicka1_vrece100 = vrece100[random100_1];
  let gulicka2_vrece100 = vrece100[random100_2];
  let gulicka1_vrece200 = vrece200[random200_1];
  let gulicka2_vrece200 = vrece200[random200_2];


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
  if (i > 40000) {
    data_rozne_100.push({ y: (vrece100_rozne / i) * 100, x: i });
    data_rozne_200.push({ y: (vrece200_rozne / i) * 100, x: i });
  }
}
console.log(
  'vreco100 ' + (vrece100_rovnake / i) * 100 + ' ' + (vrece100_rozne / i) * 100
);
console.log(
  'vreco200 ' + (vrece200_rovnake / i) * 100 + ' ' + (vrece200_rozne / i) * 100
);

document.querySelector('#rovnake100').innerHTML = (vrece100_rovnake / i) * 100;
document.querySelector('#rovnake200').innerHTML = (vrece200_rovnake / i) * 100;
document.querySelector('#rozne100').innerHTML = (vrece100_rozne / i) * 100;
document.querySelector('#rozne200').innerHTML = (vrece200_rozne / i) * 100;
document.querySelector('#pocet').innerHTML = i;

const data = {
  datasets: [
    {
      label: 'Vrece100',
      data: data_rozne_100,
      backgroundColor: 'red',
    },
    {
      label: 'Vrece200',
      data: data_rozne_200,
      backgroundColor: 'blue',
    },
  ],
};

var gulicky = {
  type: 'scatter',
  data: data,
  options: {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
    },
  },
};
// get line chart canvas
var gulickygraf = document.getElementById('gulickygraf').getContext('2d');
// draw line chart
new Chart(gulickygraf, gulicky);
