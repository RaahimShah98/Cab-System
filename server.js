const express = require('express');
const sql = require('msnodesqlv8')
const fs = require('fs/promises');
// const sql = require('mssql');
const cors = require('cors');
const morgan = require("morgan");
const path = require(
    'path'
)



const bodyParser = require('body-parser');




// routes
const userRouter = require('./routes/user');
const cabRouter = require("./routes/cars")

// const config = {
//     driver: 'msnodesqlv8',
//     connectionString: 'Driver={SQL Server Native Client 11.0};Server=DESKTOP-9I8OU3J;Database=open-ended;Trusted_Connection=yes;'
//   };


const app = express();
const PORT = 3000;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(morgan("tiny"))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRouter);
app.use('/cars',cabRouter );


// const connection = "server=.;Database=db_project;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}"



// app.get('/data',async (req,res)=>{
//    sql.query(connection, `SELECT * from Users`, (err, rows)=>{
//     console.log(err,rows);
//     res.json(rows)
//    })
// })

app.listen(PORT, ()=>{
    console.log('RUNNING SERVER ON PORT ' + PORT);
})

