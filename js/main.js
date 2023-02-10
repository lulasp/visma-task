const faqQuestions = document.querySelectorAll(".faq-question__wrapper");

faqQuestions.forEach(question => {
  question.addEventListener("click", function() {
    console.log("click event");
  });
});
