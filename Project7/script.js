const form = document.getElementById('bmiForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    resultDiv.textContent = 'Please enter valid height and weight.';
    resultDiv.style.color = 'red';
    return;
  }

  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
  let category = '';

  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 24.9) category = 'Normal weight';
  else if (bmi < 29.9) category = 'Overweight';
  else category = 'Obesity';

  resultDiv.innerHTML = `
    <p>Your BMI: <strong>${bmi}</strong></p>
    <p>Category: <strong>${category}</strong></p>
  `;
  resultDiv.style.color = '#333';
});
