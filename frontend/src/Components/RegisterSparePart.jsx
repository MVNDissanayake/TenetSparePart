import React from 'react'
import { Grid, Container, Typography, Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
}));


export default function RegisterSparePart() {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs="12">
                <Grid container style={{ padding: "16px" }}>
                    <Grid item xs="12">
                        <Typography variant="h3">
                           Register  Dealing Spare Part 
                        </Typography> 
                        <br />
                        <br />
                    </Grid>
                    <Grid item xs="6">
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={[{carName:'Toyota RX7 2018' , carID : "123"}, {carName:'Mazda RX7 2018' , carID : "321"}]}
                                    getOptionLabel={(option) => option.carName}
                                    style={{ width: "95%" , marginRight:"16px"}}
                                    renderInput={(params) => <TextField {...params} label="Car Name" variant="outlined" />}
                                />
                        <br />
                        <br />
                    </Grid>
                    <Grid item xs="6">
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={[{carName:'Front Bumper' , partID : "123"}, {carName:'Rear Bumper' , partID : "321"}]}
                                    getOptionLabel={(option) => option.carName}
                                    style={{ width: "100%" }}
                                    renderInput={(params) => <TextField {...params} label="Part Name" variant="outlined" />}
                                />
                        <br />
                    </Grid>
              
                    <Grid item xs="12">
                        <TextField id="InitiaStockAmount" label="Initial Stock Amount" fullWidth  />
                        <br />
                    </Grid>
                    <Grid item xs="12">
                        <br />
                        <br />
                    </Grid>
                    <Grid item xs="12">
                    <TextField id="Price" label="Unit Price" type = "number" fullWidth />
                        <br />
                        <br />
                    </Grid>
                    <Grid item xs="12">
                        <br />
                        <Button variant="contained" color="primary" fullWidth>
                           Add Part 
                        </Button>
                    </Grid>
                </Grid>



            </Grid>
            <Grid item xs="6">
              
            </Grid>
        </Grid>
    )
}
