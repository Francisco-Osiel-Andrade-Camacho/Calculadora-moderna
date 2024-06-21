import React from 'react'
import { Button as MuiButton } from '@mui/material';

const Button = ({ onClick, label }) => {
    return (
        <MuiButton variant="contained" onClick={onClick}>
            {label}
        </MuiButton>
    );
};

export default Button;