const previousButton = document.getElementById('prev_button');
const nextButton = document.getElementById('next_button');

function nextImage (event) {
    let imageList = [...document.querySelectorAll('.photo_container')];
    let currentImage = document.querySelector('.present');
    let currentImageClassList = [...currentImage.classList];

    let indexOfCurrentImage = imageList.findIndex((image) => image.classList[1] === currentImageClassList[1]);
    let indexOfNextImage = indexOfCurrentImage + 1;

    imageList[indexOfCurrentImage].classList.replace('present','absent');

    if(indexOfNextImage >= imageList.length){
        indexOfNextImage = 0;
    };
    
    imageList[indexOfNextImage].classList.replace('absent','present');
};

function previousImage (event) {
    let imageList = [...document.querySelectorAll('.photo_container')];
    let currentImage = document.querySelector('.present');
    let currentImageClassList = [...currentImage.classList];

    let indexOfCurrentImage = imageList.findIndex((image) => image.classList[1] === currentImageClassList[1]);
    let indexOfPreviousImage = indexOfCurrentImage - 1;

    imageList[indexOfCurrentImage].classList.replace('present','absent');

    if(indexOfPreviousImage < 0){
        indexOfPreviousImage = imageList.length - 1;
    };
    
    imageList[indexOfPreviousImage].classList.replace('absent','present');
}

nextButton.addEventListener('click', nextImage);
previousButton.addEventListener('click', previousImage);
