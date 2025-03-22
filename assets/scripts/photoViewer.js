document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".gallery-image");
    let modal = document.getElementById("photoModal");
    let modalImage = document.getElementById("modalImage");
    let closeButton = document.querySelector(".close");
    let prevButton = document.querySelector(".prev");
    let nextButton = document.querySelector(".next");

    let currentIndex = 0;
    let imageArray = [];

    // Store images in an array for navigation
    images.forEach((img, index) => {
        imageArray.push(img.getAttribute("data-full"));
        img.addEventListener("click", function () {
            currentIndex = index;
            openModal(imageArray[currentIndex]);
        });
    });

    function openModal(imageSrc) {
        modalImage.src = imageSrc;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Disable scrolling
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = ""; // Enable scrolling
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
        modalImage.src = imageArray[currentIndex];
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % imageArray.length;
        modalImage.src = imageArray[currentIndex];
    }

    // Event Listeners
    closeButton.addEventListener("click", closeModal);
    prevButton.addEventListener("click", showPrevImage);
    nextButton.addEventListener("click", showNextImage);

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Keyboard Controls
    document.addEventListener("keydown", function (event) {
        if (modal.style.display === "flex") {
            if (event.key === "ArrowLeft") showPrevImage();
            if (event.key === "ArrowRight") showNextImage();
            if (event.key === "Escape") closeModal();
        }
    });
});