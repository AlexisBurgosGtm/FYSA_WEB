let empresas = [{empnit:"FSYA000",nombre:"BODEGA FARMACIA SALUD Y AHORRO"}];
// 

function get_empresas(){
    let str = '' //"<option value=''>Seleccione una sucursal</option>";
    empresas.map((r)=>{
        str += `<option value='${r.empnit}'>${r.nombre}</option>`
    });
    return str;
}

let GlobalTipoPrecio = 'PRECIO';


let tipo_precios =[
                {tipo:"PRECIO",nombre:"PUBLICO"},
                {tipo:"PRECIO_A",nombre:"PRECIO A"},
                {tipo:"PRECIO_B",nombre:"PRECIO B"},
                {tipo:"PRECIO_C",nombre:"PRECIO C"},
                {tipo:"PRECIO_D",nombre:"PRECIO D"},
                {tipo:"PRECIO_E",nombre:"PRECIO E"},
                {tipo:"PRECIO_F",nombre:"PRECIO F"}
            ];


            let tbl_colores =[
                {NF:0,NOMBRE:"SIN COLOR",COLOR:"#FFFFFF"},
                {NF:1,NOMBRE:"AMARILLO",COLOR:"#FFFF00"},
                {NF:2,NOMBRE:"VERDE",COLOR:"#008000"},
                {NF:3,NOMBRE:"AZUL",COLOR:"#0000FF"},
                {NF:4,NOMBRE:"CAFES",COLOR:"#800000"},
                {NF:5,NOMBRE:"MORADO",COLOR:"#800080"},
                {NF:6,NOMBRE:"ROSADO",COLOR:"#FF00FF"},
                {NF:7,NOMBRE:"NARANJA",COLOR:"#FF4500"}
            ];



function get_tipo_precios(){

    let str = '' //"<option value=''>Seleccione una sucursal</option>";
    tipo_precios.map((r)=>{
        str += `<option value='${r.tipo}'>${r.nombre}</option>`
    });
    return str;
}