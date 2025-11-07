const form = document.getElementById("ageForm");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dob = document.getElementById("dob").value;
  if (!dob) {
    result.textContent = "Please select your birth date.";
    result.style.color = "red";
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  if (birthDate > today) {
    result.textContent = "Date cannot be in the future.";
    result.style.color = "red";
    return;
  }

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += prevMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  result.innerHTML = `
    <p>You are <strong>${ageYears}</strong> years, 
    <strong>${ageMonths}</strong> months, and 
    <strong>${ageDays}</strong> days old.</p>
  `;
  result.style.color = "#222";
});
