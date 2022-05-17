import React from "react";
import { Snackbar, Alert } from '@mui/material';

const Message = (props) => {
    const { content, duration, type } = {...props};
    // 开关控制：默认true,调用时会直接打开
    const [open, setOpen] = React.useState(true);
    // 关闭消息提示
    const handleClose = (event, reason) => {
        setOpen(false);
    };
    return <Snackbar
        open={open}
        autoHideDuration={duration}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        onClose={handleClose}>
            <Alert severity={type}>{content}</Alert>
        </Snackbar>
}

export default Message;