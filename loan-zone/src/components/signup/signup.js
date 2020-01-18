import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const useStyles = makeStyles({
    card: {
        maxWidth: 445,
        maxHeight: '80%',
        marginLeft: '40%',
        marginTop: 200,
        background: 'white',
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
    const [name, setName] = useState('');
    const [pan, setPan] = useState('');
    const [aadhaar, setAadhaar] = useState('');
    const [gstin, setGstin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dob, setDob] = useState('');
    const [done, setDone] = useState(false);
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handlePanChange = (event) => {
        setPan(event.target.files[0]);
    }
    const handleAadhaarChange = (event) => {
        setAadhaar(event.target.value);
    }
    const handleGstinChange = (event) => {
        setGstin(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }
    const handleDobChange = (event) => {
        setConfirmPassword(event.target.value);
    }
    const handleSignUp = (event) => {

        if(password !== confirmPassword)
        {
            alert("password mismatch")
        }
        setDone(true);
        let signUpPayload = {
            name: name,
            pan: pan,
            aadhaar: aadhaar,
            gstin: gstin,
            password: password,
            dob: dob
        }
        var formData = new FormData();
        formData.append('name',name);
        formData.append('pan',pan);
        formData.append('aadhaar',aadhaar);
        formData.append('gstin',gstin);
        formData.append('password',password);
        console.log(formData.get('pan'));
        axios.post("http://192.168.100.56:5244/register", { data: formData })
            .then(response=>{
                console.log(response);
                setDone(false);
            })
            .catch(err=>{
                setDone(false);
                console.log(err);
                alert("Server Issue");
            })
    }

    return (
        <Card className={classes.card} elevation="15">

            <CardMedia
                className={classes.media}
                image="https://www.societegenerale.com/sites/default/files/styles/newsroom_grille/public/logo-societe-generale11_12.jpg?itok=HAPSB8u1"
                title="Company"
            />
            <CardContent>
                {/* {passwordMismatch} */}
                <form className={classes.forms} noValidate autoComplete="off">
                    <TextField className={classes.inputField} id="outlined-error" label="Name" variant="outlined" value={name} placeholder="Enter your Name" onChange={handleNameChange}  /><br /><br />
                    {/* <TextField className={classes.inputField} id="outlined-error" label="DOB" variant="outlined" placeholder="Enter your Date Of Birth" onChange={handleDobChange}  /><br /><br /> */}
                    <TextField className={classes.inputField} id="outlined-error" type="file" label="PAN"  placeholder="Enter your PAN" onChange={handlePanChange}  /><br /><br />
                    <TextField className={classes.inputField} id="outlined-error"  type="file"label="Aadhaar"  placeholder="Enter your Aadhar" onChange={handleAadhaarChange}  /><br /><br />
                    <TextField className={classes.inputField} id="outlined-error" label="GSTIN" variant="outlined" placeholder="Enter your GSTIN" onChange={handleGstinChange}  /><br /><br />
                    <TextField className={classes.inputField} id="outlined-error" type="password" label="Password" variant="outlined" placeholder="Enter your Password" onChange={handlePasswordChange}  /><br /><br />
                    <TextField className={classes.inputField} id="outlined-error" type="password" label="Confirm Password" variant="outlined" placeholder="Enter your Password Again" onChange={handleConfirmPasswordChange}  /><br /><br />
                </form>
            </CardContent>

            <CardActions>
                <Button className={classes.cardButton} size="large" color="secondary" elevation="15" onClick={handleSignUp} disabled={done} >
                    SignUp
                </Button>
            </CardActions>
        </Card>
    );
}