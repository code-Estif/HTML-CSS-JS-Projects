document.getElementById("calculate").addEventListener("click", function() {
  const bill = parseFloat(document.getElementById("bill").value);
  const tipPercent = parseFloat(document.getElementById("tip").value);
  const people = parseInt(document.getElementById("people").value);

  if (isNaN(bill) || isNaN(tipPercent) || isNaN(people) || people <= 0) {
    alert("Please enter valid numbers!");
    return;
  }

  const tipAmount = (bill * (tipPercent / 100)) / people;
  const totalAmount = (bill / people) + tipAmount;

  document.getElementById("tipPerPerson").textContent = `$${tipAmount.toFixed(2)}`;
  document.getElementById("totalPerPerson").textContent = `$${totalAmount.toFixed(2)}`;
});

document.getElementById("reset").addEventListener("click", function() {
  document.getElementById("bill").value = "";
  document.getElementById("tip").value = "";
  document.getElementById("people").value = "";
  document.getElementById("tipPerPerson").textContent = "$0.00";
  document.getElementById("totalPerPerson").textContent = "$0.00";
});
