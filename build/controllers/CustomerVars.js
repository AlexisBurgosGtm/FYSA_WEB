let empresas = [{empnit:"FSYA000",nombre:"BODEGA FARMACIA SALUD Y AHORRO"}];
// {empnit:"FSYA000",nombre:"BODEGA FARMACIA SALUD Y AHORRO"}

function get_empresas(){
    let str = "<option value=''>Seleccione una sucursal</option>";
    empresas.map((r)=>{
        str += `<option value='${r.empnit}'>${r.nombre}</option>`
    });
    return str;
}