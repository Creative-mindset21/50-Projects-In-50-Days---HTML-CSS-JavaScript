const panelsEl = document.querySelectorAll(".panel");

panelsEl.forEach((panel) => {
  panel.addEventListener("click", () => {
    panelsEl.forEach((p) => p.classList.remove("active"));
    panel.classList.add("active");
  });
});
