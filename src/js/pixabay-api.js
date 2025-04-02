import axios from 'axios';

const API_KEY = '49623840-0f31145568b741aa8d3c39eac';

const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;

const defaultParams = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export function getImagesByQuery(query) {
  
  const params = { ...defaultParams, q: query };

  return axios
    .get('', { params })
    .then(response => {
      console.log(response);
      return response.data;
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}
