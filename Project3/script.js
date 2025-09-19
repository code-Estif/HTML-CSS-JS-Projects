const quotes = [
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "Fix the cause, not the symptom. – Steve Maguire",
  "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson",
  "Simplicity is the soul of efficiency. – Austin Freeman",
  "Before software can be reusable it first has to be usable. – Ralph Johnson",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
  "Knowledge is power. – Francis Bacon",
  "Learning to write programs stretches your mind. – Bill Gates",
  "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job. – Mosher’s Law of Software Engineering",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. – Dan Salomon",
  "Walking on water and developing software frm a specification are easy if both are frozen. – Edward V. Berard",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
  "Talk is cheap. Show me the code. – Linus Torvalds",
  "The most disastrous thing that you can ever learn is your first programming language. – Alan Kay",
  "Truth can only be found in one place: the code. – Robert C. Martin",
  "In programming, the hard part isn’t solving problems, but deciding what problems to solve. – Paul Graham",
  "Good code is its own best documentation. – Steve McConnell",
  "Testing leads to failure, and failure leads to understanding. – Burt Rutan",
  "The function of good software is to make the complex appear simple. – Grady Booch"
];

const quoteElement = document.getElementById("quote");
const button = document.getElementById("new-quote");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
});
