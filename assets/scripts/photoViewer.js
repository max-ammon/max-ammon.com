document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("photoModal");
    let modalImage = document.getElementById("modalImage");
    let galleryImages = document.querySelectorAll(".gallery-image");
    let closeBtn = document.querySelector(".close");
    let prevBtn = document.querySelector(".prev");
    let nextBtn = document.querySelector(".next");
    let currentIndex = 0;
    let imageList = [];

    // Gather all data-full images into an array
    galleryImages.forEach((img, index) => {
        let fullSrc = img.getAttribute("data-full");
        if (fullSrc) {
            imageList.push(fullSrc); // Store full image path
            img.dataset.index = imageList.length - 1; // Store index for click event
        }

        // Attach click event to open lightbox
        img.addEventListener("click", function () {
            currentIndex = parseInt(img.dataset.index); // Get correct index
            openModal(currentIndex);
        });
    });

    function openModal(index) {
        if (imageList.length > 0) {
            modalImage.src = imageList[index]; // Load full-size image
            modal.style.display = "flex"; // Show modal
            document.body.style.overflow = "hidden"; // Disable scrolling
        }
    }

    galleryImages.forEach((img, index) => {
        console.log("Image detected:", img, "Data-full:", img.getAttribute("data-full"));
    });

    function closeModal() {
        modal.style.display = "none"; // Hide modal
        document.body.style.overflow = ""; // Enable scrolling
    }

    function adjustImageSize() {
        let screenWidth = window.innerWidth;
    
        // For small screens (Full HD or below), scale image to fit
        if (screenWidth <= 1920) {
            modalImage.style.width = "100%";
            modalImage.style.height = "auto";
        } else {
            modalImage.style.width = "auto"; // Keep real scale
            modalImage.style.height = "auto";
        }
    }

    function openModal(index) {
        if (imageList.length > 0) {
            modalImage.src = imageList[index]; // Load full-size image
            modal.style.display = "flex"; // Show modal
            document.body.style.overflow = "hidden"; // Disable scrolling
    
            // Adjust image size after opening the modal
            adjustImageSize();
        }
    }

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none"; // Hide modal
        document.body.style.overflow = ""; // Re-enable body scroll
    });

    // Navigate to previous image
    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
        modalImage.src = imageList[currentIndex];
    });

    // Navigate to next image
    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % imageList.length;
        modalImage.src = imageList[currentIndex];
    });

    // Close modal when clicking outside of the image
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide modal
            document.body.style.overflow = ""; // Re-enable body scroll
        }
    });

    // Close modal on Escape key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });
});