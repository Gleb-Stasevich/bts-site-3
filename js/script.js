
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
        const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
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
