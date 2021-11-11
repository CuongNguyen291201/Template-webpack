import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const Toast = ({  }) => {
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open toast</Button>
            <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={handleClose} 
            >
                <Alert severity="success">hallo</Alert>
            </Snackbar>
        </>
    )
}

export default Toast
