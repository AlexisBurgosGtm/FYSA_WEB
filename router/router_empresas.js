const execute = require('./../connection');
const express = require('express');
const router = express.Router();



router.post("/listado", async(req,res)=>{

    const {token,nombre,clave} = req.body;

    let qry = `
        SELECT * FROM EMPRESAS;
        `     
  
    execute.QueryToken(res,qry,token)

});


router.post("/insert", async(req,res)=>{

    const {token,nombre,clave} = req.body;

    let qry = `
        SELECT * FROM EMPRESAS;
        `     
  
    execute.QueryToken(res,qry,token)

});




module.exports = router;