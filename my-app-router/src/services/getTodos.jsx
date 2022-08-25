import axios from 'axios';
import { Todos_URL } from '../constants/server'

export async function getTodos() {
  try {
    const response = await axios.get(Todos_URL);
    return response.data
  } catch (error) {
    console.error(error);
  }
}