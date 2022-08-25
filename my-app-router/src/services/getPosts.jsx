import axios from 'axios';
import { Posts_URL } from '../constants/server';

export async function getPosts() {
    try {
        const response = await axios.get(Posts_URL);
        return response.data
    } catch (error) {
        console.error(error);
    }
}