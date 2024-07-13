const execute = require('./../connection');
const express = require('express');
const router = express.Router();



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
    WHERE USUARIO='${usuario}';
    `

    execute.QueryToken(res,qry,token);
     
});

router.post("/insert_temp_precio", async(req,res)=>{
   
    const {token,sucursal,codprod,usuario,codmedida,equivale,peso,costo,preciop,precioa,preciob,precioc,preciod,precioe,preciof} = req.body;


    let qry = `
    INSERT INTO TEMP_PRECIOS 
    (CODMEDIDA,EQUIVALE,COSTO,
    PRECIO,PRECIO_A,PRECIO_B,PRECIO_C,PRECIO_D,PRECIO_E,PRECIO_F,PESO,USUARIO) 
    VALUES 
    ('${codmedida}',${equivale},${costo},
    ${preciop},${precioa},${preciob},${precioc},${preciod},${precioe},${preciof},${peso},'${usuario}');
    `
    
    execute.QueryToken(res,qry,token);
     
});




router.post("/verify_codprod", async(req,res)=>{
   
    const { token, sucursal, codprod } = req.body;

    let qry = `
        SELECT CODPROD, DESPROD 
            FROM PRODUCTOS 
            WHERE EMPNIT='${sucursal}' AND CODPROD='${codprod}';
    `
    
  
    execute.QueryToken(res,qry,token);
     
});

router.post("/insert_producto", async(req,res)=>{
   
    const {token,sucursal,codprod,codprod2,
        desprod,desprod2,desprod3,uxc,costo,
        codmarca,codclaseuno,codclasedos,codclasetres,
        lastupdate,tipoprod,exento,nf,invminimo} = req.body;

    let qry = `
    INSERT INTO PRODUCTOS (EMPNIT,CODPROD,CODPROD2,DESPROD,
        DESPROD2,DESPROD3,UXC,CODMEDIDACOMPRA,COSTO,
        CODMARCA,CODCLAUNO,CODCLADOS,CODCLATRES,
        HABILITADO,VENCIMIENTO,INVMINIMO,EXENTO,
        NF,TIPOPROD,EXISTENCIA,LASTUPDATE)
    VALUES ('${sucursal}','${codprod}','${codprod2}',
    '${desprod}','${desprod2}','${desprod3}',${uxc},
    'UNIDAD',${costo},${codmarca},${codclaseuno},${codclasedos},
    ${codclasetres},'SI','2000-01-01',${invminimo},${exento},
    ${nf},'${tipoprod}',0,'${lastupdate}');
    INSERT INTO INVSALDO 
        (EMPNIT,CODPROD,ANIO,MES,SALDOINICIAL,ENTRADAS,SALIDAS,SALDO)
        VALUES
        ('${sucursal}','${codprod}',0,0,0,0,0,0);
    INSERT INTO PRECIOS 
        (EMPNIT,CODPROD,CODMEDIDA,EQUIVALE,COSTO,PRECIO,UTILIDAD,
        PORCUTILIDAD,HABILITADO,MAYOREOA,MAYOREOB,MAYOREOC,PESO,LASTUPDATE)
    SELECT '${sucursal}' AS EMPNIT,'${codprod}' AS CODPROD, CODMEDIDA,
        EQUIVALE,COSTO,PRECIO,UTILIDAD,
        MARGEN AS PORCUTILIDAD,'SI' AS HABILITADO,MAYOREOA,MAYOREOB,MAYOREOC,
        PESO,'${lastupdate}' AS LASTUPDATE 
    FROM TEMP_PRECIOS WHERE EMPNIT='${sucursal}';
    `
    
    execute.QueryToken(res,qry,token);
     
});

router.post("/edit_producto", async(req,res)=>{
   
    const {token,sucursal,codprod,codprod2,
        desprod,desprod2,desprod3,uxc,costo,
        codmarca,codclaseuno,codclasedos,codclasetres,
        lastupdate,tipoprod,exento,nf,invminimo} = req.body;

    let qry = `
    UPDATE PRODUCTOS SET 
        CODPROD2='${codprod2}',
        DESPROD='${desprod}',
        DESPROD2='${desprod2}',
        DESPROD3='${desprod3}',
        UXC=${uxc},
        COSTO=${costo},
        CODMARCA=${codmarca},
        CODCLAUNO=${codclaseuno},
        CODCLADOS=${codclasedos},
        CODCLATRES=${codclasetres},
        INVMINIMO=${invminimo},
        EXENTO=${exento},
        NF=${nf},
        TIPOPROD='${tipoprod}',
        LASTUPDATE='${lastupdate}'
    WHERE EMPNIT='${sucursal}' AND CODPROD='${codprod}';
    `
    
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
    `

    execute.QueryToken(res,qry,token);
     
});

router.post("/insert_precio", async(req,res)=>{
   
    const {token,sucursal,codprod,codmedida,equivale,peso,costo,preciop,precioa,preciob,precioc,preciod,precioe,preciof,lastupdate} = req.body;

    let qry = `
    INSERT INTO PRECIOS 
    (CODPROD,CODMEDIDA,EQUIVALE,COSTO,PRECIO,PRECIO_A,PRECIO_B,PRECIO_C,PRECIO_D,PRECIO_E,PRECIO_F,PESO,HABILITADO,LASTUPDATE) 
    VALUES 
    ('${codprod}','${codmedida}',${equivale},${costo},${preciop},${precioa},${preciob},
    ${precioc},${preciod},${precioe},${preciof},${peso},'SI','${lastupdate}');
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
            PRODUCTOS.EXISTENCIA,
            PRODUCTOS.HABILITADO
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


router.post("/lista_precios", async(req,res)=>{
   
    const {token,sucursal,codprod} = req.body;

   
    let qry = `
    SELECT ID,  
    CODPROD,CODMEDIDA,EQUIVALE,COSTO,
    PRECIO, PRECIO_A,PRECIO_B, PRECIO_C, PRECIO_D, PRECIO_E, PRECIO_F,
	HABILITADO,PESO,LASTUPDATE
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