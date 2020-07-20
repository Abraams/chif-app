const addToCartBtn = document.querySelector(`[data-target='addToCart']`);
const openCartBtn = document.querySelector(`[data-target='openCart']`);
const closeCartBtn = document.querySelectorAll(`[data-target='closeCart']`);
const cartElem = document.querySelector('[data-cart]');

const openModalBtn = document.querySelector(`[data-target='modal-cart']`);

let totalSum;
let cart = [];
let orderList;


openModalBtn.addEventListener('click', openModalCart);
addToCartBtn.addEventListener('click', addToCart);
openCartBtn.addEventListener('click', showCart);

closeCartBtn.forEach((item) => {
    item.addEventListener('click', closeCart);
});

function openModalCart() {
    let orderTotal = document.querySelector('[name="form_total"]');
    const orderForm = document.querySelector('#modal-cart');

	orderList = [];

    orderTotal.setAttribute('value', totalSum + '₽');
    cartElem.classList.add('_hidden');
    orderForm.classList.remove('_hidden');

	for (let i = 0; i < cart.length; i++) {
		if (cart[i]) {
			let item = [];
			item.push(cart[i][1]);
			item.push(cart[i][2]);
			item.push(cart[i][4]);
			orderList.push(item);
			console.log(item);
			
		}
	};

    orderList = orderList.join('|');
};

function addToCart() {
    let program = [];

    let programID = cart.length;
    let programName = document.querySelector(`[data-tabs-tab='program']`).getAttribute('data-tab-name');
    let programDays = days;
    let programShear = shear;
    let programPrice = price;
    let programTotal = totalPrice;

    // WARNING:
    program.push(`${programID}`); //		ID в списке 0
    program.push(programName); // 			Название программы 1
    program.push(`${programDays}`); //  	Кол-во дней 2
    program.push(`${programShear}`); //  	Скидка 3
    program.push(`${programPrice}`); // 	Цена в день 4
    program.push(`${programTotal}`); // 	Общая цена 5

    cart.push(program);

    if (!openCartBtn.classList.contains('_active')) {
        openCartBtn.classList.add('_active');
    }

};

function calculateProgramShear(programDays) {
    if (programDays < 7) {
        return 1;
    } else if (programDays >= 7 && programDays < 14) {
        return 0.9;
    } else if (programDays >= 14 && programDays < 30) {
        return 0.85;
    } else if (programDays >= 30) {
        return 0.75;
    }
}

function plusDay(programId) {

    let program = cart[programId]

    let programDays = program[2];
    let programShear = program[3];
    let programPrice = program[4] / programShear;
    let programTotal = program[5];

    if (programDays < 30) {
        programDays++;

        programShear = calculateProgramShear(programDays);

        programPrice = programPrice * programShear;
        programTotal = programDays * programPrice;

        program[2] = programDays;
        program[3] = programShear;
        program[4] = programPrice;
        program[5] = programTotal;
    }
    showCart()
};

function minusDay(programId) {

    let program = cart[programId]

    let programDays = program[2];
    let programShear = program[3];
    let programPrice = program[4] / programShear;
    let programTotal = program[5];

    if (programDays > 1) {
        programDays--;
        programShear = calculateProgramShear(programDays);

        programPrice = programPrice * programShear;
        programTotal = programDays * programPrice;

        program[2] = programDays;
        program[3] = programShear;
        program[4] = programPrice;
        program[5] = programTotal;
        showCart();

    } else {
        delete cart[programId]
        showCart();
    }
};

function showCart() {
    let out = '';
    totalSum = 0;

    if (cart.length === 0) {
        out += 'Пусто'
    }

    for (let i = 0; i < cart.length; i++) {
        if (cart[i]) {
            if (cart[i][2] != 0) {
                out += `
				<div class="programs__item _row">
					<div class="item__heading">
						<h4 class="--fz-20 --fw-400">
							${cart[i][1]}
						</h4>
					</div>
					<div class="item__info _col">
						<div class="info__price --fz-22">
							${new Intl.NumberFormat('ru-RU').format(cart[i][4])}₽
						</div>
						<div class="info__quantity _row">
							<button data-program-id='${cart[i][0]}' data-target='minusDay'>-</button>
							<span data-program-id='${cart[i][0]}' data-program-days class="--fz-20">${cart[i][2]}</span>
							<button data-program-id='${cart[i][0]}' data-target='plusDay'>+</button>
						</div>
					</div>
					<div class="item__img">
						<img src="/img/cart/img-1.png" alt="">
					</div>
				</div>
				`;
            };
            totalSum = totalSum + parseInt(cart[i][5]);
        };
    };

    totalSum = new Intl.NumberFormat('ru-RU').format(totalSum);

    document.querySelector('[data-cart-programs]').innerHTML = out;
    document.querySelector('[data-total-sum]').innerHTML = `${totalSum}₽`;

    let addDayBtn = document.querySelectorAll(`[data-target='plusDay']`);
    let minusDayBtn = document.querySelectorAll(`[data-target='minusDay']`);

    minusDayBtn.forEach(item => {
        item.addEventListener('click', () => {
            let programId = item.getAttribute('data-program-id');
            minusDay(programId);
        });
    });
    addDayBtn.forEach(item => {
        item.addEventListener('click', () => {
            let programId = item.getAttribute('data-program-id');
            plusDay(programId);
        });
    });


    cartElem.classList.remove('_hidden');
};

function closeCart() {
    cartElem.classList.add('_hidden');
}
