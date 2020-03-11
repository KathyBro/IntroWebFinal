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

//Bar Graph Code

window.onload = function(){
    var canvas = this.document.getElementById('barGraph');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "#00FFF7";
    ctx.fillRect(20,275,100,300);

    //Bar two
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(215,100,100,450);

  //Bar Three
    ctx.fillStyle = "#00FF7F";
    ctx.fillRect(415,135,100,400);

    //Bar Four
    ctx.fillStyle = "#FFC0CB";
    ctx.fillRect(650,225,100,300);
    //Bar Graph 5
}