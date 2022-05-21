import React from "react";
import { CssBaseline, Box, Drawer } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppNavbar } from "./AppNavbar";
import { AppSidebar } from "./AppSidebar";
  
const mdTheme = createTheme();

export const AppLayout = ({ children }) => {
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

