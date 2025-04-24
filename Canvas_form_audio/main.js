const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

const bg1Button = document.getElementById("bg1");
const bg2Button = document.getElementById("bg2");
const bg3Button = document.getElementById("bg3");
const xRange = document.getElementById("xRange");
const item1Check = document.getElementById("item1");
const item2Check = document.getElementById("item2");
const item3Check = document.getElementById("item3");

// character set up
const character_img = new Image();
character_img.src = "images/character.png";

// backgrounds set up
const bg1 = new Image();
bg1.src = "images/bg1.jpeg";
const bg2 = new Image();
bg2.src = "images/bg2.jpg";
const bg3 = new Image();
bg3.src = "images/bg3.webp";

// items set up
const item1 = new Image();
item1.src = "images/item1.png";
const item2 = new Image();
item2.src = "images/item2.png";
const item3 = new Image();
item3.src = "images/item3.png";

// draw scene
function drawScene(){
    let x = parseInt(xRange.value);
    ctx.clearRect(0,0,myCanvas.width,myCanvas.height);

    if (bg1Button.checked) ctx.drawImage(bg1,0,0,myCanvas.width,myCanvas.height);
    else if (bg2Button.checked) ctx.drawImage(bg2,0,0,myCanvas.width,myCanvas.height);
    else if (bg3Button.checked) ctx.drawImage(bg3,0,0,myCanvas.width,myCanvas.height);

    if (item1Check.checked) ctx.drawImage(item1, 30, 50, 100, 100);
    if (item2Check.checked) ctx.drawImage(item2, 150, 50, 200, 200);
    if (item3Check.checked) ctx.drawImage(item3, 250, 200, 100, 100);
    ctx.drawImage(character_img, x, 100, 300, 300);
}


// loading all images and draw the initial scene
let imagesLoaded = 0;
const images = [character_img, item1, item2, item3, bg1, bg2, bg3];
images.forEach(img => {
  img.onload = () => {
    imagesLoaded++;
    if (imagesLoaded === images.length) {
        drawScene();
    }
  };
});


// buttons clicked events
item1Check.addEventListener("change", drawScene);
item2Check.addEventListener("change", drawScene);
item3Check.addEventListener("change", drawScene);
bg1Button.addEventListener("change", drawScene);
bg2Button.addEventListener("change", drawScene);
bg3Button.addEventListener("change", drawScene);

// displays sound effects
const audio = new Audio();
function playSound(srcPath){
    if (audio.src && !audio.paused) {
        audio.pause();
    }
    audio.src = srcPath;
    audio.play();
}

