import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


import TopTenDepositChart from './TopTenDepositChart';
import TypeOfDepositChart from './TypeOfDepositChart';
import DepositTrendChart from './DepositTrendChart';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    chart: {
        backgroundColor: '#ffffff',
        // paddingLeft: '30px',
        // borderBottom: '1px #2a007d solid',
        // marginBottom: '10px'
    },
})


const Charts = ({ data: { ItemsCount, Financials } }) => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" component="main">
            <Grid container={true} spacing={1}>
                <Grid item xs={4}>
                    <TopTenDepositChart data={Financials} />
                </Grid>
                <Grid item xs={4}>
                    <TypeOfDepositChart data={Financials} />
                </Grid>
                <Grid item xs={4}>
                    <DepositTrendChart data={Financials} />
                </Grid>
                
            </Grid>



        </Container>

    )
}

export default Charts;