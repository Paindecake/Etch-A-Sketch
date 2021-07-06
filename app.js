const container = document.getElementById("container");
const grid = document.getElementById("grid");

function createGrid(gridNumber) {
	let gridArea = gridNumber * gridNumber;
	for (i = 0; i < gridArea; i++) {
		let divGrid = document.createElement("div");
		divGrid.className = `grid${i}`;
		divGrid.textContent = `${i}`;
		grid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
		grid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
		grid.insertAdjacentElement("beforeend", divGrid);
	}
}
createGrid(10);
