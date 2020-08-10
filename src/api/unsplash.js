import axios from 'axios';
import { UNSPLASH_URL, ACCESS_KEY, SEARCH_PHOTOS } from '../constants';

const unsplash = axios.create({
  baseURL: UNSPLASH_URL,
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  }
});

export const getImages = async (term) => {
  try {
    const response = await unsplash.get(SEARCH_PHOTOS, {
      params: { query: term }
    });
    if (response) {
      return response.data.results;
    }
    return Promise.reject('Failed to get images.');
  } catch (e) {
    console.log(`Failed to get images with expcetion:${e}.`);
  }
}
export default unsplash;