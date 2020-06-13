import axios from 'axios';

export const fetchAPI = async (selectValue) => {
    try {

        let { data: { ItemsCount, Financials } } = await axios.get('./data.json');
        let Branches = getAllBranch(Financials);
        
        if (selectValue) {
            // console.log(selectValue);
            let filteredFinancials = Financials.filter(i => i.BranchName === selectValue);
            Financials = filteredFinancials;
        }
        
        return { ItemsCount, Financials, Branches };

    } catch (error) {
        console.log(error);
    }
}

const getAllBranch = (data) => {
    
    let allBranch = data.map(i => i.BranchName);
    //Get distinct branches array
    let branches = [...new Set(allBranch)];

    return branches;
}