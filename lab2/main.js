function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function draw(){
    const canvas = document.getElementById('draw');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 300, 300);
    const time = new Date();
    ctx.fillRect(50,0,5,10);
    ctx.fillRect(75,0,5,10);
    ctx.fillRect(50,10,30,5);
    ctx.save()
    ctx.fillStyle = "#9090ff"
    ctx.fillRect(60,time.getMilliseconds() / 50 % 65 * 3 + 10,10,10);
    ctx.restore()
    ctx.fillRect(50,80,30,5);
    window.requestAnimationFrame(draw);
}

    //ctx.stroke();    
window.requestAnimationFrame(draw);
