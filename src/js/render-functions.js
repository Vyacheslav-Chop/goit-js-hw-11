export const container = document.querySelector('.gallery');

export function createGallery(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
    <a href="${largeImageURL}" class="gallery-item-link">
    <img class="gallery-item-img" src="${webformatURL}" alt="${tags}"/>
    </a>
    <div class="gallery-item-info-wrapper">
      <div class="gallery-item-info">
        <h2 class="gallery-item-info-subtitle">Likes</h2>
        <p class="gallery-item-info-value">${likes}</p>
      </div>
      <div class="gallery-item-info">
        <h2 class="gallery-item-info-subtitle">Views</h2>
        <p class="gallery-item-info-value">${views}</p>
      </div>
      <div class="gallery-item-info">
        <h2 class="gallery-item-info-subtitle">Comments</h2>
        <p class="gallery-item-info-value">${comments}</p>
      </div>
      <div class="gallery-item-info">
        <h2 class="gallery-item-info-subtitle">Downloads</h2>
        <p class="gallery-item-info-value">${downloads}</p>
      </div>
    </div>
  </li>`
    )
    .join('');
}

export function clearGallery() {
  container.innerHTML = '';
}

const loader = document.querySelector('.loader');

export function showLoader() {
  loader.hidden = false;
}

export function hideLoader() {
  loader.hidden = true;
}
