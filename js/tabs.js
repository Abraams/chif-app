const tabsBtn = document.querySelectorAll('[data-tabs-btn]');

function selectProgTab() {
    const tabsGroup = this.getAttribute('data-tabs-btn');
    const tab = document.querySelector(`[data-tabs-tab='${tabsGroup}']`);
    const tabName = this.getAttribute('data-tab-name');
    const tabPrice = this.getAttribute('data-tab-price');

    const priceElem = document.querySelector('[data-info-price]');

    // Записываем название и цену программы в дата атрибуты вкладки
    if (tabName == 'Detox') {
        document.querySelector('[data-tab-range]').setAttribute('min', 0);
        document.querySelector('[data-tab-range]').setAttribute('step', 5);
    } else {
		document.querySelector('[data-tab-range]').setAttribute('min', 1);
        document.querySelector('[data-tab-range]').setAttribute('step', 1);

    }


    tab.setAttribute('data-tab-name', tabName);
    tab.setAttribute('data-tab-price', tabPrice);

    // Записываем название и цену программы в спаны
    priceElem.setAttribute('data-info-price', tabPrice);
    // Рассчитываем total
    getRangeValue();

    tabsBtn.forEach(item => {
        item.classList.remove('_active');
    });

    this.classList.add('_active');
};


function selectMenuTab() {
    let tabsGroup = this.getAttribute('data-tabs-btn');
    const tabs = document.querySelectorAll(`[data-tabs-tab='${tabsGroup}']`);
    const daysBtns = document.querySelectorAll(`[data-day-id]`);
    const weeksBtns = document.querySelectorAll(`[data-week-id]`);


    let nextDay = '';
    let nextWeek = '';


    if (this.hasAttribute('data-day-id')) {
        daysBtns.forEach(item => {
            item.classList.remove('_active');
        });

        this.classList.add('_active');

        nextDay = this.getAttribute('data-day-id');
        weeksBtns.forEach(item => {
            if (item.classList.contains('_active')) {
                nextWeek = item.getAttribute('data-week-id');
            }
        });
    } else {
        weeksBtns.forEach(item => {
            item.classList.remove('_active');
        });

        this.classList.add('_active');

        nextWeek = this.getAttribute('data-week-id');

        daysBtns.forEach(item => {
            if (item.classList.contains('_active')) {
                nextDay = item.getAttribute('data-day-id');
            }
        });
    };

    let nextTabId = nextWeek + nextDay

    tabs.forEach(item => {
        item.classList.remove('_active');


        if (item.getAttribute('data-tab-id') == nextTabId) {
            item.classList.add('_active');
        }
    });



}

document.addEventListener('DOMContentLoaded', () => {
    tabsBtn.forEach(item => {
        let tabsGroup = item.getAttribute('data-tabs-btn');

        if (tabsGroup == 'program') {
            item.addEventListener('click', selectProgTab);
        } else if (tabsGroup == 'menu') {
            item.addEventListener('click', selectMenuTab);
        }
    });
});
