document.addEventListener("DOMContentLoaded", function () {

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
        const listItems = select.querySelectorAll(".select__dropdown li");
        const input = select.querySelector("input[type='text']");
        const placeholderText = select.querySelector(".select__placeholder-text");

        if (!selectText || !dropdown || !input || !listItems.length) return;

        if (input.value) {
            const matchedItem = Array.from(listItems).find(item => item.textContent.trim() === input.value.trim());

            if (matchedItem) {
                listItems.forEach(li => li.classList.remove("active"));
                matchedItem.classList.add("active");

                selectText.textContent = matchedItem.textContent;

                if (placeholderText) {
                    placeholderText.classList.add("hidden");
                }

                select.classList.add("selected");
            }
        } else {
            input.value = selectText.textContent;
        }

        selectText.addEventListener("click", (event) => {
            event.stopPropagation();
            const isOpen = select.classList.contains("open");
            closeAll(event);
            select.classList.toggle("open", !isOpen);
            selectText.classList.toggle("open", !isOpen);
            dropdown.classList.toggle("show", !isOpen);
        });

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
        loop: false,
        slidesPerView: "auto",
        spaceBetween: false,
        slidesPerGroup: true,
        },
    767: {
        slidesPerView: 4,
        spaceBetween: false,
        },
    },
    navigation: {
        nextEl: "#services-slider-btns .swiper-button-next",
        prevEl: "#services-slider-btns .swiper-button-prev",
    },
});

/*- brand-catalog -*/
document.addEventListener('DOMContentLoaded', function () {
    const brandCatalog = document.getElementById('brand-catalog');
    
    if (!brandCatalog) return;

    const brandsList = brandCatalog.querySelector('.brands-list');
    const btn = brandCatalog.querySelector('.btn');

    if (!brandsList || !btn) return;

    btn.addEventListener('click', function () {
        brandsList.classList.toggle('show');

        btn.textContent = brandsList.classList.contains('show')
            ? 'Скрыть'
            : 'Показать все';
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
        loop: false,
        slidesPerView: "auto",
        spaceBetween: false,
        slidesPerGroup: true,
        },
    767: {
        slidesPerView: 4,
        spaceBetween: false,
        },
    },
    navigation: {
        nextEl: "#offers-slider-btns .swiper-button-next",
        prevEl: "#offers-slider-btns .swiper-button-prev",
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
        loop: false,
        slidesPerView: "auto",
        spaceBetween: false,
        slidesPerGroup: true,
        },
    767: {
        slidesPerView: 4,
        spaceBetween: false,
        },
    },
    navigation: {
        nextEl: "#products-slider-btns .swiper-button-next",
        prevEl: "#products-slider-btns .swiper-button-prev",
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
        loop: false,
        slidesPerView: "auto",
        spaceBetween: false,
        slidesPerGroup: true,
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
        nextEl: "#masters-slider-btns .swiper-button-next",
        prevEl: "#masters-slider-btns .swiper-button-prev",
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

    const phoneInputs = document.querySelectorAll('.phone-input');
    if (!phoneInputs.length) return;

    phoneInputs.forEach(formatPhoneInput);
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
(function () {
    let isActive = false;
    let cleanup = null;

    function initReviews() {
        const reviewsList = document.querySelector('.reviews-list');
        if (!reviewsList) return;

        const allReviews = reviewsList.querySelectorAll('.review');
        if (!allReviews.length) return;

        const btnPanel = document.querySelector('.reviews-btn-panel');
        if (!btnPanel) return;

        allReviews.forEach((review, index) => {
            if (index >= 9) {
                review.classList.add('hidden');
            } else {
                review.classList.remove('hidden');
            }
        });

        const clickHandler = () => {
            allReviews.forEach(review => review.classList.remove('hidden'));
            btnPanel.classList.add('hidden');
            reviewsList.classList.add('no-dec');
        };

        btnPanel.addEventListener('click', clickHandler);

        isActive = true;
        cleanup = () => {
            btnPanel.removeEventListener('click', clickHandler);
            allReviews.forEach(review => review.classList.remove('hidden'));
            btnPanel.classList.remove('hidden');
            reviewsList.classList.remove('no-dec');
            isActive = false;
        };
    }

    function handleResize() {
        const isWide = window.innerWidth > 767;

        if (isWide && !isActive) {
            initReviews();
        } else if (!isWide && isActive) {
            cleanup?.();
        }
    }

    document.addEventListener('DOMContentLoaded', handleResize);
    window.addEventListener('resize', handleResize);
})();

/*- map -*/
if (document.getElementById('map')) {
    ymaps.ready(init);
}

function init() {
    const centerCoords = [55.646223, 37.385978];
    const secondCoords = [55.646452, 37.387981];

    const myMap = new ymaps.Map("map", {
        center: centerCoords,
        zoom: 16,
        controls: ['zoomControl']
    });

    // Отключаем лишние поведения по умолчанию
    myMap.behaviors.disable(['scrollZoom', 'dblClickZoom', 'ruler']);

    // Функция для управления тач-поведениям в зависимости от ширины
    function updateMapBehaviors() {
        if (window.innerWidth <= 767) {
            myMap.behaviors.disable(['drag', 'multiTouch']);
        } else {
            myMap.behaviors.enable(['drag', 'multiTouch']);
        }
    }

    // Вызовем при инициализации
    updateMapBehaviors();

    // И при изменении размера окна
    window.addEventListener('resize', updateMapBehaviors);

    // Маркеры
    const customPlacemark1 = new ymaps.Placemark(centerCoords, {
        hintContent: 'Recofe',
        balloonContent: 'Recofe: Ремонт кофемашин'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/map-location.svg',
        iconImageSize: [60, 68],
        iconImageOffset: [-30, -70]
    });

    const customPlacemark2 = new ymaps.Placemark(secondCoords, {
        hintContent: 'Второе место',
        balloonContent: 'Это второе интересное место'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/map-location.svg',
        iconImageSize: [60, 68],
        iconImageOffset: [-30, -70]
    });

    myMap.geoObjects.add(customPlacemark1);
    myMap.geoObjects.add(customPlacemark2);
}

/*- filter -*/
document.querySelectorAll('.filter__title-panel').forEach(panel => {
    panel.addEventListener('click', () => {
        panel.classList.toggle('close');

        const dropdown = panel.nextElementSibling;
        if (dropdown && dropdown.classList.contains('filter__dropdown')) {
            dropdown.classList.toggle('hidden');
        }
    });
});

/*- filter-vertical-scroll -*/
var swiper = new Swiper(".filter-vertical-scroll", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    mousewheel: true,
});

/*- masters-slider -*/
var swiper = new Swiper(".certificates-slider", {
    autoplay: false,
    autoHeight: false,
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: false,
    breakpoints: {
    0: {
        loop: false,
        slidesPerView: "auto",
        spaceBetween: false,
        slidesPerGroup: true,
        },
    767: {
        slidesPerView: 3,
        spaceBetween: false,
        },
    },
    navigation: {
        nextEl: "#certificates-slider-btns .swiper-button-next",
        prevEl: "#certificates-slider-btns .swiper-button-prev",
    },
});

/*- price-slider -*/
const priceGap = 1000;

document.querySelectorAll(".price-slider").forEach((container) => {
    const rangeInputs = container.querySelectorAll(".range-input input"),
        priceInputs = container.querySelectorAll(".price-input input"),
        progressBar = container.querySelector(".slider .progress");

    const [rangeMin, rangeMax] = rangeInputs;
    const [priceMin, priceMax] = priceInputs;

    const updateRangeStyles = () => {
        progressBar.style.left = (parseInt(rangeMin.value) / rangeMin.max) * 100 + "%";
        progressBar.style.right = 100 - (parseInt(rangeMax.value) / rangeMax.max) * 100 + "%";
    };

    const syncPriceToRange = (e) => {
        let min = parseInt(priceMin.value),
            max = parseInt(priceMax.value);

        if (max - min >= priceGap && max <= rangeMax.max) {
            if (e.target === priceMin) {
                rangeMin.value = min;
            } else {
                rangeMax.value = max;
            }
            updateRangeStyles();
        }
    };

    const syncRangeToPrice = (e) => {
        let min = parseInt(rangeMin.value),
            max = parseInt(rangeMax.value);

        if (max - min < priceGap) {
            if (e.target === rangeMin) {
                rangeMin.value = max - priceGap;
            } else {
                rangeMax.value = min + priceGap;
            }
        } else {
            priceMin.value = min;
            priceMax.value = max;
            updateRangeStyles();
        }
    };

    const restrictToDigits = (e) => {
        e.target.value = e.target.value.replace(/\D/g, "");
    };

    priceInputs.forEach((input) => {
        input.addEventListener("input", restrictToDigits);
        input.addEventListener("input", syncPriceToRange);
    });

    rangeInputs.forEach(input => input.addEventListener("input", syncRangeToPrice));
});

/*- info-list -*/
document.addEventListener('DOMContentLoaded', function () {
    const allInfoLists = document.querySelectorAll('.info-list');

    if (!allInfoLists.length) return;

    allInfoLists.forEach(infoList => {
        const items = infoList.querySelectorAll('.info-list__item');
        const toggleLink = infoList.querySelector('.info-list__all-link');

        if (!items.length || !toggleLink) return;

        const initialVisibleCount = 3;
        let expanded = false;

        items.forEach((item, index) => {
            if (index >= initialVisibleCount) {
                item.classList.add('hidden');
            }
        });

        toggleLink.addEventListener('click', function () {
            expanded = !expanded;

            items.forEach((item, index) => {
                if (index >= initialVisibleCount) {
                    item.classList.toggle('hidden', !expanded);
                }
            });

            toggleLink.textContent = expanded ? 'Скрыть' : 'Показать все';
        });
    });
});

/*- product-slider -*/
var swiper = new Swiper(".product-slider__sm", {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

var swiper2 = new Swiper(".product-slider__big", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*- user-info -*/
function loadPhoto() {
    var userPhoto = document.getElementById('user-photo');
    var fileInput = document.getElementById('file-input');
  
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        userPhoto.src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}

/*- accordion-services -*/
const serviceAccordions = document.querySelectorAll('.accordion-services .accordion-services__top-panel');

serviceAccordions.forEach(panel => {
    panel.addEventListener('click', function () {
        const currentItem = this.closest('.accordion-services__item');
        const currentContent = currentItem.querySelector('.accordion-services__content');
        const parentAccordion = currentItem.closest('.accordion-services');
        const allItems = parentAccordion.querySelectorAll('.accordion-services__item');

        allItems.forEach(item => {
            const topPanel = item.querySelector('.accordion-services__top-panel');
            const content = item.querySelector('.accordion-services__content');

            if (item !== currentItem) {
                topPanel.classList.remove('active');
                item.classList.remove('open');
                content.style.maxHeight = null;
            }
        });

        this.classList.toggle('active');
        currentItem.classList.toggle('open');

        if (currentContent.style.maxHeight) {
            currentContent.style.maxHeight = null;
        } else {
            currentContent.style.maxHeight = currentContent.scrollHeight + "px";
        }
    });
});

/*- models-slider -*/
var swiper = new Swiper(".models-slider", {
    autoplay: false,
    autoHeight: false,
    loop: true,
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: false,
    breakpoints: {
    0: {
        loop: false,
        slidesPerView: "auto",
        spaceBetween: false,
        slidesPerGroup: true,
        },
    767: {
        slidesPerView: 5,
        spaceBetween: false,
        },
    },
    navigation: {
        nextEl: "#models-slider-btns .swiper-button-next",
        prevEl: "#models-slider-btns .swiper-button-prev",
    },
});

/*- switch-input -*/
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".switch-input").forEach(switchInput => {
        const input = switchInput.querySelector("input");
        const numberDisplay = switchInput.querySelector(".switch-input__number");
        const btnAdd = switchInput.querySelector(".switch-input__add");
        const btnRemove = switchInput.querySelector(".switch-input__remove");

        const updateDisplay = (value) => {
            value = Math.max(0, Math.min(999, value));
            input.value = value;
            numberDisplay.textContent = value;
            btnRemove.classList.toggle("disabled", value === 0);
        };

        const initialValue = parseInt(input.value, 10) || 0;
        updateDisplay(initialValue);

        btnAdd.onclick = () => {
            let value = parseInt(input.value, 10) || 0;
            if (value < 999) {
                updateDisplay(value + 1);
            }
        };

        btnRemove.addEventListener("click", () => {
            let value = parseInt(input.value, 10) || 0;
            if (value > 0) {
                updateDisplay(value - 1);
            }
        });

        input.addEventListener("input", () => {
            const value = parseInt(input.value, 10);
            if (!isNaN(value)) {
                updateDisplay(value);
            }
        });
    });
});

/*- shopping-cart -*/
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.shopping-cart__left-col').forEach(el => {
    const checkboxList = el.querySelector('.shopping-cart__checkbox-list');
    el.classList.toggle('flex-start', !!checkboxList);
  });
});

/*- mobile-dropdown -*/
const mobileBtn = document.querySelector('.mobile-btn');
const mobileDropdown = document.querySelector('.mobile-dropdown');
const body = document.body;
const header = document.querySelector('.header');

if (mobileBtn && mobileDropdown && header) {
    mobileBtn.addEventListener('click', () => {
        const isOpen = mobileDropdown.classList.contains('show');

        if (isOpen) {
            mobileDropdown.classList.remove('show');
            header.classList.remove('active');
            mobileBtn.classList.remove('open');
        } else {
            mobileDropdown.classList.add('show');
            header.classList.add('active');
            mobileBtn.classList.add('open');
        }
    });
}

/*- mobile-menu -*/
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.mobile-menu__item');
    const body = document.body;

    menuItems.forEach(item => {
        const dropdown = item.querySelector('.mobile-menu__dropdown');
        const clickable = item.querySelector('.mobile-menu__item-in');

        if (dropdown && clickable) {
            clickable.addEventListener('click', (e) => {
                e.stopPropagation();
                const isActive = item.classList.contains('active');
                menuItems.forEach(i => i.classList.remove('active'));
                body.classList.remove('scroll-hidden');
                if (!isActive) {
                    item.classList.add('active');
                    body.classList.add('scroll-hidden');
                }
            });
        }
    });
});

/*- repair-calendar-slider -*/
var swiper = new Swiper(".repair-calendar-slider", {
    autoplay: false,
    autoHeight: false,
    loop: false,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: false,
    breakpoints: {
        0: {
            loop: false,
            slidesPerView: "auto",
            spaceBetween: false,
            slidesPerGroup: true,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: false,
        },
    },
    navigation: {
        nextEl: "#repair-calendar-slider-btns .swiper-button-next",
        prevEl: "#repair-calendar-slider-btns .swiper-button-prev",
    },
    on: {
        slideChange: updateMonthsPanel
    }
});

/*- months-panel -*/
function updateMonthsPanel() {
    if (!document.querySelector('.months-panel')) return;

    const monthsItems = document.querySelectorAll('.months-panel__item');
    const lineIn = document.querySelector('.months-panel__line-in');
    const container = document.querySelector('.months-panel__list');

    if (!monthsItems.length || !lineIn || !container || typeof swiper === 'undefined') return;

    const activeIndex = swiper.activeIndex;
    const slidesPerView = swiper.params.slidesPerView;
    const currentGroupIndex = Math.floor(activeIndex / slidesPerView);

    monthsItems.forEach(item => {
        item.classList.remove('active', 'passed');
    });

    for (let i = 2; i < monthsItems.length; i += 3) {
        if (Math.floor(i / 3) <= currentGroupIndex) {
            monthsItems[i].classList.add('active');
        }
    }

    const lastIndexInCurrentGroup = (currentGroupIndex + 1) * slidesPerView - 1;
    monthsItems.forEach((item, index) => {
        if (
            index <= lastIndexInCurrentGroup &&
            !item.classList.contains('selected')
        ) {
            item.classList.add('passed');
        }
    });

    const activeItems = document.querySelectorAll('.months-panel__item.active');
    if (activeItems.length > 0) {
        const lastActive = activeItems[activeItems.length - 1];
        const containerRect = container.getBoundingClientRect();
        const lastRect = lastActive.getBoundingClientRect();

        const widthInPixels = lastRect.right - containerRect.left;
        const totalWidth = containerRect.width;
        const percentWidth = (widthInPixels / totalWidth) * 100;
        lineIn.style.width = `${percentWidth}%`;
    } else {
        lineIn.style.width = `0%`;
    }
}

(function () {
    updateMonthsPanel();
})();

/*- malfunctions -*/
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.malfunctions');
    if (!container) return;

    const items = container.querySelectorAll('.malfunctions__item');
    const button = container.querySelector('.btn');

    let isActive = false;
    let isExpanded = false;

    function applyBehavior() {
        if (items.length <= 2) {
            button.style.display = 'none';
            return;
        }

        items.forEach((item, index) => {
            item.classList.toggle('hidden', index > 1);
        });

        button.textContent = 'Показать все';
        button.style.display = 'inline-block';
        isExpanded = false;

        button.addEventListener('click', toggleItems);
        isActive = true;
    }

    function removeBehavior() {
        items.forEach(item => item.classList.remove('hidden'));
        button.textContent = 'Показать все';
        button.style.display = 'none';

        button.removeEventListener('click', toggleItems);
        isActive = false;
    }

    function toggleItems() {
        isExpanded = !isExpanded;
        items.forEach((item, index) => {
            if (index > 1) {
                item.classList.toggle('hidden', !isExpanded);
            }
        });
        button.textContent = isExpanded ? 'Скрыть' : 'Показать все';
    }

    function handleResize() {
        if (window.innerWidth <= 767 && !isActive) {
            applyBehavior();
        } else if (window.innerWidth > 767 && isActive) {
            removeBehavior();
        }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
});

/*- footer__nav -*/
const navItems = document.querySelectorAll('.footer__nav-col-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('open')) {
            item.classList.remove('open');
        } else {
            navItems.forEach(i => i.classList.remove('open'));
            item.classList.add('open');
        }
    });
});

/*- filter-mobile -*/
(function () {
    const filterBtn = document.querySelector('.filter-mobile-btn');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.sidebar__close-btn');
    const body = document.body;

    let handlersActive = false;

    if (!filterBtn || !sidebar || !closeBtn || !body) return;

    function openSidebar() {
        sidebar.classList.add('show');
        body.classList.add('scroll-hidden');
    }

    function closeSidebar() {
        sidebar.classList.remove('show');
        body.classList.remove('scroll-hidden');
    }

    function addEventListeners() {
        if (!handlersActive) {
            filterBtn.addEventListener('click', openSidebar);
            closeBtn.addEventListener('click', closeSidebar);
            handlersActive = true;
        }
    }

    function removeEventListeners() {
        if (handlersActive) {
            filterBtn.removeEventListener('click', openSidebar);
            closeBtn.removeEventListener('click', closeSidebar);
            handlersActive = false;
        }
    }

    function checkViewport() {
        const width = window.innerWidth;
            if (width >= 320 && width <= 767) {
        addEventListeners();
        } else {
            removeEventListeners();
        closeSidebar();
        }
    }

    checkViewport();
    window.addEventListener('resize', checkViewport);
})();

/*- pricing-plans -*/
function initAccordion() {
  const titles = document.querySelectorAll('.pricing-plans__title');

  titles.forEach(title => {
    title.addEventListener('click', () => {
      const item = title.closest('.pricing-plans__item');
      const isAlreadyShown = item.classList.contains('show');
      document.querySelectorAll('.pricing-plans__item.show').forEach(openItem => {
        openItem.classList.remove('show');
      });

      if (!isAlreadyShown) {
        item.classList.add('show');
      }
    });
  });
}

function checkAccordionActivation() {
  if (window.innerWidth <= 767 && window.innerWidth >= 320) {
    initAccordion();
  }
}

document.addEventListener('DOMContentLoaded', checkAccordionActivation);

window.addEventListener('resize', () => {
    document.querySelectorAll('.pricing-plans__title').forEach(title => {
        const newTitle = title.cloneNode(true);
        title.parentNode.replaceChild(newTitle, title);
    });
    checkAccordionActivation();
});

/*- models-list -*/
document.addEventListener('DOMContentLoaded', function () {
    const minWidth = 320;
    const maxWidth = 767;

    function isInRange() {
        const width = window.innerWidth;
        return width >= minWidth && width <= maxWidth;
    }

    function setupModelList() {
    const container = document.querySelector('.models-list');
    if (!container) return;

    const items = container.querySelectorAll('.models-list__item');
    const button = container.querySelector('.btn');

    if (!items.length || !button) return;

    function applyInitialState() {
        items.forEach((item, index) => {
        if (index >= 2) {
            item.classList.add('hidden');
        } else {
            item.classList.remove('hidden');
            }
        });
        button.textContent = 'Показать все';
    }

    function toggleItems() {
        const isExpanded = button.textContent === 'Скрыть';
        if (isExpanded) {
            applyInitialState();
        } else {
        items.forEach(item => item.classList.remove('hidden'));
            button.textContent = 'Скрыть';
        }
    }

    if (isInRange()) {
        applyInitialState();
        button.addEventListener('click', toggleItems);
        }
    }

    setupModelList();

    window.addEventListener('resize', () => {
        location.reload();
    });
});

/*- modal -*/
const myModal = new HystModal({
    closeOnEsc: true,
    backscroll: true,      
});

/*- services-dropdown -*/
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector('.main-nav__services-link');
    const dropdown = document.querySelector('.services-dropdown');

    if (!toggleBtn || !dropdown) return;

    document.addEventListener("click", function (e) {
        const isClickOnButton = toggleBtn.contains(e.target);
        const isClickInsideDropdown = dropdown.contains(e.target);

        if (isClickOnButton) {
            const isOpen = dropdown.classList.contains("show");
            if (isOpen) {
                dropdown.classList.remove("show");
                toggleBtn.classList.remove("close");
            } else {
                dropdown.classList.add("show");
                toggleBtn.classList.add("close");
            }
        } else if (!isClickInsideDropdown) {
            dropdown.classList.remove("show");
            toggleBtn.classList.remove("close");
        }
    });
});

/*- services-dropdown-tabs -*/
document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".services-dropdown__nav li");
    const tabContents = document.querySelectorAll(".services-dropdown__item");

    tabButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(el => el.classList.remove("active"));
            tabContents.forEach(el => el.classList.remove("active"));
            btn.classList.add("active");
            tabContents[index].classList.add("active");
        });
    });
});

});