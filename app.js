const container = document.getElementById("container");
const grid = document.getElementById("grid");

function createGrid(gridNumber) {
	let gridArea = gridNumber * gridNumber;
	for (i = 0; i < gridArea; i++) {
		let divGrid = document.createElement("div");
		divGrid.className = `grid${i}`;
		grid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
		grid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
		grid.insertAdjacentElement("beforeend", divGrid);
	}
}
createGrid(10);

function sketchOnClick() {
	grid.addEventListener("click", (e) => {
		e.target.classList.toggle("sketch");
		console.log(e.target);
	});
}
// sketchOnClick();

function sketchOnHover() {
	grid.addEventListener("mouseover", (e) => {
		e.target.classList.add("sketch");
		// console.log(e.target);
	});
}

sketchOnHover();

function sketchOnHoverOut() {
	grid.addEventListener("mouseover", (e) => {
		e.target.classList.remove("sketch");
	});
}

// sketchOnHoverOut();

const clearButton = document.getElementById("clear");

clearButton.onclick = function() {
	let allDiv = grid.querySelectorAll("div");
	allDiv.forEach((e) => {
		e.classList.remove("sketch");
	});
};

const sizeButton = document.getElementById("size");

sizeButton.onclick = function() {
	let newSize = prompt("Chose the size of the grid");
	newSize = parseInt(newSize);
	console.log(newSize);
	if (isNaN(newSize) === true || newSize > 100 || newSize < 0) {
		do {
			newSize = prompt("You must enter a Number betwen 0 and 100");
			newSize = parseInt(newSize);
		} while (isNaN(newSize) === true || newSize > 100 || newSize < 0);
		let allDiv = grid.querySelectorAll("div");
		allDiv.forEach((e) => {
			e.remove();
		});
		createGrid(newSize);
	} else {
		let allDiv = grid.querySelectorAll("div");
		allDiv.forEach((e) => {
			e.remove();
		});
		createGrid(newSize);
	}
};
