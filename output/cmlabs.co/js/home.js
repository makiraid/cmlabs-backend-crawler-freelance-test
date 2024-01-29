$(document).ready(function () {
    var splide = new Splide('#home-career--splide', {
        autoWidth: true,
        focus: 'left',
        gap: '2em',
        pagination: false,
    })

    splide.on('mounted', function () {
        $('.splide-home-career .splide__arrows .splide__arrow--prev').css('display', 'none')
    })

    splide.on('moved', function (newIndex, oldIndex, destIndex) {
        let maxIndex = $('.custom-career-slide').length;
        let countVisible = $('.custom-career-slide.is-visible').length;

        if (newIndex >= 1) {
            $('.splide-home-career .splide__arrows .splide__arrow--prev').css('display', 'block')
        } else {
            $('.splide-home-career .splide__arrows .splide__arrow--prev').css('display', 'none')
        }

        if ((destIndex + countVisible) >= maxIndex) {
            $('.splide-home-career .splide__arrows .splide__arrow--next').css('display', 'none');
        } else {
            $('.splide-home-career .splide__arrows .splide__arrow--next').css('display', 'block');
        }
    })

    splide.mount()
})
