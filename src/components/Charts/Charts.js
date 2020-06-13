import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import TopTenDepositChart from './TopTenDepositChart';
import TypeOfDepositChart from './TypeOfDepositChart';
import DepositTrendChart from './DepositTrendChart';

const Charts = ({ data: { ItemsCount, Financials } }) => {

    return (
        <Container maxWidth="lg" component="main">
            <Grid container={true} spacing={1}>
                <Grid item xs={12} sm={12} md={4}>
                    <TopTenDepositChart data={Financials} />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <TypeOfDepositChart data={Financials} />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <DepositTrendChart data={Financials} />
                </Grid>

            </Grid>
        </Container>
    )
}

export default Charts;