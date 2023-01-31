const toggler=document.getElementById("toggler");
const navLink=document.getElementById("nav-links");
toggler.addEventListener("click",()=>
{
    navLink.classList.toggle("active");
})