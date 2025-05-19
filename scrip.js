const video = document.getElementById("bg-video");
const soundBtn = document.getElementById("sound-toggle");

soundBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  soundBtn.textContent = video.muted ? "Activer le son" : "Couper le son";
});