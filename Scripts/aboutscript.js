//Bar Graph Code

window.onload = function(){
    var canvas = this.document.getElementById('barGraph');
    var ctx = canvas.getContext('2d');
    ctx.font = "15px Fredoka One";

    //Bar One
    ctx.fillStyle = "#FFF";
    ctx.fillText("53%", 25, 275);
    ctx.fillStyle = "#00FFF7";
    ctx.fillRect(20,275,100,300);

    //Bar Two
    ctx.fillStyle = "#FFF";
    ctx.fillText("96%", 220, 100);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(215,100,100,450);

    //Bar Three
    ctx.fillStyle = "#FFF";
    ctx.fillText("83%", 420, 135);
    ctx.fillStyle = "#00FF7F";
    ctx.fillRect(415,135,100,400);

    //Bar Four
    ctx.fillStyle = "#FFF";
    ctx.fillText("68%", 655, 225);
    ctx.fillStyle = "#FFC0CB";
    ctx.fillRect(650,225,100,300);
    //Bar Graph 5
}