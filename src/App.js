
import React, { useState, useEffect, Component } from 'react';
import path from 'path';
import fs from 'fs';
import { HashRouter, Route, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';

import { AppLayout } from './components/AppLayout';
import { DashboardLayout } from './components/DashboardLayout';
import { Home } from './pages/Home';
import { Demo } from './pages/Demo';
import { TCPClient } from './pages/TCPClient';
import { TCPServer } from './pages/TCPServer';
import { Machines } from './pages/Machines';
import { Monitor } from './pages/Monitor';
import { Config } from './common';
import message from './message';

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

let config;

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            config: null
        };

        // 读取配置文件
        const fileConfig = path.join(__dirname,'src','config.json');
        Config(fileConfig).then((data) => {
            this.setState({
                config: data
            });
        }).catch((error) => {
            message.error({content: `加载配置文件发生错误！${error}`, duration: 10000});
        });

    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <HashRouter>
                    <DashboardLayout>
                        <Routes>
                            <Route path="/" caseSensitive={false} element={<Home />} />
                            <Route path="/home" caseSensitive={false} element={<Home />} />
                            <Route path="/demo" caseSensitive={false} element={<Demo />} />
                            <Route path="/tcpclient" caseSensitive={false} element={<TCPClient host={this.state.config ? this.state.config.host : '127.0.0.1'} port={this.state.config ? this.state.config.port : 12345} />} />
                            <Route path="/monitor" caseSensitive={false} element={<Monitor />} />
                            <Route path="/tcpserver" caseSensitive={false} element={<TCPServer />} />
                        </Routes>
                    </DashboardLayout>
                    {/* <AppLayout>
                        <Routes>
                            <Route path="/" caseSensitive={false} element={<Machines />} />
                        </Routes>
                    </AppLayout> */}
                </HashRouter>
            </ThemeProvider>
        );
    }
}
