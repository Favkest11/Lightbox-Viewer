const galleryItem=document.querySelectorAll(".gallery-item");
const lightbox=document.querySelector(".lightbox");
const closeBtn=document.querySelector("#close-btn");
const lightboxImage=document.querySelector("#lightbox-image");
closeBtn.addEventListener("click",()=>{
  lightbox.classList.remove("show");
});
galleryItem.forEach(item =>{
item.addEventListener("click",() =>{
lightbox.classList.add("show");
const newSrc=item.getAttribute("data-full");
lightboxImage.src=newSrc;
});
});
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) { 
    lightbox.classList.remove("show");
  }
});