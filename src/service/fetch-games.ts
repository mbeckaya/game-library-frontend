import axios from 'axios';

const url = `http://localhost:3000/api/v1/games`;

export const fetchGames = async () => {
    try {
        const response = await axios.get(url);

        return response.data;
    } catch (error) {
        console.error('Failed to fetch games:', error);
        throw error;
    }
};