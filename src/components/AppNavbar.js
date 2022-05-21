import React from "react";
import PropTypes from 'prop-types';
import { CssBaseline, Typography, Box, AppBar, Drawer, Toolbar, IconButton, Badge, List, Divider, Container, Grid, Paper, Link } from '@mui/material';
import { Menu, Notifications, ChevronLeft } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

const drawerWidth = 240;
const AppNavRoot = styled(AppBar, { shouldForwardProp: (prop) => prop !== 'open' })
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


export const AppNavbar = (props) => {
    // const [open, setOpen] = React.useState(props.open);

    const { open, onOpen, ...other } = props;

    return (
        <>
        <AppNavRoot position='absolute' open={open} {...other}>
            <Toolbar sx={{ pr:'24px'}}>
                <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={ onOpen } 
                    sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}>
                    <Menu />
                </IconButton>
                <Typography component='h1' variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
                    Dashboard
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <Notifications />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppNavRoot>
        </>
    );
}

AppNavbar.propTypes = {
    open: PropTypes.bool,
    onOpen: PropTypes.func
};