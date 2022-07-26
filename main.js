const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header = $('.header')
const slider = $('.slider');
const modal = $('.modal');
const modalContainer = $('.modal__container');
const menuBtn = $('.mobile__bars-btn');
const sliderHeading = $('.slider__heading');
const sliderDescription = $('.slider__description');

const sliderInfo = [
    {
        path: 'assets/images/chicago.jpg',
        heading: 'Chicago',
        description: 'Thank you, Chicago - A night we won\'t forget'
    },
    {
        path: 'assets/images/la.jpg',
        heading: 'Los Angeles',
        description: 'We had the best time playing at Venice Beach!'
    },
    {
        path: 'assets/images/ny.jpg',
        heading: 'New York',
        description: 'The atmosphere in New York is lorem ipsum.'
    }
];

//Random a slider:
var index = Math.floor(Math.random()*sliderInfo.length);

function updateSlide() {
    slider.style.background = `url(${sliderInfo[index].path}) top center / cover no-repeat`;
    sliderHeading.innerText = sliderInfo[index].heading;
    sliderDescription.innerText = sliderInfo[index].description;

    index++;
    if(index == sliderInfo.length) {
        index = 0;
    }
}

updateSlide();
setInterval(updateSlide, 5000);

//Click menu button:
menuBtn.onclick = function() {
    header.classList.toggle('has__overflow');
};

//Buy tickets - Modal

const buyBtns = $$('.buyTicket-btn');
const closeBtn = $('.close__btn');
const closeBtn_main = $('.close__btn-main');

function showBuyTickets() {
    modal.classList.add('open');
}

function hideBuyTickets() {
    modal.classList.remove('open');
}

closeBtn.onclick = hideBuyTickets;
closeBtn_main.onclick = hideBuyTickets;

for(const buyBtn of buyBtns)    {
    buyBtn.addEventListener('click', showBuyTickets);
}

modal.onclick = hideBuyTickets;

modalContainer.onclick = function(event)    {
    event.stopPropagation();
}