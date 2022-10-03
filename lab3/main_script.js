let canvas = document.getElementById("main_canvas");
let context = canvas.getContext("2d");

let image_data = context.getImageData(0, 0, canvas.width, canvas.height);

let clock = new Clock(context, 500, 500, 450);
clock.start();
