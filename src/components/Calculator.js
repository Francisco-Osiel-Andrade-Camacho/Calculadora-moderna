import React, { useState } from 'react';
import { Container, Grid, Paper, TextField, Box } from '@mui/material';
import Button from './Button';

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                setInput(eval(input).toString());
            } catch (e) {
                setInput('Error');
            }
        } else if (value === 'C') {
            setInput('');
        } else {
            setInput(input + value);
        }
    };

    const buttons = [
        '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'
    ];

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 2, marginTop: 5 }}>
                <TextField
                    fullWidth
                    value={input}
                    inputProps={{ readOnly: true }}
                    variant="outlined"
                />
                <Box sx={{ marginTop: 2 }}>
                    <Grid container spacing={2}>
                        {buttons.map((btn) => (
                            <Grid item xs={3} key={btn}>
                                <Button onClick={() => handleClick(btn)} label={btn} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
};

export default Calculator;
