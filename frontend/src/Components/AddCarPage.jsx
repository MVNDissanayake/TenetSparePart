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

    const [carModel, setCarModel] = React.useState('');
    const [isCarModelInvalid, setIsCarModelInvalid] = React.useState(true)

    const [year, setYear] = React.useState(2000)
    const [isYearInvalid, setIsYearInvalid] = React.useState(false)

    const handleChange = (event) => {
      setCarBrand(event.target.value);
    };

    const handleAddCar = async () => {
        if( isCarModelInvalid === false && isYearInvalid === false)
        {
            const rawResponse = await fetch('http://localhost:4000/createCar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ carBrand: carBrand, carModel: carModel, year : year })
            });

            console.log(rawResponse);

            if(rawResponse.status === 200)
            {
                alert("Successfully Added A Car");
            }
            else
            {
                alert("Could Not Add Car to the Database ");
            }
        }
        else
        {
            alert("Please Enter a Valid Input");
        }
    }

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
                        <TextField 
                            id="CarModel" 
                            label="Enter Car Model" 
                            fullWidth 
                            error = {isCarModelInvalid}
                            value = {carModel}
                            onChange = { (e) => {
                                setCarModel(e.target.value)
                                if(e.target.value !== null && e.target.value !== "")
                                {
                                    
                                    setIsCarModelInvalid(false)
                                }
                                else
                                {
                                    setIsCarModelInvalid(true)
                                }
                                
                            } }
                            />
                        <br />
                    </Grid>
                    <Grid item xs="12">
                        <br />
                        <br />
                    </Grid>
                    <Grid item xs="12">
                        <TextField 
                            id="Year" 
                            label="Enter Car Manufacture Year" 
                            fullWidth 
                            error = {isYearInvalid}
                            value = {year}
                            type = "number"
                            onChange = { (e) => {
                                setYear(e.target.value)
                                if( Number(e.target.value) < 1950 || Number(e.target.value) >= Number(new Date().getFullYear() + 1))
                                {
                                    
                                    setIsYearInvalid(true)
                                }
                                else
                                {
                                    setIsYearInvalid(false)
                                }
                                
                            } }
                            />
                        <br />
                    </Grid>
                    <Grid item xs="12">
                        <br />
                        <br />
                    </Grid>
                    <Grid item xs="12">
                        <br />
                        <Button 
                            variant="contained" 
                            color="primary" 
                            fullWidth
                            onClick = {() => {handleAddCar()}}
                            >
                            Add Car
                        </Button>
                    </Grid>
                </Grid>



            </Grid>

        </Grid>
    )
}
