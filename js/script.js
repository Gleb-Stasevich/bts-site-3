
const carouselBody = document.querySelector('.carousel-inner');
const nextSlide = document.querySelectorAll('.carousel-control-next');
const prevSlide = document.querySelectorAll('.carousel-control-prev');
const slides = carouselBody.querySelectorAll('.carousel-item');

const changeTheSlide = {
    0: nextSlide[0],
    1: prevSlide[0]
};


const init = {

    preparation() {
        this.animations();
        this.checkDevice();
        this.carouselFlash();
        this.gallery();
    },

    animations() {
        new WOW().init();
    },

    /** убираем fixed фон для телефонов/планшетов */
    checkDevice() {
        const SafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const aboutUs = document.querySelector('.about-us');
        const features = document.querySelector('.features');
        const twitter = document.querySelector('.twitter');
        const contactUs = document.querySelector('.contact-us');
        const notFixedAboutUs = 'url("../img/about-bg.png") no-repeat center center scroll';
        const notFixedFeatures = 'url("../img/features-bg.png") no-repeat center center scroll';
        const notFixedTwitter = 'url("../img/twitter-bg.png") no-repeat center center scroll';
        const notFixedContactUs = 'url("../img/contact-bg.png") no-repeat center center scroll';

        if (SafariBrowser || mobile) {
            aboutUs.style.background = notFixedAboutUs;
            features.style.background = notFixedFeatures;
            twitter.style.background = notFixedTwitter;
            contactUs.style.background = notFixedContactUs;

            for (let next in nextSlide) {
                for (let prev in prevSlide) {
                    nextSlide[next].style.display = 'none';
                    prevSlide[prev].style.display = 'none';
                }
            }
        }
        aboutUs.style.background = notFixedAboutUs;
        features.style.background = notFixedFeatures;
        twitter.style.background = notFixedTwitter;
        contactUs.style.background = notFixedContactUs;
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

    gallery() {
        const images = document.querySelectorAll('.small-preview');
        const zoomedImage = document.querySelector('.zoomed-image');
        zoomedImage.style.backgroundImage = 'url(' + images[0].src + ')';
        for (let key in images) {
            images[key].onclick = function () {
                zoomedImage.style.backgroundImage = 'url(' + images[key].src + ')';
            }
        }
    }
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
