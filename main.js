const wrapper = document.querySelector(".wrapper");
const showModal = document.getElementById("showModal");
const modalBox = document.querySelector(".modalBox");
const closeModal = document.getElementById("closeModal");
const showBg = document.querySelector(".overlay");

const close = () => {
  modalBox.classList.add("hidden");
  showBg.classList.remove("showBg");
};
const show = () => {
  modalBox.classList.toggle("hidden");
  showBg.classList.add("showBg");
};
showModal.addEventListener("click", () => show());
closeModal.addEventListener("click", () => close());
showBg.addEventListener("click", () => close());
window.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    close();
  }
});
