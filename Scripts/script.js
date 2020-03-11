$(document).ready(() => {
    let slideNumber = 0;

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
    ctx.fillRect(75,475,50,25);
    ctx.fillStyle = "#00FFF7";
     ctx.fillRect(75,450,50,25);
    ctx.fillRect(75,450,50,25);
    ctx.fillRect(75,425,50,25);
    ctx.fillRect(75,400,50,25);
    ctx.fillRect(75,375,50,25);
    ctx.fillRect(75,350,50,25);
    ctx.fillRect(75,325,50,25);
    ctx.fillRect(75,300,50,25);
    ctx.fillRect(75,275,50,25);
    ctx.fillRect(75,250,50,25);
    ctx.fillStyle = "#00FFF7";
    ctx.fillStyle = "#00FFF7";
    ctx.fillStyle = "#00FFF7";
    ctx.fillStyle = "#00FFF7";
    ctx.fillStyle = "#00FFF7";
    ctx.fillStyle = "#00FFF7";
    ctx.fillStyle = "#00FFF7";
    ctx.fillStyle = "#00FFF7";
    ctx.fillStyle = "#00FFF7";
    ctx.fillRect(25,475,50,25);
    ctx.fillStyle = "#00FFF7";
    ctx.fillRect(25,450,50,25);
    ctx.fillStyle = "#00FFF7";
    ctx.fillRect(25,425,50,25);
    ctx.fillStyle = "#00FFF7";
    ctx.fillRect(25,400,50,25);
    ctx.fillStyle = "#00FFF7";
    ctx.fillRect(25,375,50,25);
    ctx.fillStyle = "#00FFF7";
    ctx.fillRect(25,350,50,25);
    ctx.fillStyle = "#00FFF7";
    ctx.fillRect(25,325,50,25);
    ctx.fillStyle = "#00FFF7";
    ctx.fillRect(25,300,50,25);
    ctx.fillStyle = "#00FFF7";
    ctx.fillRect(25,275,50,25);

    //Bar two
    ctx.fillRect(25,250,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillStyle = "##FF0000";
    ctx.fillRect(200,475,50,25);
    ctx.fillStyle = "#FF0000";
     ctx.fillRect(250,450,50,25);
    ctx.fillRect(200,450,50,25);
    ctx.fillRect(200,425,50,25);
    ctx.fillRect(200,400,50,25);
    ctx.fillRect(200,375,50,25);
    ctx.fillRect(200,350,50,25);
    ctx.fillRect(200,325,50,25);
    ctx.fillRect(200,300,50,25);
    ctx.fillRect(200,275,50,25);
    ctx.fillRect(200,250,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillStyle = "#FF0000";
    ctx.fillStyle = "#FF0000";
    ctx.fillStyle = "#FF0000";
    ctx.fillStyle = "#FF0000";
    ctx.fillStyle = "#FF0000";
    ctx.fillStyle = "#FF0000";
    ctx.fillStyle = "#FF0000";
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(250,475,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(250,450,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(250,425,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(250,400,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(250,375,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(250,350,50,25);
    ctx.fillStyle = "##FF0000";
    ctx.fillRect(250,325,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(250,300,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(250,275,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(250,250,50,25);
    ctx.fillRect(250,225,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(250,200,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(250,175,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(250,150,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(250,125,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(250,100,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(250,75,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(200,225,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(200,200,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(200,175,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(200,150,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(200,125,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(200,100,50,25);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(200,75,50,25);
    ctx.fillStyle = "#FF0000";







  //Bar Three

    ctx.fillStyle = "#00FF7F";
    ctx.fillRect(400,475,50,25);
    ctx.fillStyle = "##00FF7F";
     ctx.fillRect(400,450,50,25);
    ctx.fillRect(400,450,50,25);
    ctx.fillRect(400,425,50,25);
    ctx.fillRect(400,400,50,25);
    ctx.fillRect(400,375,50,25);
    ctx.fillRect(400,350,50,25);
    ctx.fillRect(400,325,50,25);
    ctx.fillRect(400,300,50,25);
    ctx.fillRect(400,275,50,25);
    ctx.fillRect(400,250,50,25);
    
    
   
    ctx.fillRect(450,475,50,25);
    ctx.fillStyle = "#00FF7F";
    ctx.fillRect(450,450,50,25);
    ctx.fillStyle = "#00FF7F";
    ctx.fillRect(450,425,50,25);
    ctx.fillStyle = "#00FF7F";
    ctx.fillRect(450,400,50,25);
    ctx.fillStyle = "#00FF7F";
    ctx.fillRect(450,375,50,25);
    ctx.fillStyle = "#00FF7F";
    ctx.fillRect(450,350,50,25);
    ctx.fillStyle = "#00FF7F";
    ctx.fillRect(450,325,50,25);
    ctx.fillStyle = "#00FF7F";
    ctx.fillRect(450,300,50,25);
    ctx.fillStyle = "#00FF7F";
    ctx.fillRect(450,275,50,25);
    ctx.fillStyle = "#00FF7F";
    ctx.fillRect(450,250,50,25);
    ctx.fillRect(450,225,50,25);
    ctx.fillStyle = "#00FF7F";
    ctx.fillRect(450,200,50,25);
    ctx.fillStyle = "#00FF7F";
    ctx.fillRect(450,175,50,25);
    ctx.fillStyle = "#00FF7F";
    ctx.fillRect(450,150,50,25);
    ctx.fillStyle = "#00FF7F";
    ctx.fillRect(400,225,50,25);
    ctx.fillStyle = "#00FF7F";
    ctx.fillRect(400,200,50,25);
    ctx.fillStyle = "#00FF7F";
    ctx.fillRect(400,175,50,25);
    ctx.fillStyle = "#00FF7F";
    ctx.fillRect(400,150,50,25);
    ctx.fillStyle = "#00FF7F";

    //Bar Four

    ctx.fillStyle = "#FFC0CB";
    ctx.fillRect(650,475,50,25);
    ctx.fillStyle = "#FFC0CB";
     ctx.fillRect(650,450,50,25);
    ctx.fillRect(650,425,50,25);
    ctx.fillRect(650,400,50,25);
    ctx.fillRect(650,375,50,25);
    ctx.fillRect(650,350,50,25);
    ctx.fillRect(650,325,50,25);
    ctx.fillRect(650,300,50,25);
    ctx.fillRect(650,275,50,25);
    ctx.fillRect(650,250,50,25);
    ctx.fillRect(650,225,50,25);
    ctx.fillStyle = "#FFC0CB";
    ctx.fillStyle = "#FFC0CB";
    ctx.fillStyle = "#FFC0CB";
    ctx.fillStyle = "#FFC0CB";
    ctx.fillStyle = "#FFC0CB";
    ctx.fillStyle = "#FFC0CB";
    ctx.fillStyle = "#FFC0CB";
    ctx.fillStyle = "#FFC0CB";
    ctx.fillStyle = "#FFC0CB";
    ctx.fillStyle = "#FFC0CB";
    ctx.fillStyle = "#FFC0CB";
    ctx.fillRect(700,475,50,25);
    ctx.fillStyle = "#FFC0CB";
    ctx.fillRect(700,450,50,25);
    ctx.fillStyle = "#FFC0CB";
    ctx.fillRect(700,425,50,25);
    ctx.fillStyle = "#FFC0CB";
    ctx.fillRect(700,400,50,25);
    ctx.fillStyle = "#FFC0CB";
    ctx.fillRect(700,375,50,25);
    ctx.fillStyle = "#FFC0CB";
    ctx.fillRect(700,350,50,25);
    ctx.fillStyle = "#FFC0CB";
    ctx.fillRect(700,325,50,25);
    ctx.fillStyle = "#FFC0CB";
    ctx.fillRect(700,300,50,25);
    ctx.fillStyle = "#FFC0CB";
    ctx.fillRect(700,275,50,25);
    ctx.fillStyle = "#FFC0CB";
    ctx.fillRect(700,250,50,25);
    ctx.fillRect(700,225,50,25);
    ctx.fillStyle = "#FFC0CB";
    ctx.fillRect(700,200,50,25);
    ctx.fillStyle = "#FFC0CB";
    ctx.fillRect(650,200,50,25);
    ctx.fillStyle = "#00FF7F";

    //Bar Graph 5
    

     
    

   



    

    
    

    
    



    


  


}