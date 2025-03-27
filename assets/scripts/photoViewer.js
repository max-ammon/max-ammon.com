document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("photoModal");
    let modalImage = document.getElementById("modalImage");
    let closeBtn = document.querySelector(".close");
    let imageList = [];
    let currentGroup = ""; // Track the current parent image group

    // Function to open the modal
    function openModal(index, group) {
        modal.style.display = "flex"; // Show modal
        document.body.style.overflow = "hidden"; // Disable scrolling

        currentGroup = group; // Store the current group of images
        imageList = document.querySelectorAll(`.${group} .gallery-image`); // Get all images in this group
        modalImage.src = imageList[index].dataset.full; // Set the current image source
    }

    // Cycle through images (for the current parent image group)
    let currentIndex = 0;
    document.querySelector(".next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % imageList.length;
        modalImage.src = imageList[currentIndex].dataset.full;
    });

    document.querySelector(".prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
        modalImage.src = imageList[currentIndex].dataset.full;
    });

    // Close the modal when clicking "X"
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none"; // Hide modal
        document.body.style.overflow = ""; // Re-enable scrolling
    });

    // Close the modal when clicking outside the image
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide modal
            document.body.style.overflow = ""; // Re-enable scrolling
        }
    });

    // Example: Open the modal when a parent image is clicked
    document.querySelector(".parent-image-1").addEventListener("click", function (event) {
        if (event.target.classList.contains("gallery-image")) {
            let index = Array.from(event.target.parentNode.children).indexOf(event.target);
            openModal(index, "parent-image-1"); // Open modal with images from this parent
        }
    });

    document.querySelector(".parent-image-2").addEventListener("click", function (event) {
        if (event.target.classList.contains("gallery-image")) {
            let index = Array.from(event.target.parentNode.children).indexOf(event.target);
            openModal(index, "parent-image-2"); // Open modal with images from this parent
        }
    });

    document.querySelector(".parent-image-3").addEventListener("click", function (event) {
        if (event.target.classList.contains("gallery-image")) {
            let index = Array.from(event.target.parentNode.children).indexOf(event.target);
            openModal(index, "parent-image-3"); // Open modal with images from this parent
        }
    });

    document.querySelector(".parent-image-4").addEventListener("click", function (event) {
        if (event.target.classList.contains("gallery-image")) {
            let index = Array.from(event.target.parentNode.children).indexOf(event.target);
            openModal(index, "parent-image-4"); // Open modal with images from this parent
        }
    });


});