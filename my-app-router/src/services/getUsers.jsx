import axios from 'axios';
import { Users_URL } from '../constants/server'

export async function getUsers() {
  try {
    const response = await axios.get(Users_URL);
    return response.data
  } catch (error) {
    console.error(error);
  }
}