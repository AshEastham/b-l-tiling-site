/* Open */
function openNav() {
    document.getElementById("nav").style.display = "flex";
    document.getElementById("nav").style.height = "auto";
    document.getElementById("nav").style.width = "100%";
    document.getElementById("open-btn").style.display = "none";
    document.getElementById("close-btn").style.display = "flex";
}
  
/* Close */
function closeNav() {
    document.getElementById("nav").style.height = "0%";
    document.getElementById("nav").style.width = "100%";
    document.getElementById("nav").style.display = "none";
    document.getElementById("open-btn").style.display = "flex";
    document.getElementById("close-btn").style.display = "none";
}