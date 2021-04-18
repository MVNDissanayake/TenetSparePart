import React from 'react'
import { Grid, Container, Typography, Button, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
          },
          selectEmpty: {
            marginTop: theme.spacing(2),
          },
    },
}));

export default function AddCarPage() {

    const classes = useStyles();

    const [carBrand, setCarBrand] = React.useState('Toyota');

    const handleChange = (event) => {
      setCarBrand(event.target.value);
    };

    return (
        <Grid container>
            <Grid item xs="12">
                <Grid container style={{ padding: "16px" }}>
                    <Grid item xs="12">
                        <Typography variant="h3">
                            Add Car
                        </Typography>
                        <br />
                        <br />
                    </Grid>
                    <Grid item xs="12">
                        <br />
                        <br />
                    </Grid>
                    <Grid item xs="12">
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Car Brand</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={carBrand}
                                onChange={handleChange}
                                fullWidth
                                style = {{width:"95vw"}}
                            >
                                <MenuItem value={"Toyota"}>Toyota</MenuItem>
                                <MenuItem value={"Suzuki"}>Suzuki</MenuItem>
                                <MenuItem value={"Nissan"}>Nissan</MenuItem>
                                <MenuItem value={"Honda"}>Honda</MenuItem>
                                <MenuItem value={"Mazda"}>Mazda</MenuItem>
                                <MenuItem value={"Mistsubishi"}>Mistsubishi</MenuItem>
                            </Select>
                        </FormControl>
                        <br />
                    </Grid>
                    <Grid item xs="12">
                        <br />
                        <br />
                    </Grid>
                    <Grid item xs="12">
                        <TextField id="CarModel" label="Enter Car Model" fullWidth />
                        <br />
                    </Grid>
                    <Grid item xs="12">
                        <br />
                        <br />
                    </Grid>
                    <Grid item xs="12">
                        <TextField id="Year" label="Enter Car Manufacture Year" fullWidth />
                        <br />
                    </Grid>
                    <Grid item xs="12">
                        <br />
                        <br />
                    </Grid>
                    <Grid item xs="12">
                        <br />
                        <Button variant="contained" color="primary" fullWidth>
                            Add Car
                        </Button>
                    </Grid>
                </Grid>



            </Grid>

        </Grid>
    )
}
