import React from "react";
import { CssBaseline, Box, Toolbar, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppNavbar } from "./AppNavbar";

const mdTheme = createTheme();

export const AppLayout = ({ children }) => {
    

    return (
        <ThemeProvider theme={ mdTheme }>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppNavbar />

                <Box component="main"
                    sx={{
                        backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                    >
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        { children }
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

