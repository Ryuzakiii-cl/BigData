const galleryImages = document.querySelectorAll('.gallery-image');
const modal = new bootstrap.Modal(document.getElementById('imageModal'));
const modalImage = document.getElementById('modalImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showImage(index) {
  const image = galleryImages[index];
  modalImage.src = image.src;
  currentIndex = index;
  modal.show();
}

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => showImage(index));
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    showImage(currentIndex - 1);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < galleryImages.length - 1) {
    showImage(currentIndex + 1);
  }
});
