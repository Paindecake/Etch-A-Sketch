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

const mhover = document.querySelectorAll("#grid > div");
// addEventListener("click", (e) => {
// 	console.log(e.target);
// });

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
		console.log(e.target);
	});
}

sketchOnHover();

function sketchOnHoverOut() {
	grid.addEventListener("mouseover", (e) => {
		e.target.classList.remove("sketch");
	});
}

// sketchOnHoverOut();
