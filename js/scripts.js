/*- select -*/
document.addEventListener("DOMContentLoaded", () => {
    const allSelects = document.querySelectorAll(".select");

    if (!allSelects.length) return;

    function closeAll(event) {
        allSelects.forEach(select => {
            if (!select.contains(event.target)) {
                select.classList.remove("open");
                const dropdown = select.querySelector(".select__dropdown");
                const selectText = select.querySelector(".select__text");
                if (dropdown) dropdown.classList.remove("show");
                if (selectText) selectText.classList.remove("open");
            }
        });
    }

    allSelects.forEach(select => {
        const selectText = select.querySelector(".select__text");
        const dropdown = select.querySelector(".select__dropdown");

        if (!selectText || !dropdown) return;

        selectText.addEventListener("click", (event) => {
            event.stopPropagation();
            const isOpen = select.classList.contains("open");
            closeAll(event);
            select.classList.toggle("open", !isOpen);
            selectText.classList.toggle("open", !isOpen);
            dropdown.classList.toggle("show", !isOpen);
        });

        const listItems = select.querySelectorAll(".select__dropdown li");
        const input = select.querySelector("input[type='text']");
        const placeholderText = select.querySelector(".select__placeholder-text");

        if (listItems.length) {
            input.value = selectText.textContent;

            listItems.forEach(item => {
                item.addEventListener("click", (event) => {
                    event.stopPropagation();
                    listItems.forEach(li => li.classList.remove("active"));
                    item.classList.add("active");

                    selectText.textContent = item.textContent;
                    input.value = item.textContent;

                    if (placeholderText) {
                        placeholderText.classList.add("hidden");
                    }
                    select.classList.add("selected");

                    select.classList.remove("open");
                    dropdown.classList.remove("show");
                });
            });
        }
    });

    document.addEventListener("click", closeAll);
});

/*- vertical-scroll -*/
var swiper = new Swiper(".vertical-scroll", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    mousewheel: true,
});

/*- services-slider -*/
var swiper = new Swiper(".services-slider", {
    autoplay: false,
    autoHeight: false,
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: false,
    breakpoints: {
    0: {
        slidesPerView: 2,
        spaceBetween: false,
        slidesPerGroup: 2,
        },
    460: {
        slidesPerView: 2,
        spaceBetween: false,
        slidesPerGroup: 2,
        },
    767: {
        slidesPerView: 4,
        spaceBetween: false,
        },
    1079: {
        slidesPerView: 4,
        spaceBetween: false,
        },
    },
    navigation: {
        nextEl: "#services-slder-btns .swiper-button-next",
        prevEl: "#services-slder-btns .swiper-button-prev",
    },
});

/*- brand-catalog -*/
document.addEventListener('DOMContentLoaded', function () {
    const brandCatalog = document.getElementById('brand-catalog');
    const brandsList = brandCatalog.querySelector('.brands-list');
    const btn = brandCatalog.querySelector('.btn');

    btn.addEventListener('click', function() {
        brandsList.classList.toggle('show');

        if (brandsList.classList.contains('show')) {
            btn.textContent = 'Скрыть';
        } else {
            btn.textContent = 'Показать все';
        }
    });
});

/*- tabs -*/
document.addEventListener("DOMContentLoaded", function () {
    const allTabs = document.querySelectorAll(".tabs");

    allTabs.forEach(tabsBlock => {
        const tabButtons = tabsBlock.querySelectorAll(".tabs__nav li");
        const tabItems = tabsBlock.querySelectorAll(".tabs__item");

        tabButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                tabButtons.forEach(btn => btn.classList.remove("active"));
                tabItems.forEach(item => item.classList.remove("active"));
                button.classList.add("active");
                tabItems[index].classList.add("active");
            });
        });
    });
});

/*- offers-slider -*/
var swiper = new Swiper(".offers-slider", {
    autoplay: false,
    autoHeight: false,
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: false,
    breakpoints: {
    0: {
        slidesPerView: 2,
        spaceBetween: false,
        slidesPerGroup: 2,
        },
    460: {
        slidesPerView: 2,
        spaceBetween: false,
        slidesPerGroup: 2,
        },
    767: {
        slidesPerView: 2,
        spaceBetween: false,
        },
    },
    navigation: {
        nextEl: "#offers-slder-btns .swiper-button-next",
        prevEl: "#offers-slder-btns .swiper-button-prev",
    },
});

/*- accordion -*/
const accordions = document.querySelectorAll('.accordion__title-panel');

accordions.forEach(accordion => {
    accordion.addEventListener('click', function () {
        const currentAccordionItem = this.closest('.accordion__item');
        const currentPanel = this.nextElementSibling;

        accordions.forEach(otherAccordion => {
            if (otherAccordion !== this) {
                otherAccordion.classList.remove('active');
                const otherItem = otherAccordion.closest('.accordion__item');
                const otherPanel = otherAccordion.nextElementSibling;

                if (otherItem) otherItem.classList.remove('open');
                if (otherPanel) otherPanel.style.maxHeight = null;
            }
        });

        this.classList.toggle('active');
        if (currentAccordionItem) currentAccordionItem.classList.toggle('open');

        if (currentPanel.style.maxHeight) {
            currentPanel.style.maxHeight = null;
        } else {
            currentPanel.style.maxHeight = currentPanel.scrollHeight + "px";
        }
    });
});

/*- products-slider -*/
var swiper = new Swiper(".products-slider", {
    autoplay: false,
    autoHeight: false,
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: false,
    breakpoints: {
    0: {
        slidesPerView: 2,
        spaceBetween: false,
        slidesPerGroup: 2,
        },
    460: {
        slidesPerView: 2,
        spaceBetween: false,
        slidesPerGroup: 2,
        },
    767: {
        slidesPerView: 4,
        spaceBetween: false,
        },
    1079: {
        slidesPerView: 4,
        spaceBetween: false,
        },
    },
    navigation: {
        nextEl: "#products-slder-btns .swiper-button-next",
        prevEl: "#products-slder-btns .swiper-button-prev",
    },
});

/*- masters-slider -*/
var swiper = new Swiper(".masters-slider", {
    autoplay: false,
    autoHeight: false,
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: false,
    breakpoints: {
    0: {
        slidesPerView: 2,
        spaceBetween: false,
        slidesPerGroup: 2,
        },
    460: {
        slidesPerView: 2,
        spaceBetween: false,
        slidesPerGroup: 2,
        },
    767: {
        slidesPerView: 4,
        spaceBetween: false,
        },
    1079: {
        slidesPerView: 4,
        spaceBetween: false,
        },
    },
    navigation: {
        nextEl: "#masters-slder-btns .swiper-button-next",
        prevEl: "#masters-slder-btns .swiper-button-prev",
    },
});

/*- phone-input -*/
document.addEventListener('DOMContentLoaded', () => {
    const formatPhoneInput = (phoneInput) => {
        phoneInput.addEventListener('input', () => {
            let value = phoneInput.value.replace(/\D/g, '');

            if (value.startsWith('7')) {
                value = '8' + value.slice(1);
            } else if (!value.startsWith('8')) {
                value = '8' + value;
            }

            value = value.slice(0, 11);

            let formatted = '8';

            if (value.length > 1) {
                formatted += ' (' + value.slice(1, 4);
            }
            if (value.length >= 4) {
                formatted += ') ' + value.slice(4, 7);
            }
            if (value.length >= 7) {
                formatted += '-' + value.slice(7, 9);
            }
            if (value.length >= 9) {
                formatted += '-' + value.slice(9, 11);
            }

            phoneInput.value = formatted;
        });

        phoneInput.addEventListener('keydown', (event) => {
            const cursorPosition = phoneInput.selectionStart;
            const value = phoneInput.value;

            if (event.key === 'Backspace' && cursorPosition === 1) {
                event.preventDefault();
            }

            if (event.key === 'Backspace' && /\D/.test(value[cursorPosition - 1])) {
                event.preventDefault();
                let newValue = value.slice(0, cursorPosition - 1) + value.slice(cursorPosition);
                phoneInput.value = newValue;
                phoneInput.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
            }
        });

        phoneInput.addEventListener('focus', () => {
            if (!phoneInput.value.startsWith('8')) {
                phoneInput.value = '8';
            }
        });

        phoneInput.addEventListener('blur', () => {
            if (phoneInput.value === '8') {
                phoneInput.value = '';
            }
        });
    };

    document.querySelectorAll('.phone-input').forEach(formatPhoneInput);
});

/*- gl-tabs -*/
document.addEventListener("DOMContentLoaded", function () {
    const allTabs = document.querySelectorAll(".gl-tabs");

    allTabs.forEach(tabsBlock => {
        const tabButtons = tabsBlock.querySelectorAll(".gl-tabs__nav li");
        const tabItems = tabsBlock.querySelectorAll(".gl-tabs__item");

        tabButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                tabButtons.forEach(btn => btn.classList.remove("active"));
                tabItems.forEach(item => item.classList.remove("active"));
                button.classList.add("active");
                tabItems[index].classList.add("active");
            });
        });
    });
});

/*- reviews-list -*/
document.addEventListener('DOMContentLoaded', () => {
    const reviewsList = document.querySelector('.reviews-list');
    const allReviews = reviewsList.querySelectorAll('.review');
    const btnPanel = document.querySelector('.reviews-btn-panel');

    allReviews.forEach((review, index) => {
        if (index >= 9) {
            review.classList.add('hidden');
        } else {
            review.classList.remove('hidden');
        }
    });

    if (btnPanel) {
        btnPanel.addEventListener('click', () => {
            allReviews.forEach(review => review.classList.remove('hidden'));
            btnPanel.classList.add('hidden');
            reviewsList.classList.add('no-dec');
        });
    }
});

/*- map -*/
if (document.getElementById('map')) {
    ymaps.ready(init);
}

function init() {
    // Координаты для центра карты
    const centerCoords = [55.646223, 37.385978];
    const secondCoords = [55.646452, 37.387981];

    // Создаём карту
    const myMap = new ymaps.Map("map", {
        center: centerCoords,
        zoom: 16,
        controls: ['zoomControl']
    });

    myMap.behaviors.disable(['scrollZoom', 'multiTouch', 'dblClickZoom', 'ruler']);

    // Первый маркер
    const customPlacemark1 = new ymaps.Placemark(centerCoords, {
        hintContent: 'Recofe',
        balloonContent: 'Recofe: Ремонт кофемашин'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/map-location.svg',
        iconImageSize: [60, 68],
        iconImageOffset: [-30, -70]
    });

    // Второй маркер
    const customPlacemark2 = new ymaps.Placemark(secondCoords, {
        hintContent: 'Второе место',
        balloonContent: 'Это второе интересное место'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/map-location.svg', // Можно указать другой путь к иконке
        iconImageSize: [60, 68],
        iconImageOffset: [-30, -70]
    });

    // Добавляем оба маркера на карту
    myMap.geoObjects.add(customPlacemark1);
    myMap.geoObjects.add(customPlacemark2);
}