
const sql = require('msnodesqlv8');

const connection = "server=.;Database=db_project1;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
module.exports = connection;



function execQuery(query){
    return new Promise((resolve,reject)=>{
        sql.query(connection, query, (err, rows)=>{
            if(err)reject(err);
            resolve(rows)
           })
    })
}


module.exports = {
    execQuery
}

