const M = [];
const elM = [];
const n = 50;
const m = 50;
const grid = document.querySelector(".grid");
const F = new Array(m);

const randomBetween = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateLetter = () => {
	return String.fromCharCode(randomBetween(65, 122));
};

let gridStyle = "";
for (let i = 0; i < n; i++) gridStyle += "18px ";

grid.style.gridTemplateColumns = gridStyle;

for (let i = 0; i < n; i++) {
	const elRow = [];
	const row = [];
	for (let j = 0; j < m; j++) {
		const div = document.createElement("div");
		div.innerHTML = "A";
		grid.appendChild(div);
		elRow.push(div);

		if (i === 0) {
			F[j] = randomBetween(5, 30);
			row.push({ f: randomBetween(0, F[j]), letter: null });
		} else {
			row.push({ f: 0, letter: null });
		}
	}
	elM.push(elRow);
	M.push(row);
}

const animate = () => {
	for (let j = 0; j < m; j++) {
		for (let i = 0; i < n; i++) {
			const e = M[i][j];
			const f = F[j];

			e.f--;

			if (e.f < 0) {
				if (i === 0) {
					e.f = f;
				} else {
					e.f = M[i - 1][j].f + 1;
				}
			}

			if (e.f === 0) {
				if (e.letter) e.letter = null;
				else e.letter = generateLetter();
			}

			elM[i][j].innerHTML = e.letter;
			elM[i][j].style.color = "green";
			if (e.f === 0) elM[i][j].style.color = "lightgreen";
		}
	}
};

setInterval(() => {
	animate();
}, 40);
