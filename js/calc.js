let calcRangeElem = document.querySelector('[data-tab-range]');
let daysElem = document.querySelector('[data-info-days]');
let priceElem = document.querySelector('[data-info-price]');
let shareElem = document.querySelector('[data-info-share]');
let totalElem = document.querySelector('[data-info-total]');

let tab = document.querySelector(`[data-tabs-tab='program']`);

let days;
let shear;
let price;
let totalPrice;

function getTotalPrice(days, price) {
    return days * price;
};

function getShear(days) {
    let shear;

	if (days < 7) {
        shear = 1;
        shareElem.style.color = '#4f4f4f';
    } else if (days >= 7 && days < 14) {
        shear = 0.9;
        shareElem.style.color = '#f24841';

    } else if (days >= 14 && days < 30) {
        shear = 0.85;
        shareElem.style.color = '#ff8a00';
    } else if (days >= 30) {
        shear = 0.75;
        shareElem.style.color = '#18b702';
    }

    return shear;
};

function getPrice(shear) {
    return parseInt(priceElem.getAttribute('data-info-price')) * shear;
};

function getRangeValue() {
    let rangeVal = calcRangeElem.value;

    days = rangeVal;
    shear = getShear(rangeVal);
    price = getPrice(shear);
    totalPrice = getTotalPrice(days, price);

    daysElem.innerHTML = days;
    shareElem.innerHTML = `${100 - (shear * 100)}%`;
    priceElem.innerHTML = `${new Intl.NumberFormat('ru-RU').format(price)}₽`;
    totalElem.innerHTML = `${new Intl.NumberFormat('ru-RU').format(totalPrice)}₽`;
};

calcRangeElem.addEventListener('input', getRangeValue);
getRangeValue();

// console.log(`${getTotalPrice()}₽`);
