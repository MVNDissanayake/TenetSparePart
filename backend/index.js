
const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

var cors = require('cors');
app.use(cors());

const port = 4000

const sqlite3 = require('sqlite3').verbose();
var databaseScript = require('./databaseScript.js');

//console.log(databaseScript)

// open the database
let db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');

  });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Create Car
app.post('/createCar', (req, res) => {

    let carBrand = req.body.carBrand;
    let carModel = req.body.carModel;
    let year = req.body.year;


    db.run(`INSERT INTO cars(car_brand, car_model,year) VALUES(?,?,?)`, [carBrand, carModel, year], function(err) {
        if (err) {
            res.status(404).send('Could not Add Car')
            return console.log(err.message);

        }
        else
        {   
             // get the last insert id
            console.log(`A row has been inserted with rowid ${this.lastID}`);
            res.status(200).send(`A row has been inserted with rowid ${this.lastID}`)
        }
       
      });

   
  })

  //Get All Cars
app.get('/getAllCars', (req, res) => {
    let sql = `SELECT car_id, car_brand, car_model, year  FROM cars `;
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(404).send('Could not fetch Cars')
            throw err;
          
        }else
        {
            res.json(rows)
        }
     
      });

  })

  //Create New Spare Part 
app.post('/createSparePart', (req, res) => {

    let sparePartType = req.body.sparePartType;
    let car_id = req.body.car_id;
    let stock = req.body.stock;
    let price = req.body.price


    db.run(`INSERT INTO  spare_part ( spare_part_type,  car, stock, price) VALUES(?,?,?,?)`, [sparePartType, car_id, stock, price], function(err) {
        if (err) {
            res.status(404).send('Could not Add Spare Part')
            return console.log(err.message);

        }
        else
        {   
             // get the last insert id
            console.log(`A row has been inserted with rowid ${this.lastID}`);
            res.status(200).send(`A row has been inserted with rowid ${this.lastID}`)
        }
       
      });
    
  })
  
//Get Typs of Spare Parts By Car 
app.get('/getSparePartByCar/:carID', (req, res) => {
    let sql = `SELECT *  FROM spare_part WHERE car = '${req.params.carID}' `;
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(404).send('Could not fetch Spare Parts')
            throw err;
          
        }else
        {
            res.json(rows)
        }
     
      });
  })

//Update Spare Parts Inventory
app.patch('/updateSparePartInventory/:sparePartID/:newStock', (req, res) => {
    let sql = `UPDATE spare_part SET stock = '${req.params.newStock}' WHERE spare_part_id = '${req.params.sparePartID}' `;
    //console.log(sql)
    db.run(sql, [], (err, rows) => {
        if (err) {
            res.status(404).send('Could notUpdate Spare Parts')
            throw err;
          
        }else
        {
            res.status(200).send("Successfully Updated")
        }
     
      });
  })

//Delete Spare Part 
app.delete('/deleteSparePart/:sparePartID', (req, res) => {
  let sql = `DELETE from spare_part WHERE spare_part_id = '${req.params.sparePartID}' `;
  //console.log(sql)
  db.run(sql, [], (err, rows) => {
      if (err) {
          res.status(404).send('Could notUpdate Spare Parts')
          throw err;
        
      }else
      {
          res.status(200).send("Successfully Updated")
      }
   
    });
})




///Running Database Script
db.run(databaseScript.createCarTable)
db.run(databaseScript.createSparePartTable)


app.listen(port, () => {

  console.log(`Server listening at http://localhost:${port}`)

})
