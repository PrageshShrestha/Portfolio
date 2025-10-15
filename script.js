const hero = document.getElementById("hero");
const blob = document.querySelector(".blob");
const blob2 = document.querySelector(".blob2");
const p1 = document.querySelector(".parallax1");
const p2 = document.querySelector(".parallax2");

hero.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;

  const move = (el, m) => {
    el.style.transform = `translate3d(${x * m}px, ${y * m}px, 0)`;
  };

  move(blob, 60);
  move(blob2, -40);
  move(p1, 50);
  move(p2, -30);
});
