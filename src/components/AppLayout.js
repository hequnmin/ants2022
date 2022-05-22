import React from "react";
import { CssBaseline, Box, Drawer, Toolbar, Container } from '@mui/material';
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
                <AppSidebar open={ open } onClose={toggleDrawer} />
                </div>
        
                {/* main content */}
                <Box component="main"
                sx={{
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}>
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        { children }
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

