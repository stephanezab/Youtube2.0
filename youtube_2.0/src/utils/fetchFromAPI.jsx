import axios from 'axios'
import React from 'react';

const URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    method: 'GET',
    params: { 
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_API_KEY,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${URL}/${url}`, options)

    return data
  }