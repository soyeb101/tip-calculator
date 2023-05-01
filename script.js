// select people
const peopleSum = document.querySelector('#peopleSum');

// increment by one
const plusSum = document.querySelector('#plusSum');
let count = 1;
plusSum.addEventListener('click', () => {
  count++;
  peopleSum.innerHTML = count;
});

// decrement by one
const minusSum = document.querySelector('#minusSum');
minusSum.addEventListener('click', () => {
  if (count > 1) {
    count--;
  }
  peopleSum.innerHTML = count;
});

// calculate
const calculator = document.querySelector('#calculator');

calculator.addEventListener('click', () => {
  // display summary tab
  document.querySelector('.total_per_person').style.display = 'block';

  // calculating tips
  const totalBill = Number(document.querySelector('#totalBill').value);
  const tipMain = Number(document.querySelector('#tipMain').value);
  let total = totalBill * (tipMain / 100);
  let finalPeople = peopleSum.innerHTML;

  // display total bill and total in summary 
  document.querySelector('#finalBill').innerHTML = totalBill;
  document.querySelector('#tipAmount').innerHTML = total;
  const taxAmount = (document.querySelector('#taxAmount').innerHTML =
    (totalBill + 5) / 100);

  // final calculation
  document.querySelector('#totalPerPerson').innerHTML = (
    (totalBill + total + taxAmount) /
    finalPeople
  ).toFixed(2);
});