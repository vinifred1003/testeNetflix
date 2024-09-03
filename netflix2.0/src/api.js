import axios from 'axios';
import { maiorDeIdade } from './components/Row';
export const getCategories = async () => {
    try {
        const response = await axios.get('http://localhost:3001/categories');
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};

export const getData = async (path) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3001/selectedCategory',
        headers: {
            'Content-Type': 'application/json'
        },
        data: { pathChosed: path }
    };

    try {

        const response = await axios.request(config);
        console.log("data: ", response.data)

        if (sessionStorage.getItem('userAge') < maiorDeIdade) {
            if (response.data.results) {
                response.data.results = response.data.results.filter((movie) => !movie.adult);
                return response.data.results;
            }
        } else {
            return response.data;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};