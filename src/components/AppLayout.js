import React from "react";
import { CssBaseline, Typography, Box, AppBar, Drawer, Toolbar, IconButton, Badge, List, Divider, Container, Grid, Paper, Link } from '@mui/material';
import { Menu, Notifications, ChevronLeft } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import { AppNavbar } from "./AppNavbar";
import { AppSidebar } from "./AppSidebar";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

const drawerWidth = 240;
const AppNavDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        boxSizing: 'border-box',
        ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },})
        }
    }));
  
const mdTheme = createTheme();

export default function AppLayout({ children }) {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={ mdTheme }>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                {/* app bar */}
                <AppNavbar open={ open } onOpen={toggleDrawer} />
                {/* side drawer */}
                <div>
                <AppSidebar open={ open } onClose={toggleDrawer}/>
                </div>
        
                {/* main content */}
                <div>
                { children }
                </div>
            </Box>
        </ThemeProvider>
    );
}

