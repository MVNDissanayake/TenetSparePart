import React from 'react'
import { Grid, Container, Typography, Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import LoginCover from "../Assests/LoginCover.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function LoginPage() {

    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs="6">

                                    
                    <Grid container style = {{padding:"16px"}}>
                        <Grid item xs="12">
                            <Typography variant="h3">
                                Login
                            </Typography>
                            <br />
                            <br />
                        </Grid>
                        <Grid item xs="12">
                            <br />
                            <br />
                        </Grid>
                        <Grid item xs="12">
                            <TextField id="Username" label="Username" fullWidth />
                            <br />
                        </Grid>
                        <Grid item xs="12">
                            <br />
                            <br />
                        </Grid>
                        <Grid item xs="12">
                            <TextField id="Password" label="Password" fullWidth />
                            <br />
                        </Grid>
                        <Grid item xs="12">
                            <br />
                            <br />
                        </Grid>
                        <Grid item xs="12">
                            <br />
                            <Button variant="contained" color="primary" fullWidth>
                                Login
                            </Button>
                        </Grid>
                    </Grid>

        

            </Grid>
            <Grid item xs="6">
                <img src={LoginCover} style={{ width: "100%" , height:"100%"}} />
            </Grid>
        </Grid>
    )
}
