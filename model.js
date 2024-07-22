
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: '57hazi'
});
exports.init = function(onReady)
{
    db.connect(error=>
    {
        if(error)
        {
            console.error('Hiba', error.sqlMessage);

        }
        else
        {
            onReady();
        }
    });
};
exports.close = function()
{
    db.end();
}
exports.getKategoria = function(onReady)
{
    var sql= "SELECT id,name FROM kategória WHERE status !=0 ORDER BY name;";
    db.query(sql,(e, result)=>
    {
        onReady(result);
    });
};
exports.getKategoriakById= function(id, onReady)
{
    var sql=  "SELCET id,name FROM kategória WHERE id = ? AND status != 0;";
    var values =[id];

    db.query(sql, values, (e, result) =>
    {  
         result= result[0];
        onReady(result);
    })
};