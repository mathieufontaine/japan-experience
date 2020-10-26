export const initMotion = () => {
  // Moveming elements
  const container = document.querySelector(".container");
  const title = container.querySelector(".title");
  const text = title.querySelector("h1");
  const circle = container.querySelector(".circle");

  // Moving Animation
  container.addEventListener("mousemove", e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    title.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });

  // Animate In
  container.addEventListener("mouseenter", e => {
    title.style.transition = "none";
    // popout
    text.style.transform = "translateZ(100px)";
  });

  // Animate Out
  container.addEventListener("mouseleave", e => {
    title.style.transition = "all .5s ease";
    title.style.transform = `rotateX(0deg) rotateY(0deg)`;
    // popout
    text.style.transform = "translateZ(0)";
  });
};
