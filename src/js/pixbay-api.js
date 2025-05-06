import axios from 'axios';

const API_KEY = '49754838-8d67938118f09bcabafca9026';
const BASE_URL = 'https://pixabay.com/api/';

export default async function getImagesByQuery(query, page = 1) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 15,
        page,
    };
    const response = await axios.get(BASE_URL, { params });
    return response.data.hits;
}
