const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg"
];


let currentImage = 0;



const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightbox-img");



function openLightbox(index) {

    currentImage = index;

    lightboxImg.src =
        images[currentImage];

    lightbox.style.display = "flex";
}



function closeLightbox() {

    lightbox.style.display = "none";
}



function changeImage(direction) {

    currentImage =
        currentImage + direction;


    
    if (currentImage >= images.length) {

        currentImage = 0;

    }


   
    if (currentImage < 0) {

        currentImage =
            images.length - 1;

    }


    lightboxImg.src =
        images[currentImage];
}


lightbox.addEventListener(
    "click",
    function(event) {

        if (event.target === lightbox) {

            closeLightbox();

        }

    }
);


document.addEventListener(
    "keydown",
    function(event) {

        
        if (event.key === "Escape") {

            closeLightbox();

        }


                if (event.key === "ArrowRight") {

            changeImage(1);

        }


               if (event.key === "ArrowLeft") {

            changeImage(-1);

        }

    }
);
