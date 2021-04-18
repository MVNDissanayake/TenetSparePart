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
                        options={[{ carName: 'Toyota RX7 2018', carID: "123" }, { carName: 'Mazda RX7 2018', carID: "321" }]}
                        getOptionLabel={(option) => option.carName}
                        style={{ width: "95%", marginRight: "16px" }}
                        renderInput={(params) => <TextField {...params} label="Filter By Car Name" variant="outlined" />}
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
                                {rows.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.carName}
                                        </TableCell>
                                        <TableCell >{row.sparePartName}</TableCell>
                                        <TableCell >{row.unitPrice}</TableCell>
                                        <TableCell >{row.stock}</TableCell>
                                        <TableCell>
                                            <TextField id="NewStock" label="New Stock Amount" type="number" fullWidth />
                                            <br />
                                            <br />
                                            <Button color="primary" variant="contained" fullWidth>Update</Button>
                                        </TableCell>
                                        <TableCell>
                                            <IconButton aria-label="delete" className={classes.margin}>
                                                <DeleteIcon fontSize="large" />
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
