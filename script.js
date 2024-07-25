const filterButtons = document.querySelector(".categories ul");
const menuIcon = document.querySelector(".logo-section i");
const sidebar = document.querySelector("aside");
const container = document.querySelector(".container");
const hideItems = document.querySelectorAll(".show");
const cardContainer = document.querySelectorAll(".video-card");

const filterCards = (e) => {
  document.querySelector(".all-active").classList.remove("all-active");
  if (e.target != filterButtons) {
    e.target.classList.add("all-active");
  }
  cardContainer.forEach((card) => {
    card.classList.add("show", "hide");
    if (
      e.target.dataset.name === card.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("show", "hide");
    }
  });
};

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  container.classList.toggle("active");
  hideItems.forEach((item) => {
    item.classList.toggle("hide");
  });
});
filterButtons.addEventListener("click", filterCards);
