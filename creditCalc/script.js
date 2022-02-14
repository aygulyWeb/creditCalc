const summa = document.querySelector('.input__summa');
const period = document.querySelector('.input__period');
const rate = document.querySelector('.input__rate');
const btn = document.querySelector('.btn-calc');
const table = document.querySelector('th');


btn.onclick = getValue;

function getValue() {

	return `<table>
	<tr>
	<th>${summa.value}</th>
	<tr>
	</table>`;
	// table.innerHTML = summa.value;
	// table.innerHTML = period.value;
}


// Аннуитетный
summa = 1000;
period = 12;
rate = 0.229;

function getAnnuitet() {
	let ann = 0;
	let monthRate = rate / 12;
	let topPart = +(summa * monthRate).toFixed(2);
	let bottomPart = + (1 - (1 / Math.pow(monthRate + 1, period))).toFixed(2);
	ann = +(topPart / bottomPart).toFixed(2);
	console.log(ann);
}

btn.addEventListener('Click', getAnnuitet);


//Дифференциальный

// let diff = 0;
// let percents = 0;
// let remainSumma = summa;
// let mainDebt = +(summa / period).toFixed(2);

// for (let i = 0; i < period; i++) {
// 	console.log(`Долг: ${remainSumma}`);
// 	percents = +(remainSumma * monthRate).toFixed(2);
// 	console.log(`проценты:  ${percents}`);
// 	remainSumma -= +(mainDebt).toFixed(2);
// 	(remainSumma) = +(remainSumma).toFixed(2);
// 	diff = +(percents + mainDebt).toFixed(2);
// 	console.log(`Основной долг: ${mainDebt}`);
// 	console.log(`Ежемесячный платёж: ${diff}`);

// }

