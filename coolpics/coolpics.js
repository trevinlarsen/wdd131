const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

function toggleMenu() {
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();

window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
              <button class="close-viewer">X</button>
              <img src="${pic}" alt="${alt}">
            </div>`;
}

function viewHandler(event) {
    if (event.target.tagName === 'IMG') {
        const imageSrc = event.target.src;
        const imageParts = imageSrc.split("-");
        const fullImageSrc = imageParts[0] + "-full.jpeg";  // Assuming your full image uses "-full"

        // Insert viewer HTML at the top of the body
        const viewerHTML = viewerTemplate(fullImageSrc, event.target.alt);
        document.body.insertAdjacentHTML("afterbegin", viewerHTML);

        
        const viewer = document.querySelector('.viewer');
        viewer.style.display = 'block';

        
        const closeButton = document.querySelector('.close-viewer');
        closeButton.addEventListener('click', closeViewer);
    }
}

function closeViewer() {
    const viewer = document.querySelector('.viewer');
    viewer.remove();
}

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    gallery.addEventListener('click', viewHandler);
});
