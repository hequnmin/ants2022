import React from "react";
import PropTypes from 'prop-types';
import { Typography, AppBar, Toolbar, IconButton, Badge } from '@mui/material';
import { Menu, Notifications } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;
const DashboardNavRoot = styled(AppBar, { shouldForwardProp: (prop) => prop !== 'open' })
    (({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));


export const DashboardNavbar = (props) => {
    const { open, onOpen, ...other } = props;

    return (
        <>
        <DashboardNavRoot position='absolute' open={open} {...other}>
            <Toolbar sx={{ pr:'24px'}}>
                <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={ onOpen } 
                    sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}>
                    <Menu />
                </IconButton>
                <Typography component='h1' variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
                    Blueway ATE 2022
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <Notifications />
                    </Badge>
                </IconButton>
            </Toolbar>
        </DashboardNavRoot>
        </>
    );
}

DashboardNavbar.propTypes = {
    open: PropTypes.bool,
    onOpen: PropTypes.func
};