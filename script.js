

// ===============================
// Select Elements
// ===============================

const header = document.querySelector(".header");
const navLinks = document.querySelector(".nav-links");
const menuBtn = document.querySelector(".menu-btn");
const navItems = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

// ===============================
// Sticky Navbar
// ===============================

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});

// ===============================
// Mobile Menu
// ===============================

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("active");

    });

}

// ===============================
// Close Menu after Clicking Link
// ===============================

navItems.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        if(menuBtn){

            menuBtn.classList.remove("active");

        }

    });

});

// ===============================
// Smooth Scroll
// ===============================

navItems.forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            window.scrollTo({

                top:target.offsetTop-80,

                behavior:"smooth"

            });

        }

    });

});

// ===============================
// Active Navigation while Scrolling
// ===============================

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// ===============================
// Button Hover Animation
// ===============================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0px)";

    });

});

// ===============================
// Console Message
// ===============================

console.log("🚀 Swamy Portfolio Loaded Successfully");


/* =====================================================
   PORTFOLIO JAVASCRIPT - PART 2
   Scroll Reveal + Counters + Animations
===================================================== */

// ======================================
// Scroll Reveal Animation
// ======================================

const revealElements = document.querySelectorAll(
".section-title, .about-card, .skill-card, .timeline-card, .project-card, .achievement-card, .certificate-card, .profile-card, .contact-form, .contact-info"
);

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    revealElements.forEach((element)=>{

        const top = element.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ======================================
// Hero Image Rotation
// ======================================

const imageBox = document.querySelector(".image-box");

if(imageBox){

    window.addEventListener("mousemove",(e)=>{

        const x = (window.innerWidth/2 - e.clientX)/45;
        const y = (window.innerHeight/2 - e.clientY)/45;

        imageBox.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

    });

}


// ======================================
// Number Counter Animation
// ======================================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let count = 0;

            const speed = target/120;

            function updateCounter(){

                count += speed;

                if(count < target){

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(updateCounter);

                }

                else{

                    counter.innerText = target;

                }

            }

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});


// ======================================
// Progress Bar Animation
// ======================================

const progressBars = document.querySelectorAll(".progress-fill");

const progressObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const bar = entry.target;

            const width = bar.dataset.width;

            bar.style.width = width + "%";

            progressObserver.unobserve(bar);

        }

    });

});

progressBars.forEach(bar=>{

    progressObserver.observe(bar);

});


// ======================================
// Card Hover Tilt Effect
// ======================================

const cards = document.querySelectorAll(

".about-card, .skill-card, .project-card, .profile-card, .certificate-card"

);

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = ((y/rect.height)-0.5)*8;

        const rotateY = ((x/rect.width)-0.5)*-8;

        card.style.transform =

        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});


// ======================================
// Mouse Glow Effect
// ======================================

document.addEventListener("mousemove",(e)=>{

    document.documentElement.style.setProperty(

        "--mouse-x",

        e.clientX+"px"

    );

    document.documentElement.style.setProperty(

        "--mouse-y",

        e.clientY+"px"

    );

});


// ======================================
// Console
// ======================================

console.log("✨ Portfolio Animations Loaded");

/* =====================================================
   PORTFOLIO JAVASCRIPT - PART 3
   Premium Effects
===================================================== */

// ======================================
// Typing Effect
// ======================================

const typingElement = document.querySelector(".typing");

if (typingElement) {

    const words = [

    "Aspiring Software Engineer",

    "AI & ML Student",

    "Problem Solver",

    "Consistent Learner",

    "Full Stack Learner"

];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, charIndex++);

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1400);

                return;

            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(typeEffect, deleting ? 50 : 100);

    }

    typeEffect();

}

// ======================================
// Scroll Progress Bar
// ======================================

const progressBar = document.createElement("div");

progressBar.id = "scroll-progress";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const totalHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress =

        (window.pageYOffset / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

// ======================================
// Back To Top Button
// ======================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    }

    else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ======================================
// Navbar Shadow
// ======================================

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 25px rgba(0,0,0,.25)";

    }

    else {

        header.style.boxShadow = "none";

    }

});

// ======================================
// Image Hover Zoom
// ======================================

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transition = ".4s";

        img.style.transform = "scale(1.03)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

// ======================================
// Disable Right Click (Optional)
// ======================================

// document.addEventListener("contextmenu",(e)=>{
//     e.preventDefault();
// });

// ======================================
// Page Loaded
// ======================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log("🚀 Swamy Portfolio Loaded Successfully");

});

// ======================================
// Footer Year
// ======================================

const year = document.querySelector(".year");

if (year) {

    year.textContent = new Date().getFullYear();

}

// ======================================
// Keyboard Shortcut
// ======================================

document.addEventListener("keydown", (e) => {

    if (e.key === "Home") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});

// ======================================
// Welcome Message
// ======================================

setTimeout(() => {

    console.log(

        "💙 Welcome to Swamy's Portfolio"

    );

}, 1000);

/* =====================================================
   END OF JAVASCRIPT
===================================================== */

// ======================================
// Contact Form - EmailJS
// ======================================

const contactForm = document.getElementById("contact-form");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        emailjs.sendForm(
    "service_ud9icq4",
    "template_wnrvo4q",
    this
)
        .then(() => {

            alert("Message Sent Successfully!");

            contactForm.reset();

        })
        .catch((error) => {

    console.error("EmailJS Error:", error);

    alert(error.text || error.message || JSON.stringify(error));

});

    });

}



const canvas=document.getElementById("network-bg");
const ctx=canvas.getContext("2d");

function resize(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
}
resize();
window.addEventListener("resize",resize);

const mouse={
x:null,
y:null,
radius:140
};

window.addEventListener("mousemove",e=>{
mouse.x=e.x;
mouse.y=e.y;
});

const particles=[];
const count=90;

for(let i=0;i<count;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,

vx:(Math.random()-0.5)*0.5,
vy:(Math.random()-0.5)*0.5,

size:2+Math.random()*2

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let i=0;i<particles.length;i++){

let p=particles[i];

p.x+=p.vx;
p.y+=p.vy;

if(p.x<0||p.x>canvas.width)p.vx*=-1;
if(p.y<0||p.y>canvas.height)p.vy*=-1;

let dx=mouse.x-p.x;
let dy=mouse.y-p.y;

let dist=Math.sqrt(dx*dx+dy*dy);

if(dist<mouse.radius){

p.x-=dx*0.002;
p.y-=dy*0.002;

}

ctx.beginPath();

ctx.arc(
p.x,
p.y,
p.size,
0,
Math.PI*2
);

ctx.fillStyle="#3B82F6";

ctx.shadowBlur=15;
ctx.shadowColor="#3B82F6";

ctx.fill();

}

for(let i=0;i<particles.length;i++){

for(let j=i+1;j<particles.length;j++){

let dx=particles[i].x-particles[j].x;
let dy=particles[i].y-particles[j].y;

let distance=Math.sqrt(dx*dx+dy*dy);

if(distance<130){

ctx.beginPath();

ctx.moveTo(
particles[i].x,
particles[i].y
);

ctx.lineTo(
particles[j].x,
particles[j].y
);

ctx.strokeStyle=`rgba(59,130,246,${1-distance/130})`;

ctx.lineWidth=1;

ctx.stroke();

}

}

}

requestAnimationFrame(animate);

}

animate();


/* fbhbfhbhfbh*/


const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});