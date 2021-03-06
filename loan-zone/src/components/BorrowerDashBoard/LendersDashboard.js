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
import FilterModal from './FilterModal';

const useStyles = makeStyles({
    dashboard: {
        height: '100%',
        width: '100%',
    },
    card: {
        maxWidth: 755,
        maxHeight: '20%',
        height: 220,
        minWidth: 100,
        marginLeft: '35%',
        marginTop: 200,
        marginTop: 50,
        background: 'white',

    },
    cardButton: {
        marginLeft: '75%',
        minWidth: 180,
        position: 'relative',
        right: '-20px',
        top: '-160px'
    },
    forms:{
        marginLeft: '40%',
        marginTop: 50,
        display:'inline-block'
    },
    ApplyLoanButton:{
        left: '50%',
        marginTop: '40px'
    }
    
});

export default function SignUp() {
    const classes = useStyles();
    const [modalState, setModalState] = useState(false);
    const loans = [
        {
            amount: 1000,
            lenderName: "Akanksh",
            lenderPhoneNumber: "1234567890",
            rate: 5,
            borrowdate: new Date().toLocaleString(),
            duration: 12
        },
        {
            amount: 5000,
            lenderName: "Akhil",
            lenderPhoneNumber: "0987654321",
            rate: 7,
            borrowdate: new Date().toLocaleString(),
            duration: 5
        }
    ];

    const handleModalOpen = () => {
        setModalState(true);
    };
    const handleModalClose = () => {
        setModalState(false);
    };

    const getLoan = (loan) => {
        return (<Card className={classes.card} elevation='20'>
            <CardContent>
                <p>Lender's Name = {loan.lenderName}</p>
                <p>Lender's Phone Number = {loan.lenderPhoneNumber}</p>
                <p>Interest Rate = {loan.rate}</p>
                <p>Borrow Date = {loan.borrowdate}</p>
                <p>Amount = {loan.amount}</p>

            </CardContent>
            <CardActions>
                <Button className={classes.cardButton} size="large" color="secondary" elevation="15"   >
                    PAY
                </Button>
            </CardActions>
        </Card>)
    };


    return (
        <div className={classes.dashboard} >
            <Button className={classes.ApplyLoanButton} onClick={handleModalOpen}>Apply Loan</Button>
            {loans.map(loan => getLoan(loan))}
            {modalState && <FilterModal openState={modalState} handleModalClose={handleModalClose} />}
        </div>
    );
}