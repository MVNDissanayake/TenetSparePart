import React from 'react'
import { Grid, Container, Typography, Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
    table: {
        minWidth: 650,
    },
}));


function createData(carName, sparePartName, unitPrice, stock, id) {
    return { carName, sparePartName, unitPrice, stock, id };
}

const rows = [
    createData('Mazda RX7 2018', "Front Bumper", "18000", 24, 1),
    createData('Mazda RX7 2018', "Rear Bumper", "19000", 24, 2),
    createData('Nissan RX7 2018', "Rear Bumper", "29000", 24, 3),

];



export default function SparePartViewerPage() {

    const classes = useStyles();

    //const [state, setstate] = useState(initialState)

    React.useEffect(() => {
        fetch('http://localhost:4000/getAllCars', { // fake API endpoint
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setCarList(data)
            })
            .catch(err => {
                console.error(err);
            });
    }, [])

    const [carList, setCarList] = React.useState([])
    const [carID, setCarID] = React.useState("1:")


    const [sparePartList, setSparePartList] = React.useState([])

    React.useEffect(() => {
        let car = carID.substr(0, carID.indexOf(':'));
        //console.log();
        fetch(`http://localhost:4000/getSparePartByCar/${car}`, { // fake API endpoint
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSparePartList(data)
            })
            .catch(err => {
                console.error(err);
            });
    }, [carID])
    
    const handleDelete = async (id) => {
        console.log(id)
        const rawResponse = await fetch(`http://localhost:4000/deleteSparePart/${id}`, {
            method: 'DELETE',
        });

        console.log(rawResponse);

        if(rawResponse.status === 200)
        {
            alert("Delete Successfull ");
        }
        else
        {
            alert("Could Not Delete from  Database ");
        }
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={12} >
                    <Typography variant="h2"> Spare Part Viewer</Typography>
                </Grid>
                <Grid item xs={12} >
                    <br />
                    <br />
                </Grid>
                <Grid item xs={12} >
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
                </Grid>
                <Grid item xs={12} >
                    <br />
                    <br />
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Car Name</TableCell>
                                    <TableCell >Spare Part Name</TableCell>
                                    <TableCell >Unit Price(LKR)</TableCell>
                                    <TableCell >Current Stock</TableCell>
                                    <TableCell >New Stock</TableCell>
                                    <TableCell >Delete Item</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    // car: 3
                                    // ​​
                                    // price: 25000
                                    // ​​
                                    // spare_part_id: 3
                                    // ​​
                                    // spare_part_type: "Windshield"
                                    // ​​
                                    // stock: 100
                                sparePartList.map((row) => (
                                    
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.car}
                                        </TableCell>
                                        <TableCell >{row.spare_part_type}</TableCell>
                                        <TableCell >{row.price}</TableCell>
                                        <TableCell >{row.stock}</TableCell>
                                        <TableCell>
                                            <TextField id="NewStock" label="New Stock Amount" type="number" fullWidth />
                                            <br />
                                            <br />
                                            <Button color="primary" variant="contained" fullWidth>Update</Button>
                                        </TableCell>
                                        <TableCell>
                                            <IconButton aria-label="delete" className={classes.margin}>
                                                <DeleteIcon 
                                                    fontSize="large"
                                                    id = {row.spare_part_id} 
                                                    onClick = { (e) => handleDelete(e.target.id) }
                                                />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>

        </div>
    )
}
