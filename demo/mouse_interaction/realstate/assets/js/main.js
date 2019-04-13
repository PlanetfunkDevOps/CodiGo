
  const customer = document.querySelector(".customer");
  const manager = document.querySelector(".manager");
  const container = document.querySelector(".container");

  customer.addEventListener("mouseenter", () => {
    container.classList.add("hover-customer");
  });

  customer.addEventListener("mouseleave", () => {
    container.classList.remove("hover-customer");
  });

  manager.addEventListener("mouseenter", () => {
    container.classList.add("hover-manager");
  });

  manager.addEventListener("mouseleave", () => {
    container.classList.remove("hover-manager");
  });
