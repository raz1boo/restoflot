// select menu
const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});

// opening/closing modal
const consultation = document.getElementById("consult");
const modal = document.querySelector(".modal");
const close = document.getElementById("close");
const secondClose = document.getElementById("second-close");
const modalBg = document.querySelector(".modal__bg");
const gratitude = document.getElementById("gratitude");
const modalBlock = document.querySelector(".modal__block");

consultation.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  modal.style.display = "flex";
  modalBlock.style.display = "flex";
  gratitude.style.display = "none";
});
modalBg.addEventListener("click", (e) => {
  modal.style.display = "none";
  modalBlock.style.display = "none";
  document.body.style.overflow = "unset";
  gratitude.style.display = "none";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
  modalBlock.style.display = "none";
  document.body.style.overflow = "unset";
  gratitude.style.display = "none";
});

secondClose.addEventListener("click", () => {
  modal.style.display = "none";
  modalBlock.style.display = "none";
  document.body.style.overflow = "unset";
  gratitude.style.display = "none";
});

// sending form
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const checkBox = document.getElementById("send");
const button = document.getElementById("bt");

document.addEventListener("change", () => {
  if (name.value && phone.value && checkBox.checked) {
    button.disabled = false;
  }
});

button.addEventListener("click", () => {
  modalBlock.style.display = "none";
  gratitude.style.display = "flex";
  name.value = "";
  phone.value = "";
  checkBox.checked = false;
  button.disabled = true;
});

// slider
const lbtn = document.getElementById("lbtn");
const rbtn = document.getElementById("rbtn");
const slides = document.getElementsByClassName("solutions__wrapper__tile");
let currentSlide = 0;
let offset = 256;

lbtn.addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

rbtn.addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});
function changeSlide(moveTo) {
  if (moveTo >= slides.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = slides.length - 1;
  }

  //toggle active class
  slides[moveTo].classList.add("active");
  slides[currentSlide].classList.remove("active");
  slides[currentSlide].style.left = "200px";
  console.log(slides);

  currentSlide = moveTo;
}
