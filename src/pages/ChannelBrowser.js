import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { Typography, Grid, Box, Button, TextField, Switch, FormGroup, FormControl, FormControlLabel, Snackbar, Alert } from '@mui/material';
import { CurrentTimeString } from '../common';
import message from '../message';

export const ChannelBrowser = (props) => {
    // useState相当于构造函数初始值，首次加载
    const [ socket, setSocket] = useState(() => { 
        const net = require('net');
        return new net.Socket();
    });
    const [ host, setHost ] = useState(props.host);            
    const [ port, setPort ] = useState(props.port);                  
    const [ connected, setConnected ] = useState(false);
    const [ receive, setReceive ] = useState('');
    const [ receiveall, setReceiveAll ] = useState('');
    const [ receiveCount, setReceiveCount ] = useState(0);
    const [ send, setSend ] = useState('');

    // 副作用事件，receiveCount更新时触发
    useEffect(() => {
        if (receiveCount == 0) {
            setReceiveAll('');
        } else {
            if (receiveall != '') {
                
                setReceiveAll(`${receiveall}${receive}\n`);
            } else {
                setReceiveAll(`${receive}\n`);
            }
        }
    }, [receiveCount]);

    // Socket连接事件
    const handleConnect = () => {
        if (!connected) {
            socket.connect({host: host, port: port}, () => {

                setConnected(true);
                message.success({content: '连接成功！', duration: 3000});

                // close事件，客户端主动断开连接或者服务端主动断开连接都将close事件
                socket.on('close', () => {
                    setConnected(false);
                });

                // data事件，接收数据
                socket.on('data', (data) => {
                    setReceiveCount((prev) => { return prev + 1; });
                    setReceive(`${CurrentTimeString()} ${data.toString()}`);
                });

            });
        } else {
            socket.end();
        }
    };

    socket.on('error', (error) => {
        message.error({content: `发生错误！${error.message}`, duration: 3000});
    });
    // Socket发送数据
    const handleSend = (e) => {
        e.preventDefault();
        socket.write(send);
    };

    return (
        <>
        <Typography variant='h5' align='left' color='textPrimary' gutterBottom>
            通道浏览器
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <TextField id="host" size="small" label="主机地址" variant="outlined" fullWidth value={ host } onChange={(e) => setHost(e.target.value)} />
            </Grid>
            <Grid item xs={3}>
                <TextField id="port" size="small" label="主机端口" variant="outlined" fullWidth value={ port } onChange={(e) => setPort(e.target.value)} />
            </Grid>
            <Grid item xs={3}>
                <FormGroup>
                    <FormControlLabel control={<Switch checked={connected} onChange={ handleConnect } />} label="连接" />
                </FormGroup>
            </Grid>
            <Grid item xs={12}>
                <TextField id='bufferSend' size='small' label='发送数据...' multiline rows={4} variant='outlined' fullWidth onChange={(e) => setSend(e.target.value)} />
            </Grid>
            <Grid item xs={12} container justify="flex-end">
                <Button id='send' size='small' variant='contained' onClick={(e) => handleSend(e)} disabled={!connected} >发送</Button>
            </Grid>
            <Grid item xs={12}>
                <TextField id='bufferReceive' size='small' label='接收数据...' multiline rows={8} variant='outlined' fullWidth value={receiveall} />
            </Grid>
            <Grid item xs={12} container justify="flex-end">
                <Button id='clear' size='small' variant='outlined' onClick={() => setReceiveAll('')}>清除</Button>
            </Grid>
        </Grid>
        </>
    )
}
