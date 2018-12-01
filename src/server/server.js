const pg = require('pg');
var db = 'postgres://postgres:modniPG@localhost/adeel_test'


const client = new pg.Client(db);

let   data = [] ;  
client.connect((err)=>{ 
    if (err) {
        console.error('connection error', err.stack)
      } else {
        console.log('connected')
        console.log(db);
        client.query('SELECT *  FROM offers' ,   (err , result) => {
            if(!err){
                console.log('Query OK !');   
               // console.log(result.rows);
                data =  (result.rows.map(x => x)) ; 
                console.log(data);
                module.exports =  data  ; 
                
                
                      
            }
        }) ;
      }

});





