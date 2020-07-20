let pins = [
    [
        [
            'Розовый сад, Академика Губкина, 39/2',
            45.12817907457801, 38.962808499999966
        ],
        [
            '3/9 Царство, Берлизова, 67/2',
            45.126494074573685, 38.971423500000014
        ],
        [
            'Мишутка, ​Виноградная (ст Садовод-2), 7',
            45.13156207458671, 38.98018199999992
        ],
        [
            'Андерсен, ​​Средняя, 32/31',
            45.11682657457437, 38.93927249999998
        ],
        [
            'Винни Пух, Семёновская улица, 112',
            45.107611, 38.938633
        ],
        [
            'Дружба, ​​​Баварская, 2',
            45.12194574908679, 38.92497237391686
        ]
    ],
    //
    [
        [
            'Школа №65, ​Дорожная, 1',
            45.124344574593785, 38.983020500000016
        ],
        [
            'Школа №99, ​Баварская, 14',
            45.1205037350057, 38.92344796041664
        ],
        [
            'Школа №96, ​Кореновская, 35',
            45.10005857458252, 38.97579799999997
        ]
    ],
    //
    [
        [
            'Аптека №1, Пригородная, 29',
            45.12671007457421, 38.95537049999992
        ],
        [
            'SOS, ​Средняя улица, 81/4',
            45.101060, 38.929875
        ],
        [
            'Кварта, ​Пригородная, 107',
            45.12501207456987, 38.969967999999966
        ]
    ],
    //
    [
        [
            'Детская городская поликлиника №6, ​Александра Покрышкина, 16',
            45.10161057458651, 38.976651499999974
        ],
        [
            'Городская поликлиника №13, Силантьева, 76/1',
            45.11646457457344, 38.99734849999998
        ],
        [
            'Городская поликлиника №8, ​Тихая 9-я',
            45.13756751301341, 38.99668399999998
        ]

    ],
    //
    [

        [
            'Магнит, ул. Александра Покрышкина, 3',
            45.107494846844226, 38.94941896354793
        ],
        [
            'Магнит, ул. Раздельная улица, 35',
            45.12665780596282, 38.997252404992665
        ],
        [
            'Магнит, ул. Изосимова, 20',
            45.128762970799016, 38.97074322781451
        ],
        [
            'Магнит, ул. Народный переулок, 2/1',
            45.126575638702384, 38.95289044461139
        ],
        [
            'Пятерочка, ул. Героя Хабибуллина, 6',
            45.101445, 38.948417
        ]
    ],
    //
    [
        [
            'Золотой Город, Звенигородский 3-й проезд, 41',
            45.12499957459544, 38.96520699999997
        ]
    ],
    //
    [
        [
            'ЖК Лиговский',
            45.10086693208927, 38.948956878743914
        ],
        [
            'Дачи',
            45.10184135380896, 38.9417486229205
        ],
        [
            'Голубиная улица',
            45.1255103875602, 38.945317869824635
        ],
        [
            'Улица Исаева',
            45.12634915390719, 38.9542179416395
        ],
    ],
    //
    [
        [
            'Центр фитнеса и спорта, Средняя, 32/34',
            45.1173355745757, 38.93966799999998
        ],
        [
            'Maksimus, Кореновская улица, 15/1',
            45.099885, 38.971628
        ],
        [
            'FitnessGO, ​Хлебосольная, 16',
            45.13221707458837, 38.98970400000002
        ]
    ],
    //
    [
        [
            '<a href="/persikovaya-29"> ул.Персиковая 29 </a> <br> <a href="/persikovaya-29-1"> ул.Персиковая 29/1 </a>',
            45.102826, 38.942057,
            'persikovaya-29'
        ],
        [
            '<a href="/sadovaya-90"> ул.Садовая 90 </a>',
            45.098029, 38.940521,
            'sadovaya-90'
        ],
        [
            '<a href="/sirenevaya-35a"> ул.Сиреневая 35А</a>',
            45.129489, 38.949747,
            'sirenevaya-35a'
        ],
        [
            '<a href="/romashkovaya-37-1"> ул.Ромашковая 37/1 </a>',
            45.128039, 38.949046,
            'romashkovaya-37'
        ]
    ]
];

let markers = [];


function initMap() {
    let firstLoad = true;
    let location = {
        lat: 45.12653261173157,
        lng: 38.97667218774406
    };

    const map = new google.maps.Map(document.querySelector('#map'), {
        zoom: 13,
        center: location,
        disableDefaultUI: true,
        styles: [{
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.attraction",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.business",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.government",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.medical",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.place_of_worship",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.school",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.sports_complex",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            }
        ]
    });


    document.querySelector('#map').removeEventListener('click', initMap);
    setPins();

    function setPins() {
        let pinsIcons = document.querySelectorAll('.icons__item[data-pin-id]');
        let pinsInputs = document.querySelectorAll('input[data-pin-id]');

        for (let i = 0; i < pins.length; i++) {
            markers.push(i);
            markers[i] = [];

            for (let k = 0; k < pins[i].length; k++) {

                let marker = new google.maps.Marker({
                    position: {
                        lat: pins[i][k][1],
                        lng: pins[i][k][2]
                    },
                    title: pins[i][k][0],
                    icon: `/img/map/n-${i + 1}.png`
                });

                let content = ''

                if (pins[i][k][3]) {
                    content += `<div class='map__pin'><span>${marker.title}</span></div>`;
                } else {
                    content += `<div class='map__pin'><span>${marker.title}</span></div>`;
                }


                let infowindow = new google.maps.InfoWindow({
                    content: content
                });

                console.log(pins[i][k][3]);

                if (document.body.getAttribute('data-house-id') === pins[i][k][3]) {
                    infowindow.open(map, marker);
                }

                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });

                markers[i].push(marker);
            };

        };

        pinsInputs.forEach((item) => {
            let id = item.getAttribute('data-pin-id');
            item.addEventListener('click', () => {
                togglePin(id);
            });
        });
        pinsIcons.forEach((item) => {
            let id = item.getAttribute('data-pin-id');
            item.addEventListener('click', () => {
                togglePin(id);
            });
        });

        togglePin('1');
        togglePin('9');
        firstLoad = false;

        function togglePin(id) {
            let pinElems = document.querySelectorAll(`[data-pin-id='${id}']`);

            pinElems.forEach((item) => {
                if (item.getAttribute('data-pin-active') == '0') {

                    item.setAttribute('data-pin-active', '1');
                    item.checked = true;

                    markers[id - 1].forEach((item) => {
                        item.setMap(map);
                    });
                } else {
                    item.setAttribute('data-pin-active', '0');
                    item.checked = false;

                    markers[id - 1].forEach((item) => {
                        item.setMap(null);
                    });
                };
            });

        };

    };
};
// setTimeout(initMap, 1000);

function initializeMapClick() {
    let firstLoad = true;

    window.addEventListener('scroll', () => {
        let rect = document.querySelector('#map').getBoundingClientRect();
        if (rect.top < 2000 && firstLoad === true) {
            firstLoad = false;
            initMap();
        }
    });
};
