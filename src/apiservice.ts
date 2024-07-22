// src/apiService.ts
import axios from 'axios';

const BASE_URL = 'https://placehold.co/';

export const getImage = async (width: number, height: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/${width}x${height}`);
    return response.request.responseURL;
  } catch (error) {
    console.error('Error fetching the image:', error);
    throw error;
  }
};
