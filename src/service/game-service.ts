import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/games'; // https://github.com/mbeckaya/game-library-api

export const getGames = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Failed to GET all games:', error);
        throw error;
    }
};

export const getGameById = async (id: string|undefined) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Failed to GET a game:', error);
        throw error;
    }
};