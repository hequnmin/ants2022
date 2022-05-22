
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';
import { AppLayout } from './components/AppLayout';
import { Home } from './pages/Home';
import { Demo } from './pages/Demo';
import { ChannelBrowser } from './pages/ChannelBrowser';

const theme = createTheme({
    palette: {
      primary: {
        main: '#fefefe'
      },
      secondary: purple
    },
    typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    }
  })

export default function App() {

    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <AppLayout>
                    <Routes>
                        <Route path="/" caseSensitive={false} element={<Home />} />
                        <Route path="/home" caseSensitive={false} element={<Home />} />
                        <Route path="/demo" caseSensitive={false} element={<Demo />} />
                        <Route path="/channelbrowser" caseSensitive={false} element={<ChannelBrowser />} />
                    </Routes>
                </AppLayout>
            </HashRouter>
        </ThemeProvider>
      );
}
