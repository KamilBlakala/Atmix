const navBtn = document.querySelector('.burger-btn');
const navBox = document.querySelector('.nav__mobile');
const navBoxItems = document.querySelectorAll('.nav__mobile-item');
const bars = document.querySelector('.fa-solid');
const brgBars = document.querySelector('.burger-btn__box');
const scrollUp = document.querySelector('.scrollUp');
const tabsItems = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
let tabPostion = 0;
const servicesTabs = document.querySelectorAll('[data-serv-target]');
const servicesContents = document.querySelectorAll('[data-serv-content]');
const footerYear = document.querySelector('.footer__year');
const containerLeftBtn = document.querySelector('.services__container-leftBtn');
const containerRightBtn = document.querySelector(
	'.services__container-rightBtn'
);
const handleNav = () => {
	navBox.classList.toggle('nav__mobile--active');
	navBoxItems.forEach((item) => {
		item.addEventListener('click', () => {
			navBox.classList.remove('nav__mobile--active');
			brgBars.classList.remove('open');
		});
	});
	brgBars.classList.toggle('open');
};
const scroll = () => {
	if (window.scrollY >= 545) {
		scrollUp.classList.add('scrollUp--active');
	} else {
		scrollUp.classList.remove('scrollUp--active');
	}
};
const scroltoUp = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
};
tabsItems.forEach((tab) => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.tabTarget);
		tabContents.forEach((tabContent) => {
			tabContent.classList.remove('prices__items--active');
		});
		tabsItems.forEach((tab) => {
			tab.classList.remove('prices__tab--active');
		});
		tab.classList.add('prices__tab--active');
		target.classList.add('prices__items--active');
	});
});

servicesTabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.servTarget);
		servicesContents.forEach((servContent) => {
			servContent.classList.remove('services__container-box--active');
		});
		servicesTabs.forEach((tab) => {
			tab.classList.remove('services__tab--active');
		});
		tab.classList.add('services__tab--active');
		target.classList.add('services__container-box--active');
		if (target.classList.contains('livingroom')) {
			tabPostion = 0;
		} else if (target.classList.contains('kitchen')) {
			tabPostion = 1;
		} else if (target.classList.contains('bathroom')) {
			tabPostion = 2;
		} else if (target.classList.contains('bedroom')) {
			tabPostion = 3;
		}
	});
});

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

const updateServicesPosition = () => {
	for (let tab of servicesTabs) {
		tab.classList.remove('services__tab--active');
	}
	for (let tab of servicesContents) {
		tab.classList.remove('services__container-box--active');
	}
	servicesTabs[tabPostion].classList.add('services__tab--active');
	servicesContents[tabPostion].classList.add('services__container-box--active');
};
const RightBtnContainer = () => {
	if (tabPostion === servicesTabs.length - 1) {
		tabPostion = 0;
	} else {
		tabPostion++;
	}
	updateServicesPosition();
};
const leftBtnContainer = () => {
	if (tabPostion === 0) {
		tabPostion = servicesTabs.length - 1;
	} else {
		tabPostion--;
	}
	updateServicesPosition();
};
scrollUp.addEventListener('click', scroltoUp);
navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', scroll);
containerLeftBtn.addEventListener('click', leftBtnContainer);
containerRightBtn.addEventListener('click', RightBtnContainer);
// pricesItem1.addEventListener('click', item1Action);
// pricesItem2.addEventListener('click', item2Action);
