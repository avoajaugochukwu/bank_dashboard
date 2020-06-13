import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CountUp from 'react-countup';

// import style from '.'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    boxWrapper: {
        backgroundColor: '#ffffff',

    },
    boxHeader: {
        borderBottom: '1px solid #c8cdf6',
        paddingBottom: '0 !important',
        paddingBottom: '10px !important',
        paddingTop: '10px',
        align: 'left',
    },
    boxBody: {
        paddingBottom: '20px',
        fontWeight: 'bold',
        fontSize: '150%',
        color: '#8e98ed',
    }

});

const Cards = ({ data: { ItemsCount, Financials } }) => {
    const classes = useStyles();

    if (!ItemsCount) {
        return 'loading..';
    }

    //Get sum of values
    let TotalDeposit = Financials.map(item => item.TotalDeposit).reduce((a, b) => a + b, 0);
    let LiquidAsset = Financials.map(item => item.LiquidAsset).reduce((a, b) => a + b, 0);
    let GrossLoan = Financials.map(item => item.GrossLoan).reduce((a, b) => a + b, 0);
    let Budget = Financials.map(item => item.Budget).reduce((a, b) => a + b, 0);
    let TotalAssets = Financials.map(item => item.TotalAssets).reduce((a, b) => a + b, 0);
    let OverallRating = TotalDeposit / Budget;

    return (
        <Container maxWidth="lg" component="main">
            <Grid container={true} spacing={1} className={classes.wrapper}>
                <Grid item xs={12} sm={12} md={2}>
                    <Box className={classes.boxWrapper}>
                        <Box>
                            <p className={classes.boxHeader}>Total Deposit</p>
                        </Box>
                        <Box>
                            <p className={classes.boxBody}>
                                &#8358; <CountUp start={0} end={TotalDeposit} duration={3} separator="," />
                            </p>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={2}>
                    <Box className={classes.boxWrapper}>
                        <Box>
                            <p className={classes.boxHeader}>Liquid Asset</p>
                        </Box>
                        <Box>
                            <p className={classes.boxBody}>
                                &#8358; <CountUp start={0} end={LiquidAsset} duration={3} separator="," />
                            </p>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={2}>
                    <Box className={classes.boxWrapper}>
                        <Box>
                            <p className={classes.boxHeader}>Gross Loan</p>
                        </Box>
                        <Box>
                            <p className={classes.boxBody}>
                                &#8358; <CountUp start={0} end={GrossLoan} duration={3} separator="," />
                            </p>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={2}>
                    <Box className={classes.boxWrapper}>
                        <Box>
                            <p className={classes.boxHeader}>Budget</p>
                        </Box>
                        <Box>
                            <p className={classes.boxBody}>
                                &#8358; <CountUp start={0} end={Budget} duration={3} separator="," />
                            </p>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={2}>
                    <Box className={classes.boxWrapper}>
                        <Box>
                            <p className={classes.boxHeader}>Total Assets</p>
                        </Box>
                        <Box>
                            <p className={classes.boxBody}>
                                &#8358; <CountUp start={0} end={TotalAssets} duration={3} separator="," />
                            </p>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={2}>
                    <Box className={classes.boxWrapper}>
                        <Box>
                            <p className={classes.boxHeader}>Total Assets</p>
                        </Box>
                        <Box>
                            <p className={classes.boxBody}>
                                {OverallRating.toPrecision(2)} %
                            </p>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Cards;