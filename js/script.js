/** Init WOW */

const carouselBody = document.querySelector('.carousel-inner');
const nextSlide = document.querySelector('.carousel-control-next');
const prevSlide = document.querySelector('.carousel-control-prev');
const slides = carouselBody.querySelectorAll('.carousel-item');

const changeTheSlide = {
    0: nextSlide,
    1: prevSlide
};

const init = {

    preparation() {
        this.animations();
        this.isSafari();
        this.carouselFlash();
    },

    /** Init WOW */
    animations() {
        new WOW().init();
    },

    /** убираем fixed фон для Safari */
    isSafari() {
        const Safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

        const aboutUs = document.querySelector('.about-us');
        const features = document.querySelector('.features');
        const twitter = document.querySelector('.twitter');
        const contactUs = document.querySelector('.contact-us');
        const notFixedAboutUs = 'url("../img/about-bg.png") no-repeat top center scroll';
        const notFixedFeatures = 'url("../img/features-bg.png") no-repeat top center scroll';
        const notFixedTwitter = 'url("../img/twitter-bg.png") no-repeat top center scroll';
        const notFixedContactUs = 'url("../img/contact-bg.png") no-repeat top center scroll';

        if (Safari) {
            aboutUs.style.background = notFixedAboutUs;
            features.style.background = notFixedFeatures;
            twitter.style.background = notFixedTwitter;
            contactUs.style.background = notFixedContactUs;

        }
    },

    carouselFlash() {
        for (let key in changeTheSlide) {
            changeTheSlide[key].onclick = function () {
                carouselBody.classList.add('flash');
                setTimeout(function () {
                    carouselBody.classList.remove('flash');
                }, 1000);
            }
        }
    },
};

window.onload = init.preparation();

























// for (let key in changeTheSlide) {
//     changeTheSlide[key].onclick = function () {
//         carouselBody.classList.add('flash');
//         setTimeout(resetFlash, 1000);
//             setTimeout(checkSlideClass, 500);

//             function checkSlideClass() {
//                 for (let i = 0; i < slides.length; i++) {
//                     console.log(slides[i])
//                     setTimeout(vvv, 100);
//                     function vvv() {
//                         if (slides[i].classList.contains('active')) {
//                             checkAnimation(slides[i]);
//                         }
//                     }
//                 }
//             }
//         }
//     };
// };
// function resetFlash() {
//     carouselBody.classList.remove('flash');
// };


// function checkAnimation(slide) {
//     const helloTitle = slide.querySelector('.hello__title');
//     const helloSubTitle = slide.querySelector('p');
//     if (helloTitle.classList.contains('animated') &&
//         helloTitle.classList.contains('fadeInLeftBig') &&
//         helloSubTitle.classList.contains('animated') &&
//         helloSubTitle.classList.contains('fadeInRightBig')) {

//         helloTitle.classList.remove('animated');
//         helloTitle.classList.remove('fadeInLeftBig');
//         helloSubTitle.classList.remove('animated');
//         helloSubTitle.classList.remove('fadeInRightBig');
//     }
//     helloTitle.classList.remove('animated');
//     helloTitle.classList.remove('fadeInLeftBig');
//     helloSubTitle.classList.remove('animated');
//     helloSubTitle.classList.remove('fadeInRightBig');
//     setTimeout(addAnimation, 100);

//     function addAnimation() {
//         helloTitle.classList.add('animated');
//         helloTitle.classList.add('fadeInLeftBig');
//         helloSubTitle.classList.add('animated');
//         helloSubTitle.classList.add('fadeInRightBig');
//     }
// };
