import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    card: {
        maxWidth: 445,
        maxHeight: '80%',
        marginLeft: '40%',
        marginTop: 200,
        background: 'white'
    },
    media: {
        height: 100,
    },
    cardButton: {
        marginLeft: '25%',
        border: 10,
        borderWidth: 3,
        minWidth: 180
    },
    inputField: {
        width: '80%'
    }

});

export default function SignUp() {
    const classes = useStyles();
    const state = {
        name: "",
        pan: "",
        aadhar: "",
        gstin: ""
    }
    const handleTextChange = (event) => {
        console.log(event);
    }

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://www.societegenerale.com/sites/default/files/styles/newsroom_grille/public/logo-societe-generale11_12.jpg?itok=HAPSB8u1"
                    title="Company"
                />
                <CardContent>
                    <form className={classes.forms} noValidate autoComplete="off">
                        <TextField className={classes.inputField} id="outlined-error" label="Name" variant="outlined" value={state.name} placeholder="Enter your Name" onChange={handleTextChange} required /><br /><br />
                        <TextField className={classes.inputField} id="outlined-error" label="PAN" variant="outlined" placeholder="Enter your PAN" /><br /><br />
                        <TextField className={classes.inputField} id="outlined-error" label="Aadhaar" variant="outlined" placeholder="Enter your Aadhar" /><br /><br />
                        <TextField className={classes.inputField} id="outlined-error" label="GSTIN" variant="outlined" placeholder="Enter your GSTIN" /><br /><br />
                        <TextField className={classes.inputField} id="outlined-error" type="password" label="Password" variant="outlined" placeholder="Enter your Password" /><br /><br />
                        <TextField className={classes.inputField} id="outlined-error" type="password" label="Confirm Password" variant="outlined" placeholder="Enter your Password Again" /><br /><br />
                    </form>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className={classes.cardButton} size="large" color="secondary">
                    SignUp
                </Button>
            </CardActions>
        </Card>
    );
}