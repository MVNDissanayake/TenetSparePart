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
                                    <TableCell align="right">Spare Part Name</TableCell>
                                    <TableCell align="right">Unit Price(LKR)</TableCell>
                                    <TableCell align="right">Current Stock</TableCell>
                                    <TableCell align="right">New Stock</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.carName}
                                        </TableCell>
                                        <TableCell align="right">{row.sparePartName}</TableCell>
                                        <TableCell align="right">{row.unitPrice}</TableCell>
                                        <TableCell align="right">{row.stock}</TableCell>
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
