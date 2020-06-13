import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

const StatePicker = ({ handleSelectedBranch, data: { Branches } }) => {
    // const [Branch, setBranch] = useState([]);

    // console.log(Branches);
    // useEffect(() => {
    //     const fetchAPI = async () => {
    //         setCountries(await fetchCountries());
    //     };

    //     fetchAPI();
    // }, []  );


    return (
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e) => handleSelectedBranch(e.target.value)}>
                <option value="">All Branches</option>
                {Branches.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default StatePicker;