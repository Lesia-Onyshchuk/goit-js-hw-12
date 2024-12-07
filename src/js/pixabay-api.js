import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';

const API_KEY = '47418374-a80c993bb5abb784419bb47e5';

export const fetchFoo = async (info, page = 1) => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: info,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 15,
    page: page,
  });

  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${params}`
  );
  return response.data;
};
