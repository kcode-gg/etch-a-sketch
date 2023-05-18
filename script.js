const gridContainer2 = document.querySelector(".gridContainer2");

// Initial grid generation
generateGrid(16);

// Function to generate the grid
function generateGrid(squaresPerSide) {
  // Remove the existing grid
  gridContainer2.innerHTML = "";

  // Calculate the square size based on the container width and the number of squares per side
  const containerWidth = gridContainer2.getBoundingClientRect().width;
  const squareSize = containerWidth / squaresPerSide;

  // Generate the new grid
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const square = document.createElement("div");
    square.classList.add("size");
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
    gridContainer2.appendChild(square);
  }

  // Add event listeners to the new squares
  const hoverElements = document.querySelectorAll(".size");
  hoverElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.classList.add("wow1");
    });
  });
}

// Getting clear button ID
const clear = document.getElementById("clear");

// Adding event listener to the "clear" button
clear.addEventListener("click", clearDrawing);

// Function to clear the drawing
function clearDrawing() {
  const hoverElements = document.querySelectorAll(".size");
  hoverElements.forEach((element) => {
    element.classList.remove("wow1");
  });
}

// Get 'change size' button
const changeSize = document.getElementById("changeSize");

// Add event listener to button when clicked
changeSize.addEventListener("click", promptForSize);

// Prompting user for input regarding size of the sketch field
function promptForSize() {
  let userSize = prompt("Number of squares per grid:");

  while (
    isNaN(userSize) ||
    userSize.trim() === "" ||
    userSize === null ||
    userSize === undefined ||
    userSize < 1 ||
    userSize > 100
  ) {
    alert("Please input a number between 1-100");
    userSize = prompt("Number of squares per grid:");
  }

  generateGrid(parseInt(userSize));
}
