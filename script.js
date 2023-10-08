function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()
gsap.to("#nav",{
  top:"-100%",
  duration:5, 
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page2",
    start:"top 85%",
    scrub:2,
  }
})

function canva(){
  const canvas = document.querySelector("#page2>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
image/download (53).jpg
image/download (53).jpg
image/download (54).jpg
image/download (55).jpg
image/download (56).jpg
image/download (57).jpg
image/download (58).jpg
image/download (59).jpg
image/download (60).jpg
image/download (61).jpg
image/download (62).jpg
image/download (63).jpg
image/download (64).jpg
image/download (65).jpg
image/download (66).jpg
image/download (67).jpg
image/download (68).jpg
image/download (69).jpg
image/download (70).jpg
image/download (71).jpg
image/download (72).jpg
image/download (73).jpg
image/download (74).jpg
image/download (75).jpg
image/download (76).jpg
image/download (77).jpg
image/download (78).jpg
image/download (79).jpg
image/download (80).jpg
image/download (81).jpg
image/download (82).jpg
image/download (83).jpg
image/download (84).jpg
image/download (85).jpg
image/download (86).jpg
image/download (87).jpg
image/download (88).jpg
image/download (89).jpg
image/download (90).jpg
image/download (91).jpg
image/download (92).jpg
image/download (93).jpg
image/download (94).jpg
image/download (95).jpg
image/download (96).jpg
image/download (97).jpg
image/download (98).jpg
image/download (99).jpg
image/download (100).jpg
image/download - 2023-09-01T171128.027.jpg
image/download - 2023-09-01T171130.956.jpg
image/download - 2023-09-01T171134.143.jpg
image/download - 2023-09-01T171137.410.jpg
image/download - 2023-09-01T171143.699.jpg
image/download - 2023-09-01T171146.969.jpg
image/download - 2023-09-01T171150.493.jpg
image/download - 2023-09-01T171153.715.jpg
image/download - 2023-09-01T171157.938.jpg
image/download - 2023-09-01T171201.286.jpg
image/download - 2023-09-01T171204.713.jpg
image/download - 2023-09-01T171207.937.jpg
image/download - 2023-09-01T171220.363.jpg
image/download - 2023-09-01T171223.429.jpg
image/download - 2023-09-01T171232.962.jpg
image/download - 2023-09-01T171235.768.jpg
image/download - 2023-09-01T171239.008.jpg
image/download - 2023-09-01T171241.756.jpg
image/download - 2023-09-01T171244.955.jpg
image/download - 2023-09-01T171248.028.jpg
image/download - 2023-09-01T171256.553.jpg
image/download - 2023-09-01T171259.458.jpg
 `;
  return data.split("\n")[index];
}

const frameCount = 70;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}
var tl = gsap.timeline()
tl
.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  duration:3,
scrollTrigger:{
  scroller:"#main",
  trigger:"#page2",
  start:"top 85%",
  scrub:2,
  // markers:true
},
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  scrollTrigger:{
    scroller:"#main",
    trigger:"#page2",
    start:"top 85%",
    scrub:2,
    // markers:true
  },
});


}
canva();

var data = document.querySelectorAll("h4");
data.forEach(function(elem){
  var clutter = "";
var save  = elem.textContent;
var datasave = save.split("");
datasave.forEach(function(val){
  clutter += `<span>${val}</span>`;
}) 
elem.innerHTML = clutter;
console.log(elem);
})

var tl2 = gsap.timeline({
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page2",
    pin:true,
    start:"top 0",
    end:"top -100%",
    scrub:2,
    // markers:true
  }
})
tl2
.to("#page2 canvas",{
  duration:10,
})
.from("#page2 #overlay #text",{
  y:650,
  delay:5,
  duration:25,
},"a")
.from("#page2 #overlay ",{
  backgroundColor:"#0d0d0d2d",
  delay:5,
  duration:25,
},"a")
.to("#page2 h4 span",{
  color:"#fff",
  stagger:0.4,
  delay:5,
},"a")



function canvastwo(){
  const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
New folder/download (1).png
New folder/download (3).png
New folder/download (4).png
New folder/download (5).png
New folder/download (6).png
New folder/download (7).png
New folder/download (8).png
New folder/download (9).png
New folder/download (10).png
New folder/download (11).png
New folder/download (12).png
New folder/download (13).png
New folder/download (14).png
New folder/download (15).png
New folder/download (16).png
New folder/download (17).png
New folder/download (18).png
New folder/download (19).png
New folder/download (20).png
New folder/download (21).png
New folder/download (22).png
New folder/download (23).png
New folder/download (24).png
New folder/download (25).png
New folder/download (26).png
New folder/download (27).png
New folder/download (28).png
New folder/download (29).png
New folder/download (30).png
New folder/download (31).png
New folder/download (32).png
New folder/download (33).png
New folder/download (34).png
New folder/download (35).png
New folder/download (36).png
New folder/download (37).png
New folder/download (38).png
New folder/download (39).png
New folder/download (40).png
New folder/download (41).png
New folder/download (42).png
New folder/download (43).png
New folder/download (44).png
New folder/download (45).png
New folder/download (46).png
New folder/download (47).png
New folder/download (48).png
New folder/download (49).png
New folder/download (50).png
New folder/download (51).png
New folder/download (52).png
New folder/download (53).png
New folder/download (54).png
New folder/download (55).png
New folder/download (56).png
New folder/download (57).png
New folder/download (58).png
New folder/download (59).png
New folder/download (60).png
New folder/download (61).png
New folder/download (62).png
 `;
  return data.split("\n")[index];
}

const frameCount = 61;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}
var tl = gsap.timeline()
tl
.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
scrollTrigger:{
  scroller:"#main",
  trigger:"#page3",
  start:"top 20%",
  end:"top -50%",
  scrub:2,
  // markers:true
},
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  scrollTrigger:{
    scroller:"#main",
    trigger:"#page3",
    start:"top 95%",
    scrub:2,
    // markers:true
  },
});


}
canvastwo();

gsap.to("#page3 #elems h2,#elems h3",{
  top:"-100%",
  duration:20,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page3",
    start:"top 95%",
    end:"bottom -100%",
    scrub:2,
    // markers:true
  }
})

gsap.to("#page4 h4 span",{
  color:"#fff",
  duration:5,
  stagger:0.4,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page4",
    start:"top 65%",
    end:"top -30%",
    scrub:true,
    // markers:true
  }
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



function canvasthree(){
  const canvas = document.querySelector("#page6>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  New folder/download - 2023-09-01T171723.244.jpg
  New folder/download - 2023-09-01T171726.036.jpg
  New folder/download - 2023-09-01T171728.759.jpg
  New folder/download - 2023-09-01T171732.217.jpg
  New folder/download - 2023-09-01T171735.289.jpg
  New folder/download - 2023-09-01T171738.035.jpg
  New folder/download - 2023-09-01T171738.035.jpg
  New folder/download - 2023-09-01T171902.426.jpg
  New folder/download - 2023-09-01T171905.211.jpg
  New folder/download - 2023-09-01T171908.357.jpg
  New folder/download - 2023-09-01T171911.310.jpg
  New folder/download - 2023-09-01T171914.336.jpg
  New folder/download - 2023-09-01T171917.003.jpg
  New folder/download - 2023-09-01T171920.907.jpg
  New folder/download - 2023-09-01T171923.516.jpg
  New folder/download - 2023-09-01T171927.428.jpg
  New folder/download - 2023-09-01T171930.124.jpg
  New folder/download - 2023-09-01T171933.284.jpg
  New folder/download - 2023-09-01T171935.958.jpg
  New folder/download - 2023-09-01T171938.744.jpg
  New folder/download - 2023-09-01T171943.462.jpg
  New folder/download - 2023-09-01T171947.140.jpg
  New folder/download - 2023-09-01T171949.574.jpg
  New folder/download - 2023-09-01T171956.184.jpg
  New folder/download - 2023-09-01T171959.200.jpg
  New folder/download - 2023-09-01T172003.674.jpg
  New folder/download - 2023-09-01T172007.983.jpg
  New folder/download - 2023-09-01T172011.450.jpg
  New folder/download - 2023-09-01T172014.135.jpg
  New folder/download - 2023-09-01T172016.729.jpg
  New folder/download - 2023-09-01T172019.999.jpg
  New folder/download - 2023-09-01T172023.084.jpg
  New folder/download - 2023-09-01T172031.002.jpg
  New folder/download - 2023-09-01T172036.538.jpg
  New folder/download - 2023-09-01T172039.542.jpg
  New folder/download - 2023-09-01T172042.211.jpg
  New folder/download - 2023-09-01T172045.385.jpg
  New folder/download - 2023-09-01T172049.608.jpg
  New folder/download - 2023-09-01T172052.359.jpg
  New folder/download - 2023-09-01T172055.178.jpg
  New folder/download - 2023-09-01T172057.747.jpg
  New folder/download - 2023-09-01T172100.809.jpg
  New folder/download - 2023-09-01T172103.788.jpg
  New folder/download - 2023-09-01T172109.453.jpg
  New folder/download - 2023-09-01T172111.724.jpg
  New folder/download - 2023-09-01T172117.718.jpg
  New folder/download - 2023-09-01T172120.195.jpg
  New folder/download - 2023-09-01T172122.691.jpg
  New folder/download - 2023-09-01T172125.262.jpg
  New folder/download - 2023-09-01T172128.409.jpg
  New folder/download - 2023-09-01T172130.814.jpg
  New folder/download - 2023-09-01T172133.850.jpg
  New folder/download - 2023-09-01T172140.422.jpg
  New folder/download - 2023-09-01T172143.403.jpg
  New folder/download - 2023-09-01T172146.182.jpg
  New folder/download - 2023-09-01T172149.098.jpg
  New folder/download - 2023-09-01T172155.720.jpg
  New folder/download - 2023-09-01T172158.791.jpg
  New folder/download - 2023-09-01T172201.759.jpg
  New folder/download - 2023-09-01T172205.736.jpg
  New folder/download - 2023-09-01T172208.887.jpg
  New folder/download - 2023-09-01T172211.934.jpg
  New folder/download - 2023-09-01T172214.438.jpg
  New folder/download - 2023-09-01T172217.120.jpg
  New folder/download - 2023-09-01T172220.688.jpg
  New folder/download - 2023-09-01T172223.621.jpg
  New folder/download - 2023-09-01T172226.491.jpg
  New folder/download - 2023-09-01T172234.900.jpg
  New folder/download - 2023-09-01T172237.537.jpg
  New folder/download - 2023-09-01T172242.668.jpg
  New folder/download - 2023-09-01T172245.108.jpg
  New folder/download - 2023-09-01T172247.949.jpg
  New folder/download - 2023-09-01T172250.787.jpg
  New folder/download - 2023-09-01T172253.603.jpg
  New folder/download - 2023-09-01T172259.893.jpg
  New folder/download - 2023-09-01T172310.487.jpg
  New folder/download - 2023-09-01T172313.857.jpg
  New folder/download - 2023-09-01T172317.137.jpg
  New folder/download - 2023-09-01T172334.942.jpg
  New folder/download - 2023-09-01T172339.907.jpg
  New folder/download - 2023-09-01T172342.893.jpg
  New folder/download - 2023-09-01T172346.727.jpg
  New folder/download - 2023-09-01T172350.741.jpg
  New folder/download - 2023-09-01T172354.342.jpg
  New folder/download - 2023-09-01T172357.348.jpg
  New folder/download - 2023-09-01T172400.293.jpg
  New folder/download - 2023-09-01T172403.240.jpg
  New folder/download - 2023-09-01T172406.026.jpg
  New folder/download - 2023-09-01T172416.159.jpg
  New folder/download - 2023-09-01T172420.207.jpg
  New folder/download - 2023-09-01T172423.109.jpg
  New folder/download - 2023-09-01T172425.957.jpg
  New folder/download - 2023-09-01T172428.693.jpg
  New folder/download - 2023-09-01T175156.896.jpg
  New folder/download - 2023-09-01T175200.388.jpg
  New folder/download - 2023-09-01T175203.457.jpg
  New folder/download - 2023-09-01T175206.245.jpg
  New folder/download - 2023-09-01T175209.034.jpg
  New folder/download - 2023-09-01T175211.943.jpg
  New folder/download - 2023-09-01T175214.720.jpg
  New folder/download - 2023-09-01T175217.669.jpg
  New folder/download - 2023-09-01T175222.942.jpg
  New folder/download - 2023-09-01T175225.704.jpg
  New folder/download - 2023-09-01T175229.506.jpg
  New folder/download - 2023-09-01T175232.428.jpg
  New folder/download - 2023-09-01T175238.326.jpg
  New folder/download - 2023-09-01T175241.076.jpg
  New folder/download - 2023-09-01T175244.173.jpg
  New folder/download - 2023-09-01T175246.874.jpg
  New folder/download - 2023-09-01T175249.900.jpg
  New folder/download - 2023-09-01T175253.125.jpg
  New folder/download - 2023-09-01T175255.650.jpg
  New folder/download - 2023-09-01T175259.213.jpg
  New folder/download - 2023-09-01T175302.574.jpg
  New folder/download - 2023-09-01T175305.492.jpg
  New folder/download - 2023-09-01T175316.412.jpg
  New folder/download - 2023-09-01T175319.681.jpg
  New folder/download - 2023-09-01T175346.733.jpg
  New folder/download - 2023-09-01T175349.846.jpg
  New folder/download - 2023-09-01T175355.768.jpg
  New folder/download - 2023-09-01T175401.728.jpg
  New folder/download - 2023-09-01T175404.744.jpg
  New folder/download - 2023-09-01T175413.316.jpg
  New folder/download - 2023-09-01T175416.228.jpg
  New folder/download - 2023-09-01T175425.087.jpg
  New folder/download - 2023-09-01T175427.806.jpg
  New folder/download - 2023-09-01T175433.565.jpg
  New folder/download - 2023-09-01T175436.013.jpg
  New folder/download - 2023-09-01T175439.170.jpg
  New folder/download - 2023-09-01T175442.239.jpg
  New folder/download - 2023-09-01T175448.079.jpg
  New folder/download - 2023-09-01T175450.831.jpg
  New folder/download - 2023-09-01T175454.220.jpg
  New folder/download - 2023-09-01T175457.322.jpg
  New folder/download - 2023-09-01T175500.332.jpg
  New folder/download - 2023-09-01T175503.239.jpg
  New folder/download - 2023-09-01T175511.228.jpg
  New folder/download - 2023-09-01T175514.390.jpg
  New folder/download - 2023-09-01T175517.631.jpg
  New folder/download - 2023-09-01T175520.331.jpg
  New folder/download - 2023-09-01T175523.089.jpg
  New folder/download - 2023-09-01T175526.527.jpg
  New folder/download - 2023-09-01T175534.681.jpg
  New folder/download - 2023-09-01T175537.526.jpg
  New folder/download - 2023-09-01T175540.131.jpg
  New folder/download - 2023-09-01T175543.305.jpg
  
 `;
  return data.split("\n")[index];
}

const frameCount = 145;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}
var tl = gsap.timeline()
tl
.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
scrollTrigger:{
  scroller:"#main",
  trigger:"#page6",
  start:"top 0",
  end:"top -150%",
  pin:true,
  scrub:2,
  // markers:true
},
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  scrollTrigger:{
    scroller:"#main",
    trigger:"#page6",
    pin:true,
    start:"top 0%",
    scrub:2,
    // markers:true
  },
});


}
canvasthree();
var tl3 = gsap.timeline({
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page6",
    start:"top 0%",
    end:"top -200%",
    scrub:2,
    // markers:true
  }
})
tl3
.to("#page6 h2:nth-child(1)",{
  bottom:"2vw",
  duration:5,
  delay:1,
})
.to("#page6 h2:nth-child(1)",{
  display:"none",
  duration:5,
})
.to("#page6 h2:nth-child(2)",{
  duration:5,
  delay:-0.8,
  bottom:"2vw",
})
.to("#page6 h2:nth-child(2)",{
  display:"none",
  duration:5,
})
.to("#page6 h2:nth-child(3)",{
  duration:5,
  bottom:"2vw",
delay:-0.8,
})
.to("#page6 h2:nth-child(3)",{
  duration:5,
  display:"none"
})
.from("#page6 #overlay #text",{
  y:1050,
  duration:7,
},"a")
.from("#page6 #overlay",{
  backgroundColor:"#0d0d0d2d",
  duration:7,
},"a")
.to("#page6 h4 span",{
  color:"#fff",
  stagger:0.1,
  duration:7,
},"a")

var tl4 = gsap.timeline({
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page7",
    start:"top 0%",
    end:"top -100%",
    scrub:2,
    pin:true,
    // markers:true
  }
})
tl4
.from("#page7 #img1",{
  y:150,
  rotate:"-10deg",
  duration:0.2
})
.from("#page7 #img2",{
  y:1000,
  rotate:"10deg"
})
.from("#page7 #img3",{
  y:1000,
  rotate:"10deg"
})


function canvasfour(){
  const canvas = document.querySelector("#page8>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
 image/download (1).jpg
image/download (2).jpg
image/download (3).jpg
image/download (4).jpg
image/download (5).jpg
image/download (6).jpg
image/download (7).jpg
image/download (8).jpg
image/download (9).jpg
image/download (10).jpg
image/download (11).jpg
image/download (12).jpg
image/download (13).jpg
image/download (14).jpg
image/download (15).jpg
image/download (16).jpg
image/download (17).jpg
image/download (18).jpg
image/download (19).jpg
image/download (20).jpg
image/download (21).jpg
image/download (22).jpg
image/download (23).jpg
image/download (24).jpg
image/download (25).jpg
image/download (26).jpg
image/download (27).jpg
image/download (28).jpg
image/download (29).jpg
image/download (30).jpg
image/download (31).jpg
image/download (32).jpg
image/download (33).jpg
image/download (34).jpg
image/download (35).jpg
image/download (36).jpg
image/download (37).jpg
image/download (38).jpg
image/download (39).jpg
image/download (40).jpg
image/download (41).jpg
image/download (42).jpg
image/download (43).jpg
image/download (44).jpg
image/download (45).jpg
image/download (46).jpg
image/download (47).jpg
image/download (48).jpg
image/download (49).jpg
image/download (50).jpg
image/download (51).jpg
 `;
  return data.split("\n")[index];
}

const frameCount = 51;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}
var tl = gsap.timeline({
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page8",
    pin:true,
    scrub:2,
    // markers:true
  }
})
tl
.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  duration:2,
  onUpdate: render,   
})
.to("#page8 #overlay",{
  bottom:"0",
  duration:5,
},"a")
.from("#page8 #overlay",{
    backgroundColor:"#0d0d0d1e",
    delay:3,
  duration:5,
},"a")

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  scrollTrigger:{
    scroller:"#main",
    trigger:"#page8",
    scrub:2,
   
  },
});


}
canvasfour();
gsap.to("#page9 h4 span",{
  color:"white",
  stagger:0.2,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page9",
    scrub:2,
    start:"top 35%",
    end:"top 15%"
  }
})
gsap.to("#page10 #box",{
  x:-4590,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page10",
    scrub:2,
    pin:true,
    
  }
})

var crsr = document.querySelector("#cursor");
document.querySelector("#main").addEventListener("mousemove",function(dets){
  crsr.style.left = dets.clientX + "px"
  crsr.style.top = dets.clientY + "px"
})
document.querySelector("#page10").addEventListener("mouseenter",function(){
    document.querySelector("#cursor ").innerHTML = `<i id="i" class="ri-arrow-right-line"></i> `;
  document.querySelector("#cursor").style.width = "70px";
  document.querySelector("#cursor").style.height = "70px";
})
document.querySelector("#page10").addEventListener("mouseleave",function(){
  document.querySelector("#cursor").innerHTML = "";
  document.querySelector("#cursor").style.width = "15px";
  document.querySelector("#cursor").style.height = "15px";
})
// document.querySelector("#page5").addEventListener("mouseenter",function(){
//   document.querySelector("#cursor #anim i").style.display = "initial";
//   document.querySelector("#cursor").style.width = "75px";
//   document.querySelector("#cursor").style.height = "75px";
// })
// document.querySelector("#page5").addEventListener("mouseleave",function(){
//   document.querySelector("#cursor #anim i").style.display = "none";
//   document.querySelector("#cursor").style.width = "15px";
//   document.querySelector("#cursor").style.height = "15px";
// })