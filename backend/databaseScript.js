
var createCarTable = `
    CREATE TABLE IF NOT EXISTS cars(
        car_id INTEGER PRIMARY KEY AUTOINCREMENT,
        car_brand TEXT,
        car_model TEXT,
        year INTEGER
    );
`

var createSparePartTable = `
    CREATE TABLE IF NOT EXISTS spare_part(
        spare_part_id INTEGER PRIMARY KEY AUTOINCREMENT,
        spare_part_type TEXT,
        car INTEGER,
        stock INTEGER,
        price INTEGER,
        FOREIGN KEY (car) 
            REFERENCES cars(car_id)
                ON DELETE CASCADE
                ON UPDATE CASCADE
    );
`

module.exports = {
    createCarTable,
    createSparePartTable
}
