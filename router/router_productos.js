const execute = require('./../connection');
const express = require('express');
const router = express.Router();


router.post("/insert_producto", async(req,res)=>{
   
    const {token,sucursal,codprod,codprod2,
        desprod,desprod2,desprod3,uxc,costo,
        codmarca,lastupdate,tipoprod,exento,nf, bono,
        tipolaboratorio,tipoimpulso,tipoprogramasalud,tipormmr,tiporelleno} = req.body;

    let qry = `
    INSERT INTO PRODUCTOS (CODPROD,CODPROD2,DESPROD,
        DESPROD2,DESPROD3,UXC,COSTO_ULTIMO,COSTO_ANTERIOR,
        CODMARCA,CLASIF_LABORATORIO,CLASIF_IMPULSO,CLASIF_PROGRAMA_SALUD,CLASIF_RM_MR,CLASIF_RELLENO,
        HABILITADO,EXENTO,
        NF,TIPOPROD,BONO,LASTUPDATE)
    SELECT '${codprod}' AS CODPROD,'${codprod2}' AS CODPROD2,
        '${desprod}' AS DESPROD,'${desprod2}' AS DESPROD2,
        '${desprod3}' AS DESPROD3,${uxc} AS UXC,    
        ${costo} AS COSTO_ULTIMO, ${costo} AS COSTO_ANTERIOR,
        ${codmarca} AS CODMARCA,
        ${tipolaboratorio} AS CLASIF_LABORATORIO,
        ${tipoimpulso} AS CLASIF_IMPULSO,
        ${tipoprogramasalud} AS CLASIF_PROGRAMA_SALUD,
        ${tipormmr} AS CLASIF_RM_MR,
        ${tiporelleno} AS CLASIF_RELLENO,
        'SI' AS HABILITADO, ${exento} AS EXENTO,
        ${nf} AS NF,'${tipoprod}' AS TIPOPROD,
        ${bono} AS BONO,'${lastupdate}' AS LASTUPDATE;
    INSERT INTO PRECIOS 
        (CODPROD,CODMEDIDA,EQUIVALE,COSTO,PRECIO, PRECIO_A, PRECIO_B, PRECIO_C, 
        PRECIO_D, PRECIO_E, PRECIO_F, PESO, LASTUPDATE)
    SELECT '${codprod}' AS CODPROD, CODMEDIDA, 
        EQUIVALE, COSTO, 
        PRECIO, PRECIO_A, PRECIO_B, PRECIO_C, 
        PRECIO_D, PRECIO_E, PRECIO_F,
        PESO, '${lastupdate}' AS LASTUPDATE
    FROM TEMP_PRECIOS;
    INSERT INTO INVSALDO (EMPNIT, CODPROD,
        ENTRADAS, SALIDAS,
        EXISTENCIA, FISICO,
        CODBODEGA, NOLOTE,
        MINIMO, MAXIMO) SELECT EMPNIT, '${codprod}' AS CODPROD,
	    0 AS ENTRADAS, 0 AS SALIDAS,
	    0 AS EXISTENCIA, 0 AS FISICO,
	    1 AS CODBODEGA, '' AS NOLOTE,
	    0 AS MINIMO, 0 AS MAXIMO
    FROM EMPRESAS; 
    `


    execute.QueryToken(res,qry,token);
     
});



router.post("/delete_lista_temp_precio", async(req,res)=>{
   
    const {token,sucursal,usuario} = req.body;

   
    let qry = `
    DELETE FROM TEMP_PRECIOS WHERE USUARIO='${usuario}';
    `

    execute.QueryToken(res,qry,token);
     
});

router.post("/delete_temp_precio", async(req,res)=>{
   
    const {token,sucursal,id} = req.body;

   
    let qry = `
    DELETE FROM TEMP_PRECIOS WHERE ID=${id};
    `

    execute.QueryToken(res,qry,token);
     
});

router.post("/lista_precios_temp", async(req,res)=>{
   
    const {token,sucursal,usuario} = req.body;
   
    let qry = `
    SELECT ID,
    CODMEDIDA, EQUIVALE, COSTO,
    PRECIO, PRECIO_A, PRECIO_B, 
    PRECIO_C, PRECIO_D, PRECIO_E, PRECIO_F, PESO
        FROM 
    TEMP_PRECIOS 
    ;
    `

    //WHERE USUARIO='${usuario}'

    execute.QueryToken(res,qry,token);
     
});

router.post("/insert_temp_precio", async(req,res)=>{
   
    const {token,sucursal,codprod,usuario,codmedida,equivale,peso,costo,preciop,precioa,preciob,precioc,preciod,precioe,preciof} = req.body;

 

    let qry = `
    INSERT INTO TEMP_PRECIOS 
    (CODPROD,CODMEDIDA,EQUIVALE,COSTO,
    PRECIO,PRECIO_A,PRECIO_B,PRECIO_C,PRECIO_D,PRECIO_E,PRECIO_F,PESO,USUARIO) 
    VALUES 
    ('${codprod}','${codmedida}',${equivale},${costo},
    ${preciop},${precioa},${preciob},${precioc},${preciod},${precioe},${preciof},${peso},'${usuario}');
    `
    
    execute.QueryToken(res,qry,token);
     
});




router.post("/verify_codprod", async(req,res)=>{
   
    const { token, sucursal, codprod } = req.body;

    let qry = `
        SELECT CODPROD, DESPROD 
            FROM PRODUCTOS 
            WHERE CODPROD='${codprod}';
    `
    
  
    execute.QueryToken(res,qry,token);
     
});


router.post("/edit_producto", async(req,res)=>{

    const {token,sucursal,codprod,codprod2,
        desprod,desprod2,desprod3,uxc,costo,
        codmarca,lastupdate,tipoprod,exento,nf, bono,
        tipolaboratorio,tipoimpulso,tipoprogramasalud,tipormmr,tiporelleno} = req.body;

    let qry = `
    UPDATE PRODUCTOS SET 
        CODPROD2='${codprod2}',
        DESPROD='${desprod}',
        DESPROD2='${desprod2}',
        DESPROD3='${desprod3}',
        UXC=${uxc},
        COSTO_ULTIMO=${costo},
        CODMARCA=${codmarca},
        CLASIF_LABORATORIO=${tipolaboratorio},
        CLASIF_IMPULSO=${tipoimpulso},
        CLASIF_PROGRAMA_SALUD=${tipoprogramasalud},
        CLASIF_RM_MR=${tipormmr},
        CLASIF_RELLENO=${tiporelleno},
        EXENTO=${exento},
        NF=${nf},
        BONO=${bono},
        TIPOPROD='${tipoprod}',
        LASTUPDATE='${lastupdate}'
    WHERE CODPROD='${codprod}';
    `
    
    console.log(qry)
  

    execute.QueryToken(res,qry,token);
     
});

router.post("/datos_producto", async(req,res)=>{
   
    const { token, sucursal, codprod } = req.body;

    let qry = `
        SELECT * FROM PRODUCTOS
        WHERE (CODPROD='${codprod}')
        `
  
    execute.QueryToken(res,qry,token);
     
});

router.post("/verify_codprod_movimientos", async(req,res)=>{
   
    const { token, sucursal, codprod } = req.body;

    let qry = `
        SELECT TOP 1 CODPROD 
            FROM DOCPRODUCTOS 
            WHERE EMPNIT='${sucursal}' AND CODPROD='${codprod}';
            `
    
  
    execute.QueryToken(res,qry,token);
     
});

router.post("/desactivar_producto", async(req,res)=>{
   
    const { token, sucursal, codprod, status } = req.body;

    let st = status=='SI' ? 'NO' : 'SI';

    //if(status=='SI'){st='NO'}else{st='SI'};



    let qry = `
        UPDATE PRODUCTOS
            SET HABILITADO='${st}' 
            WHERE CODPROD='${codprod}';
            `
    
  
    execute.QueryToken(res,qry,token);
     
});


router.post("/delete_producto", async(req,res)=>{
   
    const {token,sucursal,codprod} = req.body;

    let qry = `
    DELETE FROM PRODUCTOS WHERE CODPROD='${codprod}';
    DELETE FROM PRECIOS WHERE CODPROD='${codprod}';
     DELETE FROM INVSALDO WHERE CODPROD='${codprod}';
    `

    execute.QueryToken(res,qry,token);
     
});

router.post("/insert_precio", async(req,res)=>{
   
    const {token,sucursal,codprod,codmedida,equivale,peso,costo,preciop,precioa,preciob,precioc,preciod,precioe,preciof,lastupdate} = req.body;

    let qry = `
    INSERT INTO PRECIOS 
    (CODPROD,CODMEDIDA,EQUIVALE,COSTO,PRECIO,PRECIO_A,PRECIO_B,PRECIO_C,PRECIO_D,PRECIO_E,PRECIO_F,HABILITADO,PESO,LASTUPDATE) 
    VALUES 
    ('${codprod}','${codmedida}',${equivale},${costo},${preciop},${precioa},${preciob},
    ${precioc},${preciod},${precioe},${preciof},'SI',${peso},'${lastupdate}');
    `
   
    execute.QueryToken(res,qry,token);
     
});



router.post("/listado", async(req,res)=>{
   
    const { token, sucursal, filtro, habilitado } = req.body;

    let qry = `
        SELECT TOP 50 PRODUCTOS.CODPROD, 
            PRODUCTOS.DESPROD, PRODUCTOS.DESPROD2, PRODUCTOS.DESPROD3, 
            PRODUCTOS.UXC, 
            PRODUCTOS.COSTO_ULTIMO AS COSTO,
            PRODUCTOS.COSTO_ANTERIOR, 
            PRODUCTOS.CODMARCA, MARCAS.DESMARCA, 
            PRODUCTOS.TIPOPROD, 
            ISNULL(PRODUCTOS.LASTUPDATE,'2020-01-01') AS LASTUPDATE, 
            PRODUCTOS.HABILITADO,
            PRODUCTOS.BONO
        FROM PRODUCTOS LEFT OUTER JOIN
        MARCAS ON PRODUCTOS.CODMARCA = MARCAS.CODMARCA
        WHERE (PRODUCTOS.CODPROD='${filtro}') 
            AND (PRODUCTOS.HABILITADO='${habilitado}')
            OR
            (PRODUCTOS.DESPROD LIKE '%${filtro}%') 
            AND (PRODUCTOS.HABILITADO='${habilitado}')
        ORDER BY PRODUCTOS.DESPROD
    `
  
    execute.QueryToken(res,qry,token);
     
});


router.post("/get_cantidad_productos", async(req,res)=>{
   
    const { token, sucursal,  habilitado } = req.body;

    let qry = `
        SELECT  COUNT(CODPROD) AS CONTEO
            FROM PRODUCTOS
        WHERE (HABILITADO = '${habilitado}')
    `
  
    execute.QueryToken(res,qry,token);
     
});


router.post("/lista_precios", async(req,res)=>{
   
    const {token,sucursal,codprod} = req.body;

   
    let qry = `
    SELECT ID,  
    CODPROD,CODMEDIDA,EQUIVALE,COSTO,
    PRECIO, PRECIO_A,PRECIO_B, PRECIO_C, PRECIO_D, PRECIO_E, PRECIO_F,
	PESO,LASTUPDATE
    FROM
    PRECIOS WHERE CODPROD='${codprod}';
    `

    execute.QueryToken(res,qry,token);
     
});

router.post("/delete_precio", async(req,res)=>{
   
    const {token,sucursal,id} = req.body;

   
    let qry = `
    DELETE FROM PRECIOS WHERE ID=${id};
    `

    execute.QueryToken(res,qry,token);
     
});






router.post("/listado_medidas", async(req,res)=>{
   
    const { token, sucursal } = req.body;

    let qry = `
        SELECT CODMEDIDA, DESMEDIDA FROM MEDIDAS  
    `
    
  
    execute.QueryToken(res,qry,token);
     
});
router.post("/insert_medida", async(req,res)=>{
   
    const {token,sucursal,codigo,descripcion} = req.body;

   
    let qry = `
    INSERT INTO MEDIDAS (CODMEDIDA,DESMEDIDA) 
    VALUES ('${codigo}','${descripcion}');
    `

    execute.QueryToken(res,qry,token);
     
});



router.post("/listado_marcas", async(req,res)=>{
   
    const { token, sucursal } = req.body;

    let qry = `
        SELECT CODMARCA, DESMARCA 
        FROM MARCAS 
        ORDER BY DESMARCA;
    `
    
  
    execute.QueryToken(res,qry,token);
     
});

router.post("/insert_marca", async(req,res)=>{
   
    const {token,sucursal,codmarca,desmarca} = req.body;

   
    let qry = `
    INSERT INTO MARCAS (CODMARCA,DESMARCA,PORCENTAJE) VALUES (${codmarca},'${desmarca}',0);
    `

    execute.QueryToken(res,qry,token);
     
});

router.post("/listado_claseuno", async(req,res)=>{
   
    const { token, sucursal } = req.body;

    let qry = `
        SELECT CODCLAUNO, DESCLAUNO FROM CLASIFICACIONUNO  
        ORDER BY DESCLAUNO;
    `
    
  
    execute.QueryToken(res,qry,token);
     
});

router.post("/insert_claseuno", async(req,res)=>{
   
    const {token,sucursal,codigo,descripcion} = req.body;

   
    let qry = `
    INSERT INTO CLASIFICACIONUNO (CODCLAUNO,DESCLAUNO) 
    VALUES (${codigo},'${descripcion}');
    `

    execute.QueryToken(res,qry,token);
     
});




router.post("/listado_proveedores", async(req,res)=>{
   
    const { token, sucursal } = req.body;

    let qry = `
        SELECT CODPROV, EMPRESA FROM PROVEEDORES  
        ORDER BY EMPRESA;
    `
    
  
    execute.QueryToken(res,qry,token);
     
});

router.post("/insert_proveedor", async(req,res)=>{
   
    const {token,sucursal,codigo,descripcion} = req.body;

   
    let qry = `
    INSERT INTO PROVEEDORES (EMPRESA,RAZONSOCIAL,DIRECCION,TELEMPRESA,CONTACTO,TELCONTACTO,NIT,SALDO) 
    VALUES ('${descripcion}','${descripcion}','CIUDAD','000','SN','SN','CF',0);
    `

    execute.QueryToken(res,qry,token);
     
});




router.post("/listado_clasedos", async(req,res)=>{
   
    const { token, sucursal } = req.body;

    let qry = `
        SELECT CODCLADOS, DESCLADOS FROM CLASIFICACIONDOS  
        ORDER BY DESCLADOS;
    `
    
  
    execute.QueryToken(res,qry,token);
     
});





module.exports = router;