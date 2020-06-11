import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import TopTenDepositChart from './TopTenDepositChart';

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
                <Grid item xs={12} sm={12} md={4} className={classes.chart}>
                    <TopTenDepositChart data={Financials} />
                </Grid>
                {/*  */}
                <Grid item xs={12} sm={12} md={4}>
                    <Grid item xs={12} sm={12} md={6} className={classes.chart}>
                        <h1>Home</h1>
                    </Grid>
                </Grid>
            </Grid>
            

        </Container>

    )
}

export default Charts;