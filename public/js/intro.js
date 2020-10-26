export const initIntro = () => {
  let tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  tl.to("#intro1 .text", { duration: 2, y: 0, stagger: 0.5 });
  tl.to("#slider1", { duration: 1.5, y: "-100%", delay: 0.5 });
  tl.to("#intro1", { duration: 1, y: "-100%" }, "-=1");
  tl.to("#intro2 .text", { duration: 2, y: 0, stagger: 0.5 });
  tl.to("#slider2", { duration: 1.5, y: "-100%", delay: 0.5 });
  tl.to("#intro2", { duration: 1, y: "-100%" }, "-=1");
  tl.fromTo(
    ".main-title",
    { opacity: 0, scale: 0 },
    { duration: 1, opacity: 1, scale: 1.3 },
    "-=.5"
  );
  tl.from("nav", { y: "-100%", duration: 1 });
};
