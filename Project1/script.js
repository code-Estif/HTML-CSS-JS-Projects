let faqs = [
  { question: "What is HTML?", answer: "HTML is the structure of web pages." },
  { question: "What is CSS?", answer: "CSS styles the HTML content." },
  { question: "What is JavaScript?", answer: "JavaScript makes web pages interactive." },
  { question: "What can we make together?", answer: "We can build interactive web pages like this FAQ!" }
];

// Function to display FAQs
function displayFaqs(filter = "") {
  const faqList = document.getElementById("faqList");
  faqList.innerHTML = "";

  faqs.map((faq, index) => {
    if(faq.question.toLowerCase().includes(filter.toLowerCase())){
      const card = document.createElement("div");
      card.className = "faq-card";
      card.innerHTML = `<strong>${faq.question}</strong><div class="answer">${faq.answer}</div>`;
      card.onclick = function() {
        const ans = this.querySelector(".answer");
        ans.style.display = ans.style.display === "block" ? "none" : "block";
      };
      // Right-click to delete
      card.oncontextmenu = function(e) {
        e.preventDefault();
        faqs.splice(index, 1);
        displayFaqs(document.getElementById("searchInput").value);
      };
      faqList.appendChild(card);
    }
  });
}

// Initial display
displayFaqs();

// Add new Q&A
document.getElementById("addBtn").onclick = function() {
  const q = document.getElementById("newQuestion").value.trim();
  const a = document.getElementById("newAnswer").value.trim();
  if(q && a){
    faqs.push({ question: q, answer: a });
    displayFaqs(document.getElementById("searchInput").value);
    document.getElementById("newQuestion").value = "";
    document.getElementById("newAnswer").value = "";
  }
};

// Search/filter
document.getElementById("searchInput").oninput = function() {
  displayFaqs(this.value);
};