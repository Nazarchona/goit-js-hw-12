import axios from 'axios';

const API_KEY = '43935418-e568f8ae63502e120d68b032c';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page = 1) => {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
};

