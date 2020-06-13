import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import {getTodaysDate} from '../HelperFunctions';

const useStyles = makeStyles({
    root: {
        borderRadius: '0px',
        padding: '30px',
        marginTop: '10px',
    },
});



const StatePicker = ({ handleSelectedBranch, handleSelectedDepositType, data: { Branches, DepositType } }) => {
    const classes = useStyles();
    let today = getTodaysDate();
    return (
        <div>
            <AppBar position="static">
                <Container maxWidth="md" component="main">
                    <Toolbar>
                        <h1>Bank Dashboard</h1>
                        <p>&nbsp;Last updated { today }</p>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container>
                <Paper className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item>
                            <FormControl>
                                <NativeSelect defaultValue="" onChange={(e) => handleSelectedDepositType(e.target.value)}>
                                    <option value="">&nbsp;&nbsp;All Deposit Type&nbsp;</option>
                                    {DepositType.map((depositType, i) => <option key={i} value={depositType}>
                                        &nbsp;&nbsp;{depositType}&nbsp;&nbsp;
                                    </option>)}
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <NativeSelect defaultValue="" onChange={(e) => handleSelectedBranch(e.target.value)}>
                                    <option value="">&nbsp;&nbsp;All Branches&nbsp;&nbsp;</option>
                                    {Branches.map((branch, i) => <option key={i} value={branch}>
                                        &nbsp;&nbsp;{branch}&nbsp;&nbsp;
                                    </option>)}
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                    </Grid>
                    
                    
                    
                </Paper>
            </Container>
            
        </div>
    )
}

export default StatePicker;