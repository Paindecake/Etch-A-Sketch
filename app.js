const container = document.getElementById("container");
const grid = document.getElementById("grid");
let color = "#000000";

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

function activateSketch(e) {
	e.target.style.backgroundColor = color;
}

activePen = false;
function togglePen() {
	if (!activePen) {
		grid.addEventListener("mouseover", activateSketch);
		activePen = true;
		grid.classList.toggle("active");
	} else {
		grid.removeEventListener("mouseover", activateSketch);
		activePen = false;
		grid.classList.toggle("active");
	}
}

grid.addEventListener("click", () => {
	togglePen();
});

const clearButton = document.getElementById("clear");

clearButton.onclick = function() {
	let allDiv = grid.querySelectorAll("div");
	allDiv.forEach((e) => {
		e.style.backgroundColor = "#ffffff";
	});
};

// const sizeButton = document.getElementById("size");
const size10 = document.getElementById("size10");
const size20 = document.getElementById("size20");
const size30 = document.getElementById("size30");
const btnsize = document.querySelectorAll(".btnsize");

// function removeActive(buttons) {
// 	btnsize.forEach((btn) => {
// 		btn.onclick = () => btn.classList.remove("activeBtn");
// 	});
// }

// function changeSize() {
// 	btnsize.forEach((btn) => {
// 		removeActive(btnsize);
// 		this.classList.add("activeBtn");
// 	});
// }
size10.onclick = function() {
	btnsize.forEach((btn) => {
		btn.classList.remove("activeBtn");
	});
	newSize(10);
	this.classList.add("activeBtn");
};

size20.onclick = function() {
	btnsize.forEach((btn) => {
		btn.classList.remove("activeBtn");
	});
	newSize(20);
	this.classList.add("activeBtn");
};

size30.onclick = function() {
	btnsize.forEach((btn) => {
		btn.classList.remove("activeBtn");
	});
	newSize(30);
	this.classList.add("activeBtn");
};

newSize = function(size) {
	// let newSize = prompt("Chose the size of the grid");
	// newSize = parseInt(newSize);
	// console.log(newSize);
	// if (isNaN(newSize) === true || newSize > 100 || newSize < 0) {
	// 	do {
	// 		newSize = prompt("You must enter a Number betwen 0 and 100");
	// 		newSize = parseInt(newSize);
	// 	} while (isNaN(newSize) === true || newSize > 100 || newSize < 0);
	// 	let allDiv = grid.querySelectorAll("div");
	// 	allDiv.forEach((e) => {
	// 		e.remove();
	// 	});
	// 	createGrid(newSize);
	// } else {
	let allDiv = grid.querySelectorAll("div");
	allDiv.forEach((e) => {
		e.remove();
	});
	createGrid(size);
};
// };

let colorPicker = document.getElementById("colorPicker");
colorPicker.value = color;
colorPicker.addEventListener("input", useColor, false);
colorPicker.addEventListener("change", useColor, false);

function useColor(event) {
	color = event.target.value;
}

window.onload = function() {
	newSize(10);
	size10.classList.add("activeBtn");
};
