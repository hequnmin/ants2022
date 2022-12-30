import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { Typography, Grid, Box, Button, TextField, Switch, FormGroup, FormControl, FormControlLabel, Snackbar, Alert, RadioGroup, Radio, FormLabel } from '@mui/material';
import { CurrentTimeString } from '../common';
import message from '../message';
import { Buffer } from 'buffer';
import { fs } from 'fs';

export const TCPClient = (props) => {
    // useState相当于构造函数初始值，首次加载
    const [ socket, setSocket] = useState(() => { 
        const net = require('net');
        return new net.Socket();
    });
    const [ host, setHost ] = useState(props.host);            
    const [ port, setPort ] = useState(props.port);                  
    const [ connected, setConnected ] = useState(false);
    
    const [ data, setData ] = useState('');
    const [ dataall, setDataAll ] = useState('');
    const [ dataCount, setDataCount ] = useState(0);
    const [ send, setSend ] = useState('');

    const [ receiveEncode, setReceiveEncode ] = useState('hex');
    const [ sendEncode, setSendEncode ] = useState('hex');

    // 副作用事件，receiveCount更新时触发
    useEffect(() => {
        if (dataCount == 0) {
            setDataAll('');
        } else {
            if (dataall != '') {
                
                setDataAll(`${dataall}${data}\n`);
            } else {
                setDataAll(`${data}\n`);
            }
        }
    }, [dataCount]);

    const handleHost = (e) => {
        e.preventDefault();
        setHost(e.target.value);
    };

    const handleSendEncode = (e) => {
        e.preventDefault();
        setSendEncode(e.target.value);
    };

    const handleReceiveEncode = (e) => {
        e.preventDefault();
        setReceiveEncode(e.target.value);
    };

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

            });
        } else {
            socket.end();
        }
    };

    // data事件，接收数据
    socket.on('data', (data) => {
        // setReceiveCount((prev) => { return prev + 1; });
        // setReceive(`${CurrentTimeString()} ${data.toString()}`);
        handleDataReceive(data);
    });

    // error事件
    socket.on('error', (error) => {
        message.error({content: `发生错误！${error.message}`, duration: 3000});
    });

    // Socket发送数据
    const handleDataSend = (e) => {
        e.preventDefault();

        setDataCount((prev) => { return prev + 1; });
        setData(`${CurrentTimeString()}  ${send}`);

        if (sendEncode == 'ascii') {
            socket.write(send);
        } else {
            const buf = Buffer.from(send.replace(/\s/g, ''), sendEncode);
            socket.write(buf);
        }
    };

    // Socket接收数据
    const handleDataReceive = (buf) => {
        setDataCount((prev) => { return prev + 1; });
        if (receiveEncode == 'ascii') {
            setData(`${CurrentTimeString()}  ${buf.toString()}`);
        } else {
            // buffer 转 空格间隔的16进制字符串
            setData(`${CurrentTimeString()}  ${Buffer.from(buf).toString('hex').match(/[a-z0-9][a-z0-9]/g).join(' ')}`);
        }
    };

    return (
        <>
        <Typography variant='h5' align='left' color='textPrimary' gutterBottom>
            TCP Client
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <TextField id="host" size="small" label="主机地址" variant="outlined" fullWidth value={ host } onChange={(e) => handleHost(e) } />
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
                <FormControl>
                    <FormLabel>发送设置</FormLabel>
                    <RadioGroup row onChange={(e) => handleSendEncode(e)} value={sendEncode}>
                        <FormControlLabel value="ascii" control={<Radio />} label="ASCII" />
                        <FormControlLabel value="hex" control={<Radio />} label="HEX" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <TextField id='bufferSend' size='small' label='发送数据...' multiline rows={4} variant='outlined' fullWidth onChange={(e) => setSend(e.target.value)} />
            </Grid>
            <Grid item xs={12} container justify="flex-end">
                <Button id='send' size='small' variant='contained' onClick={(e) => handleDataSend(e)} disabled={!connected} >发送</Button>
            </Grid>
            <Grid item xs={12}>
                <FormControl>
                    <FormLabel>接受设置</FormLabel>
                    <RadioGroup row onChange={(e) => handleReceiveEncode(e)} value={receiveEncode}>
                        <FormControlLabel value="ascii" control={<Radio />} label="ASCII" />
                        <FormControlLabel value="hex" control={<Radio />} label="HEX" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <TextField id='bufferData' size='small' label='数据日志...' multiline rows={8} variant='outlined' fullWidth value={dataall} />
            </Grid>
            <Grid item xs={12} container justify="flex-end">
                <Button id='clear' size='small' variant='outlined' onClick={() => setDataAll('')}>清除</Button>
            </Grid>
        </Grid>
        </>
    )
}

TCPClient.propTypes = {
    host: PropTypes.string,
    port: PropTypes.number
};
