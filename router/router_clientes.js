const execute = require('../connection');
const express = require('express');
const router = express.Router();



router.post("/insert", async(req,res)=>{
   
    const { token, sucursal, nombre, contacto, creado } = req.body;   

    let qry = `
    INSERT INTO CLIENTES
        (EMPNIT,DPI,NIT,NOMBRECLIENTE,DIRCLIENTE,CODMUNICIPIO,CODDEPARTAMENTO,TELEFONOCLIENTE,EMAILCLIENTE,ESTADOCIVIL,SEXO,FECHANACIMIENTOCLIENTE,LATITUDCLIENTE,LONGITUDCLIENTE,CATEGORIA,CIUDADANIA,OCUPACION,CODRUTA,CALIFICACION,SALDO,FECHAINICIO,HABILITADO,DIAVISITA,LIMITECREDITO,DIASCREDITO,PROVINCIA,TIPONEGOCIO,NEGOCIO,CODCLIE,LASTSALE)
    SELECT '${sucursal}' AS EMPNIT,'SN' AS DPI,'CF' AS NIT, 
    '${nombre}' AS NOMBRECLIENTE,'CIUDAD' AS DIRCLIENTE, 1 AS CODMUNICIPIO,1 AS CODDEPARTAMENTO,
    '${contacto}' AS TELEFONOCLIENTE,'SN' AS EMAILCLIENTE,'SOLTERO' AS ESTADOCIVIL,
    'OTROS' AS SEXO, '${creado}' AS FECHANACIMIENTOCLIENTE, '0' AS LATITUDCLIENTE,'0' AS LONGITUDCLIENTE,
    'P' AS CATEGORIA,'OTROS' AS CIUDADANIA,'COMERCIANTE' AS OCUPACION,
    1 AS CODRUTA,'REGULAR' AS CALIFICACION,0 AS SALDO,
    '${creado}' AS FECHAINICIO,'SI' AS HABILITADO, 'OTROS' AS DIAVISITA,
    0 AS LIMITECREDITO,0 AS DIASCREDITO,'SN' AS PROVINCIA,'OTROS' AS TIPONEGOCIO,
    'OTROS' AS NEGOCIO,'0' AS CODCLIE,'${creado}' AS LASTSALE;
    `
    execute.QueryToken(res,qry,token);
     
});



router.post("/listado", async(req,res)=>{
   
    const { token, sucursal } = req.body;

    let qry = `
        SELECT CODCLIENTE, 
            NOMBRECLIENTE AS NOMCLIE, 
            TELEFONOCLIENTE AS CONTACTO 
        FROM CLIENTES
        WHERE EMPNIT='${sucursal}';
    `;
    

    execute.QueryToken(res,qry,token);
     
});


router.post("/delete", async(req,res)=>{
   
    const { token, sucursal, codcliente } = req.body;

    let qry = `DELETE FROM CLIENTES WHERE CODCLIENTE=${codcliente} AND EMPNIT='${sucursal}';`;
    
    execute.QueryToken(res,qry,token);
     
});


module.exports = router;

