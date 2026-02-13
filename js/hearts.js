const container = document.getElementById("background-hearts");

/* -------------------------
   CREATE ONE HEART
------------------------- */
function createHeart(startInside = false) {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = "❤";

  // Random horizontal position
  heart.style.left = Math.random() * 100 + "vw";

  // Size variation
  const size = 16 + Math.random() * 18;
  heart.style.fontSize = size + "px";

  // Faster fall
  const duration = 5 + Math.random() * 4; // 5–9s
  heart.style.animationDuration = duration + "s";

  if (startInside) {
    // Start already on screen
    heart.style.top = Math.random() * 100 + "vh";

    // Force animation to already be running
    heart.style.animationDelay = `-${Math.random() * duration}s`;
  }

  container.appendChild(heart);

  // Cleanup (extra buffer for negative delay)
  setTimeout(() => {
    heart.remove();
  }, (duration + 1) * 1000);
}

/* -------------------------
   IMMEDIATE VISUAL FILL
------------------------- */
// Hearts visible the INSTANT page loads
for (let i = 0; i < 40; i++) {
  createHeart(true);
}

/* -------------------------
   CONTINUOUS RAIN (FAST)
------------------------- */
setInterval(() => {
  createHeart(false);
  createHeart(false);
  createHeart(false);
}, 100); // ~16 hearts/sec
