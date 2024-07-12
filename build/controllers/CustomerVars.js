let empresas = [{empnit:"PROXY_MULUA",nombre:"PROXY MULUA"},
                {empnit:"PROXY_SANMARTIN",nombre:"PROXY SAN MARTIN"},
                {empnit:"PROXY_SOPORTE_MULUA",nombre:"PROXY SOPORTE MULUA"}
];

function get_empresas(){
    let str = "";
    empresas.map((r)=>{
        str += `<option value='${r.empnit}'>${r.nombre}</option>`
    });
    return str;
}