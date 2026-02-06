let current = 0;
const pages = document.querySelectorAll(".page");

function unlockNext() {
  if (current < pages.length - 1) {
    pages[current].classList.remove("active");
    current++;

    pages[current].classList.remove("locked");
    pages[current].querySelector(".letter").classList.remove("blur");
    pages[current].querySelector("button").disabled = false;
    pages[current].querySelector("button").innerText = "I’ve read this 💖";

    document.querySelector(".container").style.transform =
      `translateX(-${current * 100}vw)`;
  }
}

// hearts
setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "❤️";
  h.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 5000);
}, 300);

// roses
setInterval(() => {
  const r = document.createElement("div");
  r.className = "rose";
  r.innerHTML = "🌹";
  r.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(r);
  setTimeout(() => r.remove(), 6000);
}, 600);
