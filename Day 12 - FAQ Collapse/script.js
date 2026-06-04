const faqBtns = document.querySelectorAll(".faq-toggle");

faqBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("active");
  });
});
