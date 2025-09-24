const outputDiv = document.getElementById('output');

// Step 1: Initial promise that resolves with [1, 2, 3, 4] after 3 seconds
function getInitialArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Step 2: Filter even numbers after 1 second
function filterEvenNumbers(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = array.filter(num => num % 2 === 0);
      outputDiv.textContent = evenNumbers.toString(); // Display: 2,4
      resolve(evenNumbers);
    }, 1000);
  });
}

// Step 3: Multiply numbers by 2 after another 2 seconds
function multiplyByTwo(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multiplied = array.map(num => num * 2);
      outputDiv.textContent = multiplied.toString(); // Display: 4,8
      resolve(multiplied);
    }, 2000);
  });
}

// Step 4: Execute the chain
getInitialArray()
  .then(filterEvenNumbers)
  .then(multiplyByTwo)
  .catch((err) => {
    outputDiv.textContent = 'Error: ' + err;
  });
