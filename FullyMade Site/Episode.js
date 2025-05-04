document.addEventListener("DOMContentLoaded", () => {
    const episodes = document.querySelectorAll(".episode");
    const videoLoading = document.querySelector(".video-loading");

    episodes.forEach((episode) => {
        episode.addEventListener("click", () => {
            videoLoading.style.display = "flex"; // Show loading animation
            setTimeout(() => {
                videoLoading.style.display = "none"; // Hide after load
            }, 2000); // Simulate loading time
        });
    });
});
