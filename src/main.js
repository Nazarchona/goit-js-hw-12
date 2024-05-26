import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const loader = document.querySelector('#loader');
const loadMoreBtn = document.querySelector('#load-more');

let currentPage = 1;
let currentQuery = '';

const lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  currentQuery = e.currentTarget.elements.query.value.trim();
  if (currentQuery === '') {
    iziToast.error({ title: 'Error', message: 'Search query cannot be empty!' });
    return;
  }

  loader.classList.remove('hidden');
  loadMoreBtn.classList.add('hidden');
  clearGallery();
  currentPage = 1;

  try {
    const data = await fetchImages(currentQuery, currentPage);
    if (data.hits.length === 0) {
      iziToast.warning({ title: 'No Results', message: 'Sorry, there are no images matching your search query. Please try again!' });
    } else {
      renderImages(data.hits);
      loadMoreBtn.classList.remove('hidden');
      lightbox.refresh();
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
  } finally {
    loader.classList.add('hidden');
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  loader.classList.remove('hidden');
  loadMoreBtn.classList.add('hidden');

  try {
    const data = await fetchImages(currentQuery, currentPage);
    renderImages(data.hits);

    if (currentPage * 15 >= data.totalHits) {
      loadMoreBtn.classList.add('hidden');
      iziToast.info({ title: 'End of Results', message: "We're sorry, but you've reached the end of search results." });
    } else {
      loadMoreBtn.classList.remove('hidden');
    }

    const { height: cardHeight } = document.querySelector('.gallery').firstElementChild.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    lightbox.refresh();
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
  } finally {
    loader.classList.add('hidden');
  }
});



