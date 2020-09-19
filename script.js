//variable declarations
var images = ['imgs/mickey.png', 'imgs/minnie.png', 'imgs/pluto.png', 'imgs/donald.png', 'imgs/daisy.png', 'imgs/goofy.png'];
var carousel = document.querySelector('.carouselbox');
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');
var maxNumberOfImgs = images.length - 1;
var imgNumber = 0;
var currentImage = images[0];

//sets current image to first image in array
carousel.style.backgroundImage = `url('${currentImage}')`;

//functions

//opens image in new tab when image is clicked
function openImage(){
    window.open(images[imgNumber], "_blank");
}

//moves to previous image in image array when previous button is pressed
function prevImage(){
    imgNumber--;
    if (imgNumber === -1){
        imgNumber = maxNumberOfImgs;
    }

    currentImage = images[imgNumber];
    carousel.style.backgroundImage = `url('${currentImage}')`;
}

//moves to next image in image array when next button is pressed
function nextImage(){
    imgNumber++;
    if (imgNumber === maxNumberOfImgs + 1){
        imgNumber = 0;
    }

    currentImage = images[imgNumber];
    carousel.style.backgroundImage = `url('${currentImage}')`;
}


//event listeners
carousel.addEventListener('click', function(event){
    openImage();
});

prevBtn.addEventListener('click', function(event){
    event.stopPropagation();
    prevImage();
});

nextBtn.addEventListener('click', function(event){
    event.stopPropagation();
    nextImage();
});