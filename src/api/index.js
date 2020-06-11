import axios from 'axios';

export const fetchAPI = async (selectValue) => {
    try {

        let { data: { ItemsCount, Financials } } = await axios.get('./data.json');
        return { ItemsCount, Financials };

    } catch (error) {
        console.log(error);
    }
}