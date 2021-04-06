import React, {useState} from 'react';
import ReactDOM from "react-dom";
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import theme from '../themes/Theme' // Theme.jsで上書きした配色読み込み
import {Box, Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width:'100vw',
        padding: theme.spacing(2),
    },
    button: {
        '&:hover':{
            color: '#fcfcfc',
        },
    },

}))

const Header = (props) => {
    const classes = useStyles(props);

    return (
        <ThemeProvider theme={theme}>
            <Box bgcolor="success.main" className={classes.root}>
                てすとなの
                <Button variant="contained" color="primary" className={classes.button}>
                    Primary
                </Button>
            </Box>
        </ThemeProvider>
    );
}

export default Header;

if (document.getElementById('header')) {
    ReactDOM.render(<Header/>, document.getElementById('example'));
}
