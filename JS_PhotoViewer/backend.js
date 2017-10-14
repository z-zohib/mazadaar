/* Zohib Zalmy **UNFINISHED** */
"use strict";

let iID, index, photos;

function changeIndex(direction) {
    if (direction === "increase") {
        let max = photos.length - 1;
        
        if (index === max) {
            index = 0;
        } else {
            index++;
        }
    }

    if (direction === "decrease") {
        let min = 0;
        if (index === min) {
            index = photos.length - 1;
        } else {
            index--;
        }
    }

}

function stopAutoSlideShow() {
    window.clearInterval(iID);
}

function displayImage(src) {
    let imageElement = document.getElementById("images");
    imageElement.setAttribute("src", src);
}

function slideShowImages() {
    index = 0;
    photos = getArrayPhotosNames();

    displayImage(photos[index]);

}

function autoSlideImages() {
    let intervalInMilliseconds = 1000;

    iID = setInterval(function() {
        changeIndex('increase');
        console.log(photos[index]);
        displayImage(photos[index]);
    }, intervalInMilliseconds);  
}



function nextImage() {
    changeIndex('increase');
    console.log(photos[index]);
    displayImage(photos[index]);

}

function previousImage() {
    changeIndex('decrease');

    console.log(photos[index]);
    displayImage(photos[index]);

}

function getArrayPhotosNames() {
    let folderName = document.getElementById("photoLocation").value;
    let commonName = document.getElementById("photoName").value;
    let startImageNum = new Number(document.getElementById("startNum").value);
    let endImageNum = new Number(document.getElementById("endNum").value);

    if (startImageNum > endImageNum) {
        alert("Invalid Numbers\n");
        location.reload();
    }

    let imgloc = new Array();

    let currentImage = startImageNum;
    for ( let i = 0; i <= endImageNum - startImageNum; i++) {
        imgloc[i] = folderName + commonName + currentImage + ".jpg";
        currentImage++;
    }

    return imgloc;
}

function randomize(arr) {
    let startIndex = document.getElementById("startNum").value;
    let endIndex = document.getElementById("endNum").value;
    let randomIndex, temp;

    for (let i = 0; i < arr.length; i++) {
        randomIndex = Math.floor((Math.random() * arr.length));
        temp = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = temp;
    }

    photos = arr;
    index = 0;
}

function randomSlideImages() {
    let arrayImg = getArrayPhotosNames(); 
    randomize(arrayImg);
    
    displayImage(photos[index]);
}

function main() {
    document.getElementById("slideShow").onclick = slideShowImages;
    document.getElementById("autoSlide").onclick = autoSlideImages;
    document.getElementById("stopAuto").onclick = stopAutoSlideShow;
    document.getElementById("randomSlide").onclick = randomSlideImages;
    document.getElementById("previousSlide").onclick = previousImage;
    document.getElementById("nextSlide").onclick = nextImage;
}