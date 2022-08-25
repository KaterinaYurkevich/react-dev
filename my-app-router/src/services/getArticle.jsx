import axios from 'axios';
import { Posts_URL } from '../constants/server';

export async function getArticle(id) {
  try {
    const response = await axios.get(`${Posts_URL}?fq=uri:("nyt://article/${id}")`);
    return response.data
  } catch (error) {
    console.error(error);
  }
}