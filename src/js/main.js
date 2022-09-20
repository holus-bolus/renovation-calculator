const squareInput = document.querySelector("#square-input");
const squareRange = document.querySelector("#square-range");
const inputs = document.querySelectorAll("input");
const radioType = document.querySelectorAll("input[name=\"type\"]");
const radioBuilding = document.querySelectorAll("input[name=\"building\"]");
const radioRooms = document.querySelectorAll("input[name=\"rooms\"]");
const ceilings = document.querySelector("input[name=\"ceiling\"]");
const walls = document.querySelector("input[name=\"walls\"]");
const floor = document.querySelector("input[name=\"floor\"]");


const basePrice = 6000;

const totalPriceElement = document.querySelector("#total-price");

squareRange.addEventListener("input", () => {
  squareInput.value = squareRange.value;
});

squareInput.addEventListener("input", () => {
  squareRange.value = squareInput.value;
});

function calculatePrice() {
  let totalPrice = basePrice * parseInt(squareInput.value);
  for (let radio of radioType) {
    if (radio.checked) {
      totalPrice *= parseFloat(radio.value);
    }
  }
  for (let radio of radioBuilding) {
    if (radio.checked) {
      totalPrice *= parseFloat(radio.value);
    }
  }
  for (let radio of radioRooms) {
    if (radio.checked) {
      totalPrice *= parseFloat(radio.value);
    }
  }

  if (ceilings.checked) {
    totalPrice *= parseFloat(ceilings.value);
  }

  if (walls.checked) {
    totalPrice *= parseFloat(walls.value);
  }

  if (floor.checked) {
    totalPrice *= parseFloat(floor.value);
  }

  const formatter = new Intl.NumberFormat("ua");
  totalPriceElement.innerText = formatter.format(totalPrice);
}

calculatePrice();

for (const item of inputs) {
  item.addEventListener("input", () => {
    calculatePrice();
  });
}
