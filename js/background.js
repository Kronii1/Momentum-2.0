const images = ["0.jpg", "1.jpg", "2.jpg"];

const chooseImage = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement("img");

backgroundImage.classList.add("bgImage");
backgroundImage.src = `img/${chooseImage}`;

document.body.appendChild(backgroundImage);
