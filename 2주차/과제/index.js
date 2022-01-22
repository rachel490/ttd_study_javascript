const table = document.querySelector('tbody');
const buttonArr = document.querySelectorAll('td button');
const countArr = document.querySelectorAll('.count');
const total = document.querySelector('#total');
const payBtn = document.querySelector('#payBtn');
const payInput = document.querySelector('#pay');
const changes = document.querySelector('#changes');

table.addEventListener('click', handleClick);

let totalMoney = 0;

function handleClick(e) {
	if(e.target.nodeName === 'BUTTON') {
		const id = e.target.parentNode.parentNode.firstElementChild.innerText;
		const price = e.target.parentNode.parentNode.querySelector('.price').innerText;
		countArr[id-1].innerText = Number(countArr[id-1].innerText)+1; 
		totalMoney += Number(price);

		updateTotal();
	};
}

function updateTotal() {
	total.innerText = totalMoney;
}

payBtn.addEventListener('click', handlePay);

function handlePay(e) {
	e.preventDefault();

	if(total.innerText === '0') {
		alert('please order first');
		return;
	}

	if(Number(total.innerText) > Number(payInput.value)) {
		alert('돈이 모잘라요');
	} else {
		alert('주문이 완료되었습니다.');
		changes.innerText =  Number(payInput.value)-Number(total.innerText);
	}
}