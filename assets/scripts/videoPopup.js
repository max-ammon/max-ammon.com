document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("videoModal");
    let video = document.getElementById("popupVideo");
    let videoSource = document.getElementById("videoSource");
    let closeButton = document.querySelector(".close");

    // Add click event to all buttons with class "videoButton"
    document.querySelectorAll(".videoButton").forEach(button => {
        button.addEventListener("click", function () {
            let videoPath = this.getAttribute("data-video"); // Get the video path from the button
            videoSource.src = videoPath;
            video.load();
            modal.style.display = "flex";
            document.body.style.overflow = "hidden"; // Disable scrolling
            video.play();
        });
    });

    // Close popup when clicking "X"
    closeButton.addEventListener("click", closePopup);

    // Close popup when clicking outside the video area
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closePopup();
        }
    });

    function closePopup() {
        modal.style.display = "none";
        document.body.style.overflow = "";
        video.pause();
        video.currentTime = 0;
    }
});