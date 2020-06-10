import axios from 'axios';

export const fetchAPI = async (selectValue) => {
    
    try {
        let response = axios.get('./data.json');
        return response;
        
    } catch (error) {
        console.log(error);
    }
}