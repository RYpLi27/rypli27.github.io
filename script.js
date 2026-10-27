// Fallback: if the video fails to load, hide it and show the dark background
const video = document.getElementById('bg-video');
video.addEventListener('error', () => { video.style.display = 'none'; }, true);
video.play().catch(() => { /* autoplay blocked – ignore */ });
