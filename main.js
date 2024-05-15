const words = gsap.utils.toArray('.blur-word');


let tl = gsap.timeline({
  scrollTrigger: {
    trigger: container,
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
  }
});

words.forEach(word => {
  tl.to(word, {filter: 'blur(0px)', duration: 1}, '+=0.1');
});
