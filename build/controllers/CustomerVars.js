


//data_empresa_config.TIPO_PRECIO


let tipo_precios =[
                {tipo:"PRECIO",nombre:"PUBLICO"},
                {tipo:"PRECIO_A",nombre:"PRECIO A"},
                {tipo:"PRECIO_B",nombre:"PRECIO B"},
                {tipo:"PRECIO_C",nombre:"PRECIO C"},
                {tipo:"PRECIO_D",nombre:"PRECIO D"},
                {tipo:"PRECIO_E",nombre:"PRECIO E"},
                {tipo:"PRECIO_F",nombre:"PRECIO F"}
            ];


let tipo_clasificacion =[
                {tipo:"LABORATORIO",nombre:"LABORATORIO"},
                {tipo:"IMPULSO",nombre:"IMPULSO"},
                {tipo:"PROGRAMA_SALUD",nombre:"PROGRAMA_SALUD"},
                {tipo:"RM_MR",nombre:"RM_MR"},
                {tipo:"RELLENO",nombre:"RELLENO"}
            ];



function get_tipo_precios(){

    let str = '' //"<option value=''>Seleccione una sucursal</option>";
    tipo_precios.map((r)=>{
        str += `<option value='${r.tipo}'>${r.nombre}</option>`
    });
    return str;
}




let tipo_documentos =[
    {tipo:"FAC",nombre:"FACTURA ENVIO NORMAL"},
    {tipo:"FEF",nombre:"FACTURA ELECTRONICA FEL (CONTADO SAT)"},
    {tipo:"REQ",nombre:"REQUISICIONES A PROVEEDORES"},
    {tipo:"ORC",nombre:"ORDEN DE COMPRA"},  
    {tipo:"COM",nombre:"COMPRAS (IVA)"},
    {tipo:"COP",nombre:"COMPRAS (PEQUEÑO CONTRIBUYENTE)"},
    {tipo:"COR",nombre:"CORTE DE CAJA"},
];

function get_tipo_documentos(){

    let str = '';
    tipo_documentos.map((r)=>{
        str += `<option value='${r.tipo}'>${r.nombre}</option>`
    });
    return str;
}