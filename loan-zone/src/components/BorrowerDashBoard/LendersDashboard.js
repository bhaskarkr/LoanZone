import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios';

const useStyles = makeStyles({
    dashboard:{
        background:'red'
    }
});

export default function SignUp() {
    const classes = useStyles();
    const loans = [
        {
            amount:1000,
            lenderName: "Akanksh",
            lenderPhoneNumber: "1234567890",
            rate: 5,
            borrowdate: Date.now(),
            duration: 12
        },
        {
            amount:5000,
            lenderName: "Akhil",
            lenderPhoneNumber: "0987654321",
            rate: 7,
            borrowdate: Date.now(),
            duration: 5
        }
    ];

    const getLoan = (loan) => {
        return(<Card></Card>)
    };
   

    return (
        <p>sadfsfsd</p>
        // <div className={classes.dashboard}>
        //     {loans.map(loan=>getLoan(loan))}
        // </div>
    );
}