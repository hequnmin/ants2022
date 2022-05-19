import React, { useState, useEffect } from 'react';
import { Typography, Grid, Box, Button, TextField, Switch, FormGroup, FormControl, FormControlLabel } from '@mui/material';

const Channel = (props) => {
    // useState相当于构造函数初始值，首次加载
    const [ host, setHost ] = useState("127.0.0.1");            
    const [ port, setPort ] = useState(12345);                  
    const [ connected, setConnected ] = useState(false);
    const [ receive, setReceive] = useState('');
    const [ receiveall, setReceiveAll] = useState('');
    const [ receiveCount, setReceiveCount] = useState(0);
    const [ send, setSend ] = useState('');
    const [ socket, setSocket] = useState(() => { 
        const net = require('net');
        return new net.Socket();
    });

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
    const connectHandle = () => {
        if (!connected) {
            socket.connect({host: host, port: port}, () => {
                setConnected(true);

                // close事件，客户端主动断开连接或者服务端主动断开连接都将close事件
                socket.on('close', () => {
                    setConnected(false);
                });

                // data事件，接收数据
                socket.on('data', (data) => {
                    setReceiveCount((prev) => { return prev + 1; });
                    setReceive(data.toString());
                });

            });
        } else {
            socket.end();
        }
    }

    const sendHandle = (e) => {
        e.preventdefault();
        socket.write(send);
    }

    return (
        <>
        <Typography variant='h5' align='left' color='textPrimary' gutterBottom>
            Channel Browser
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <TextField id="host" size="small" label="Server Host" variant="outlined" fullWidth value={ host } onChange={(e) => setHost(e.target.value)} />
            </Grid>
            <Grid item xs={3}>
                <TextField id="port" size="small" label="Server Port" variant="outlined" fullWidth value={ port } onChange={(e) => setPort(e.target.value)} />
            </Grid>
            <Grid item xs={3}>
                <FormGroup>
                    <FormControlLabel control={<Switch checked={connected} onChange={ connectHandle } />} label="Connect" />
                </FormGroup>
            </Grid>
            <Grid item xs={12}>
                <TextField id='bufferSend' size='small' label='Send Data...' multiline rows={4} variant='outlined' fullWidth onChange={(e) => setSend(e.target.value)} />
            </Grid>
            <Grid item xs={12} container justify="flex-end">
                <Button id='send' size='small' variant='contained'>Send</Button>
            </Grid>
            <Grid item xs={12}>
                <TextField id='bufferReceive' size='small' label='Receive Data...' multiline rows={8} variant='outlined' fullWidth value={receiveall} />
            </Grid>
            <Grid item xs={12} container justify="flex-end">
                <Button id='clear' size='small' variant='outlined' onClick={() => setReceiveAll('')}>Clear</Button>
            </Grid>
        </Grid>
        </>
    )
}

export default Channel;
