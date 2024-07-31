let empresas = [{empnit:"FSYA000",nombre:"BODEGA FARMACIA SALUD Y AHORRO"}];
// 

function get_empresas(){
    let str = '' //"<option value=''>Seleccione una sucursal</option>";
    empresas.map((r)=>{
        str += `<option value='${r.empnit}'>${r.nombre}</option>`
    });
    return str;
}


let tipo_precios =[
                {tipo:"P",nombre:"PUBLICO"},
                {tipo:"A",nombre:"PRECIO A"},
                {tipo:"B",nombre:"PRECIO B"},
                {tipo:"C",nombre:"PRECIO C"},
                {tipo:"D",nombre:"PRECIO D"},
                {tipo:"E",nombre:"PRECIO E"},
                {tipo:"F",nombre:"PRECIO F"}
            ];

function get_tipo_precios(){

    let str = '' //"<option value=''>Seleccione una sucursal</option>";
    tipo_precios.map((r)=>{
        str += `<option value='${r.tipo}'>${r.nombre}</option>`
    });
    return str;
}