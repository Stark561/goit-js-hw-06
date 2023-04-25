const counterValue = document.getElementById("value");
const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
let count = 0;

decrementBtn.addEventListener("click", () => {
  count -= 1;
  counterValue.textContent = count;
});

incrementBtn.addEventListener("click", () => {
  count += 1;
  counterValue.textContent = count;
});