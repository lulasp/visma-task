const faqQuestions = document.querySelectorAll(".faq-question__wrapper");

faqQuestions.forEach(question => {
  question.addEventListener("click", function() {
    console.log("click event");
    this.classList.toggle("active");
    const faqAnswer = this.nextElementSibling;
    if (faqAnswer.style.maxHeight) {
      faqAnswer.style.maxHeight = null;
    } else {
      faqAnswer.style.maxHeight = `${faqAnswer.scrollHeight}px`;
    }
  });
});
