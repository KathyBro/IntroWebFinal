//Bar Graph Code

window.onload = function(){
    var canvas = this.document.getElementById('barGraph');
    var ctx = canvas.getContext('2d');
    ctx.font = "15px Fredoka One";

    //Bar One
    ctx.fillStyle = "#00FFF7";
    ctx.fillRect(20,275,100,300);

    //Bar Two
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