/**
 * Initializes video playback controls for elements matching the specified selector.
 * @param selector - The CSS selector for the video elements.
 */
export function initializeVideoPlayer(selector: string): void {
  // Select all video elements matching the selector
  const videoElements = document.querySelectorAll<HTMLVideoElement>(selector);

  videoElements.forEach((video) => {
    const hoverFunction = video.getAttribute('und-hover-function');
    const autoplaySetting = video.getAttribute('und-autoplay');

    // Handle autoplay attribute based on 'und-autoplay'
    if (autoplaySetting === 'true') {
      video.setAttribute('autoplay', 'true');
    } else if (autoplaySetting === 'false') {
      video.removeAttribute('autoplay');
    }

    // Ensure video is muted to comply with browser autoplay policies
    video.muted = true;

    // Set hover functionality based on 'und-hover-function'
    if (hoverFunction === 'replay') {
      video.addEventListener('mouseenter', () => {
        video.currentTime = 0; // Reset to the beginning on hover in
        video.play().catch(() => {}); // Suppress errors if playback fails
      });

      video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reset to the beginning on hover out
      });
    } else if (hoverFunction === 'pause-play') {
      video.addEventListener('mouseenter', () => {
        video.play().catch(() => {}); // Suppress errors if playback fails
      });

      video.addEventListener('mouseleave', () => {
        video.pause();
      });
    }
  });
}
