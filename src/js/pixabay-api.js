import axios from 'axios';

export async function fetchImg(query, currentPage) {
  const API_KEY = '42320174-3e6043d2cde7399227b0118b6';
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const url = `${BASE_URL}${END_POINT}`;
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 15,
    page: currentPage,
  };

  const res = await axios.get(url, { params });
  return res.data;
}
