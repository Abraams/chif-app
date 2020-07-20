$("form[data-form='order']").submit(function() {
    let uStreet = $('[name="user_street"]').val();
    let uDom = $('[name="user_dom"]').val();
    let uCorp = $('[name="user_corp"]').val();
    let uRoom = $('[name="user_room"]').val();
    let uPorch = $('[name="user_porch"]').val();
    let uFloor = $('[name="user_floor"]').val();
    let uName = $('[name="user_name"]').val();
    let uTel = $('[name="user_tel"]').val();
    let uPay = $('[name="user_pay"]').val();
    let fTotol = $('[name="form_total"]').val();
    let fSubject = $('[name="msg_subject"]').val();


    let th = $(this);
    let id = th.attr('data-modal-metrica');
    let submitBtn = th.children('.modal__btn');
    $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: {
            'user_street': uStreet,
            'user_dom': uDom,
            'user_corp': uCorp,
            'user_room': uRoom,
            'user_porch': uPorch,
            'user_floor': uFloor,
            'user_name': uName,
            'user_tel': uTel,
            // 'user_pay' : uPay,
            'form_total': fTotol,
            'msg_subject': fSubject,
            'orderList': orderList
        }
    }).done(function formSubmit() {
        // fbq('track', 'Lead', {
        // 	content_name: 'Отправка формы'
        // });
        // submitBtn.disabled = true;
        // yaCounter56880541.reachGoal(id);
        setTimeout(function() {
            th.trigger("reset");
            closeModal();
            document.querySelector('#modal-thx').classList.remove('_hidden');
            setTimeout(function() {
                document.querySelector('#modal-thx').classList.add('_hidden');
                cart = [];
                openCartBtn.classList.remove('_active');
            }, 2500);
            return true;
        }, 1000);
    });
    return false;
});

function changeCatalogCounter(currentSlide = 0) {
    // Функция смены каунтера слайдера
    let catalogSlides = document.querySelectorAll('.offer .slider__item');
    let catalogCount = document.querySelector('#slider-counter');
    let current;
    let total;

    if (currentSlide < 10) {
        current = '0' + ++currentSlide;
    } else {
        current = ++currentSlide;
    }

    if (catalogSlides.length < 10) {
        total = '0' + catalogSlides.length;
    } else {
        total = '0' + catalogSlides.length;
    }

    let counter = `
				<span class="curent --fz-50 --fw-700 _hl">${current}</span>
				<span class="slash --fz-25 --fw-700 _hl">/</span>
				<span class="total --fz-25 --fw-700">${total}</span>`;

    catalogCount.innerHTML = counter;
}

$('#offer-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    changeCatalogCounter(currentSlide);
});


const questions = document.querySelectorAll('[data-question]');

function toggleQestion() {
    questions.forEach(item => {
        item.classList.add('_hidden');
    });

    this.classList.remove('_hidden');

};

questions.forEach(item => {
    item.addEventListener('click', toggleQestion);
});

//


function rNum(min = 0, max = 16) {
    return Math.random() * (max - min) + min;
};


let paralaxImg = document.querySelectorAll('.paralax img');

if (window.innerWidth > 1601) {

    paralaxImg.forEach(item => {
        let iX = rNum(rNum(10, 25), rNum(35, 55));
        let iY = rNum(rNum(10, 25), rNum(35, 55));



        item.setAttribute('data-paralax-x', iX / 3.5);
        item.setAttribute('data-paralax-y', iY / 3.5);
    });
};

window.addEventListener('mousemove', e => {
    if (window.innerWidth > 1601) {
        let posX = e.clientX / window.innerWidth;
        let posY = e.clientY / window.innerHeight;

        paralaxImg.forEach(item => {
            let iX = item.getAttribute('data-paralax-x');
            let iY = item.getAttribute('data-paralax-y');

            item.style.cssText = `
				transform: translate(${posX * iX}px, ${posY * iY}px);
			`;
        });
    };
});

//
document.addEventListener('DOMContentLoaded', () => {

    changeCatalogCounter();

    $('#offer-slider').slick({
        infinite: true,
        fade: true,
        dots: true,
        cssEase: 'ease-in-out',
        speed: 600,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        slidesToShow: 1,
        swipeToSlide: true,
        responsive: [{
            breakpoint: 1202,
            settings: {
                dots: false
            }
        }]
    });

    $('#reviews-slider').slick({
		fade: true,
        infinite: false,
        dots: true,
        arrows: false,
        speed: 600,
        slidesToShow: 1,
		slidesToScroll: 1,
        lazyLoad: 'ondemand',
        prevArrow: '<button type="button" class="slick-prev"><img src="/img/icons/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/img/icons/next.png"></button>',
        responsive: [{
                breakpoint: 1201,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 602,
                settings: {
                    arrows: false,
                    dots: false,
                }
            },
        ]
    });

});
