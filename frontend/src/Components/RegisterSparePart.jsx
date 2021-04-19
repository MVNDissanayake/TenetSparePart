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

    React.useEffect(() => {
        fetch('http://localhost:4000/getAllCars', { // fake API endpoint
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCarList(data)
            })
            .catch(err => {
                console.error(err);
            });
    }, [])

    const handleSubmit = async() => {

        console.log(carID.substr(0, carID.indexOf(':')), partType)

        const rawResponse = await fetch('http://localhost:4000/createSparePart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ sparePartType: partType , car_id : carID.substr(0, carID.indexOf(':')) , stock : stock , price : price })
        });

        console.log(rawResponse);

        if(rawResponse.status === 200)
        {
            alert("Successfully Added ");
        }
        else
        {
            alert("Could Not Add Car to the Database ");
        }

    }

    const [price, setPrice] = React.useState(0)
    const [isPriceInvalid, setIsPriceInvalid] = React.useState(0)

    const [stock, setStock] = React.useState(0)
    const [isStockInvalid, setIsStockInvalid] = React.useState(0)

    const [carID, setCarID] = React.useState(0)

    
   

    const [carList, setCarList] = React.useState([])
    const [partType, setPartType] = React.useState("")
    const [partList, setPartList] = React.useState([
        "Front Bumper",
        "Rear Bumper",
        "Windshield",
        "Side Mirror",
        "Head Light",
        "Brake Light",
        "Signal Light Front",
        "Signal Light Rear",
        "Front  Grill",
        "Front Wiper",
        "Fog Light",
        "Alloy Wheel",
        "Front Door",
        "Rear Door",
        "Bonnet",
        "Rear Bonnet",

    ])

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
                                    options={carList}
                                    getOptionLabel={(option) => `${option.car_id}: ${option.car_brand} ${option.car_model} ${option.year}`}
                                    style={{ width: "95%" , marginRight:"16px"}}
                                    renderInput={(params) => 
                                        <TextField {...params} 
                                            label="Car Name" 
                                            variant="outlined" 
                                        />}
                                    onInputChange={ (event, value ) => setCarID(value)}
                                />
                        <br />
                        <br />
                    </Grid>
                    <Grid item xs="6">
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={partList}
                                    getOptionLabel={(option) => option}
                                    style={{ width: "100%" }}
                                    onInputChange={ (event, value ) => setPartType(value)}
                                    renderInput={(params) => 
                                        <TextField {...params} 
                                            label="Part Type" 
                                            variant="outlined" 
                                            value = {partType}    
                                        />}
                                />
                        <br />
                    </Grid>
              
                    <Grid item xs="12">
                        <TextField 
                            id="InitiaStockAmount" 
                            label="Initial Stock Amount" 
                            type = "number"  
                            fullWidth  
                            onChange = {e => setStock(e.target.value) }            
                            value = {stock}
                        />
                        <br />
                    </Grid>
                    <Grid item xs="12">
                        <br />
                        <br />
                    </Grid>
                    <Grid item xs="12">
                    <TextField 
                        id="Price" 
                        label="Unit Price" 
                        type = "number" 
                        fullWidth
                        onChange = {e => setPrice(e.target.value) }            
                        value = {price}
                        />
                        <br />
                        <br />
                    </Grid>
                    <Grid item xs="12">
                        <br />
                        <Button 
                            variant="contained" 
                            color="primary" fullWidth
                            onClick = {() => {handleSubmit()}}
                            >
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
