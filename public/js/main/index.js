import MouseFollower from"mouse-follower";import Lenis from"@studio-freight/lenis";import{ScrollTrigger}from"gsap/all";import lozad from"lozad";let select=e=>document.querySelector(e),selectAll=e=>document.querySelectorAll(e);function assignLinks(e){for(const o in e)if(e.hasOwnProperty(o)){selectAll(o).forEach((n=>{n?n.href=e[o]:console.error(`Elements matching selector ${o} not found.`)}))}}document.addEventListener("DOMContentLoaded",(function(){lozad(".lozad",{rootMargin:"200px 0px",loaded:function(e){}}).observe()})),new Promise(((e,o)=>{document.addEventListener("DOMContentLoaded",(function(){fetch("includes/config.json").then((e=>e.json())).then((o=>{assignLinks(o),e()})).catch((e=>{console.error("Error loading config:",e),o(e)}))}))})).then((()=>{console.log("%c Greetings from Lumina","color:white;background:green; font-size: 24px;font-family:sans-serif")})).catch((e=>{console.error("Failed to load configuration or assign links:",e)})),document.addEventListener("DOMContentLoaded",(function(){function e(){if(innerWidth>767){new MouseFollower}}e(),window.addEventListener("resize",e)}));let lenis=new Lenis({duration:3,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),direction:"vertical",gestureDirection:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:2,infinite:!1,autoResize:!0});function raf(e){lenis.raf(e),requestAnimationFrame(raf)}lenis.on("scroll",(e=>{})),requestAnimationFrame(raf);