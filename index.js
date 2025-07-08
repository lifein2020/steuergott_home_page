import './index.css'

  // // core version + navigation, pagination modules:
  // import Swiper, { Navigation, Pagination } from 'swiper';
  // // import Swiper and modules styles
  // import 'swiper/css';
  // import 'swiper/css/navigation';
  // import 'swiper/css/pagination';

// modal pop-up of a YouTube video for the button “Video ansehen”

const popupVideo = document.querySelector('.popup_type_video'),
      buttonOpenVideo = document.querySelector('.left__button-watch');

const openPopup = (popup) => {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleKeydownPopup);
}

const openPopupVideo = () => {
  openPopup(popupVideo);
}

const closePopup = (popup) => {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleKeydownPopup);
}

const handleKeydownPopup = (evt) => {
  const key = evt.key;
  if(key === 'Escape') {
    const popupOpened = document.querySelector('.popup_is-opened');
    closePopup(popupOpened);
  }
}

const closePopupOverlay = (evt) => {
  if (evt.target.classList.contains('popup')) {
      closePopup(evt.target);
    };
}

buttonOpenVideo.addEventListener('click', openPopupVideo);
popupVideo.addEventListener('mousedown', closePopupOverlay);


// slider for the section “Das sagen unsere Kunden”

const prev = document.querySelector('.slide__btn_prev'),
      next = document.querySelector('.slide__btn_next'),
      slides = document.querySelectorAll('.slide');

let index = 0;

const activeSlide = n => {
  let slide;
  for (slide of slides) {
    slide.classList.remove('slide_active');
  }
  slides[n].classList.add('slide_active');
}

const activeSlideRight = n => {
  let slide;
  for (slide of slides) {
    slide.classList.remove('slide_active_right');
    slide.classList.remove('slide_active_left');
  }
  slides[n].classList.add('slide_active_right');
}

const activeSlideLeft = n => {
  let slide;
  for (slide of slides) {
    slide.classList.remove('slide_active_right');
    slide.classList.remove('slide_active_left');
  }
  slides[n].classList.add('slide_active_left');
}

const nextSlide = () => {
  if(index == slides.length - 1) {
    index = 0;
    activeSlide(index);
    activeSlideRight(index);
  } else {
      index++;
      activeSlide(index);
      activeSlideRight(index);
  }
}

const prevSlide = () => {
  if(index == 0) {
    index = slides.length - 1;
    activeSlide(index);
    activeSlideLeft(index);
  } else {
    index--;
    activeSlide(index);
    activeSlideLeft(index);
  }
}

setInterval(prevSlide, 3500);

//*** 1 ***/
// const activeSlideRight = n => {
//   for (slide of slides) {
//     slide.classList.remove('slide_active');
//     slide.classList.remove('slide_active_right');
//   }
//   slides[n].classList.add('slide_active_right');
// }

// const nextSlideAuto = () => {
//   if(index == slides.length - 1) {
//     index = 0;
//     activeSlideRight(index);
//   } else {
//       index++;
//     activeSlideRight(index);
//   }
// }
// setTimeout(nextSlideAuto, 3000);

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


// Burger menu on smaller devices

const hamburger = document.querySelector('.hamburger'),
      navMenu = document.querySelector('.header__container-menu-items'),
      links = document.querySelectorAll('.header__container-menu-link'),
      body = document.querySelector('.body');

const toggleMenu = () => {
  hamburger.classList.toggle('hamburger_active');
  navMenu.classList.toggle('header__container-menu-items_active');
  body.classList.toggle('body_noscroll');
}

const activePageLink = (k) => {
  links.forEach(k => {
    k.classList.remove('header__container-menu-link_active');
  });
  links[k].classList.add('header__container-menu-link_active');
}

const closeBurgerMenu = () => {
  hamburger.classList.remove('hamburger_active');
  navMenu.classList.remove('header__container-menu-items_active');
  body.classList.remove('body_noscroll');
}


hamburger.addEventListener('click', toggleMenu);

links.forEach(n => {
  n.addEventListener('click', activePageLink);
});

links.forEach(n => {
  n.addEventListener('click', closeBurgerMenu)
});

  // // init Swiper:
  // const swiper = new Swiper('.swiper', {
  //   // configure Swiper to use modules
  //   modules: [Navigation, Pagination],
  //   ...
  // });

  // const swiper = new Swiper(".mySwiper", {
  //   cssMode: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   // pagination: {
  //   //   el: ".swiper-pagination",
  //   // },
  //   mousewheel: true,
  //   keyboard: true,
  // });
