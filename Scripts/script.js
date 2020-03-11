$(document).ready(() => {
    let slideNumber = 0;
    changeSlide();

    $('#dot0').on('click', function() {
        slideNumber = 0;
        changeSlide();
    });
    $('#dot1').on('click', () => {
        slideNumber = 1;
        changeSlide();
    });
    $('#dot2').on('click', () => {
        slideNumber = 2;
        changeSlide();
    });
    $('#dot3').on('click', () => {
        slideNumber = 3;
        changeSlide();
    });
    $('#dot4').on('click', () => {
        slideNumber = 4;
        changeSlide();
    });

    const indexChangeAuto = () => {
        slideNumber++;
        if(slideNumber >= 5) {
            slideNumber = 0;
        }
        changeSlide();
    }

    function changeSlide() {
        let slides = document.getElementsByClassName('slide');
        let dots = document.getElementsByClassName('dot');
        for(var i=0; i< slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for(var j=0; j < dots.length; j++) {
            dots[j].className = dots[j].className.replace(" active", "");
        }
        slides[slideNumber].style.display='block';
        dots[slideNumber].className += ' active';
    }

    setInterval(indexChangeAuto, 10000);
    
});

