import React from "react";
import PropTypes from 'prop-types';
import { Typography, AppBar, Toolbar, IconButton } from '@mui/material';

export const AppNavbar = (props) => {

    return (
        <>
        <AppBar position='absolute'>
            <Toolbar sx={{ pr:'24px'}} variant="dense">
                <Typography component='h1' variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
                    Blueway ATE 2022
                </Typography>
            </Toolbar>
        </AppBar>
        </>
    );
}

