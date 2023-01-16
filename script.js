var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  // Event listener to increment button
  countEl.textContent = count;
}

incrementEl.addEventListener("click", () => {
  count++;
  countEl.innerHTML = count;
});

// Event listener to decrement button
decrementEl.addEventListener("click", () => {
  count--;
  countEl.innerHTML = count;
});
