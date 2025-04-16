const myCanvas = document.getElementById("canvas1");
const ctx = myCanvas.getContext("2d");

const back_img = new Image();
const fg_img1 = new Image();
const fg_img2 = new Image();

// background image
back_img.onload = () =>{
    ctx.drawImage(back_img,0,0,1500,900);
};

// foreground image 1
fg_img1.onload = () =>{
    ctx.drawImage(fg_img1,0,0,750,450);
};

// foreground image 2
fg_img2.onload = () =>{
    ctx.drawImage(fg_img2,750,450,800,500);
};

// image source paths
back_img.src = "images/background.jpg";
fg_img1.src = "images/cat.jpeg";
fg_img2.src = "images/dog.jpg";

// text
setTimeout(() => {
    ctx.font = "60px Arial";
    ctx.fillStyle = "yellow";
    ctx.fillText("Animals", 260, 700);
    ctx.fillText("Lili Lin Zhao", 970, 240);
}, 500);