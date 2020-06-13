import axios from 'axios';

export const fetchAPI = async (selectValue, selectType) => {
    try {

        let { data: { ItemsCount, Financials } } = await axios.get('./data.json');
        // Get unique values for a given category before filtering - used for select menu
        let Branches = getAllBranch(Financials);
        let DepositType = getAllDepositType(Financials);

        if (selectValue) {
            if (selectType === "Branch") {
                let filteredFinancials = Financials.filter(i => i.BranchName === selectValue);
                Financials = filteredFinancials;
            }
            if (selectType === "DepositType") {
                let filteredFinancials = Financials.filter(i => i.DepositType === selectValue);
                Financials = filteredFinancials;
            }
        }
        return { ItemsCount, Financials, Branches, DepositType };
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

const getAllDepositType = (data) => {
    let allDepositType = data.map(i => i.DepositType);
    //Get distinct deposit type
    let depositType = [...new Set(allDepositType)];
    return depositType;
}