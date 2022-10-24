function count(input) {
  let i = 1;

  console.log("HITUNG MAJU");
  while (i < input) {
    i++;
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

function countReverse(input) {
  let j = input;

  console.log("HITUNG MUNDUR");
  console.log(j);
  while (j > 1) {
    j--;
    if (j % 2 == 0) {
      console.log(j);
    }
  }
}

console.log(count(20));
console.log(countReverse(20));
