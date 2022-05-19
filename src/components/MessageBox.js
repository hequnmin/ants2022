import React, { useState, useEffect } from "react";
import { Snackbar, Alert } from '@mui/material';

const MessageBox = (props) => {
    const [ open, setOpen ] = useState(true);
    const [ severity, setSeverity ] = useState('success');
    const [ content, setContent ] = useState(props.content);

    // useEffect(() => {
    //     setInterval(() => {
    //         setOpen(false);
    //     }, 5000);
    // });

    return (
        <Snackbar open={open} autoHideDuration={5000} onClose={() => setOpen(false)}>
            <Alert onClose={() => setOpen(false)} severity='success' sx={{ width: '100%' }}>
                { content }
            </Alert>
        </Snackbar>
    )
}

export default MessageBox;
