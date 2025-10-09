const tempInput = document.getElementById("tempInput");
const unitSelect = document.getElementById("unit");
const celsiusOut = document.getElementById("celsius");
const fahrenheitOut = document.getElementById("fahrenheit");
const kelvinOut = document.getElementById("kelvin");
const resetBtn = document.getElementById("reset");

function convertTemperature() {
  const value = parseFloat(tempInput.value);
  const unit = unitSelect.value;

  if (isNaN(value)) return;

  let celsius, fahrenheit, kelvin;

  if (unit === "celsius") {
    celsius = value;
    fahrenheit = (value * 9) / 5 + 32;
    kelvin = value + 273.15;
  } else if (unit === "fahrenheit") {
    celsius = ((value - 32) * 5) / 9;
    fahrenheit = value;
    kelvin = celsius + 273.15;
  } else if (unit === "kelvin") {
    celsius = value - 273.15;
    fahrenheit = (celsius * 9) / 5 + 32;
    kelvin = value;
  }

  celsiusOut.textContent = celsius.toFixed(2);
  fahrenheitOut.textContent = fahrenheit.toFixed(2);
  kelvinOut.textContent = kelvin.toFixed(2);
}

tempInput.addEventListener("input", convertTemperature);
unitSelect.addEventListener("change", convertTemperature);

resetBtn.addEventListener("click", () => {
  tempInput.value = "";
  celsiusOut.textContent = "0";
  fahrenheitOut.textContent = "0";
  kelvinOut.textContent = "0";
});
