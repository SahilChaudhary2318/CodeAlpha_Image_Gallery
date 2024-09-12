const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('imageModal');
const fullImage = document.getElementById('fullImage');
const modalHeading = document.getElementById('modalHeading');
const modalCaption = document.getElementById('modalCaption');
const closeModal = document.getElementById('closeModal');


const nextModal = document.getElementById('nextModal');
const prevModal = document.getElementById('prevModal');

let currentIndex = 0;

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        showModal(thumbnail);
    });
});

function showModal(thumbnail) {
    fullImage.src = thumbnail.src;
    modalHeading.textContent = thumbnail.alt;
    modalCaption.textContent = thumbnail.nextElementSibling.textContent;
    modal.style.display = 'block';
}

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});


nextModal.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    showModal(thumbnails[currentIndex]);
});

prevModal.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    showModal(thumbnails[currentIndex]);
});


document.addEventListener('keydown', (event) => {
    if (modal.style.display === 'block') {
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % thumbnails.length;
            showModal(thumbnails[currentIndex]);
        } else if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
            showModal(thumbnails[currentIndex]);
        }
    }
});
