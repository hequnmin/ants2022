
import React from 'react';
import { useState } from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CssBaseline, Grid, Toolbar, Container, IconButton } from '@mui/material';
import { DeveloperBoard, Menu } from '@mui/icons-material';
import ChannelBrowser from './pages/ChannelBrowser';
import Dashboard from './pages/Dashboard';

export default function App() {
    const { userID, setUserID } = useState('admin');

    const channel = {
        host: '127.0.0.1',
        port: '10001'
    };

    return (
        <>
            <CssBaseline />
            {/* <AppBar position='relative'>
                <Toolbar>
                    <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
                        <Menu />
                    </IconButton>
                    <Typography variant='h6'>
                        Blueway ATE 2022
                    </Typography>
                </Toolbar>
            </AppBar> */}
            <main>
                <div>
                    {/* <Container maxWidth='sm'>
                        <ChannelBrowser host='127.0.0.1' port ={12345}/>
                    </Container> */}
                    <Dashboard />
                </div>
            </main>
        </>
    )
}
