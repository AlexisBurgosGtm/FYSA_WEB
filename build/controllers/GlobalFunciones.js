let GF = {
    modo_sat:()=>{
        socket.emit('MODO_SAT')
    },
    print_orden_soporte:(noorden)=>{
        return new Promise((resolve,reject)=>{

            axios.get(`http://192.168.0.250:9000/ticket_soporte?sucursal=${GlobalEmpnit}&correlativo=${noorden}`)
            .then((response) => {
                if(response.status.toString()=='200'){
                    if(response.status.toString()=='200'){
                        let data = response.data;
                        if(data.toString()=="error"){
                            reject();
                        }else{
                            if(Number(data.rowsAffected[0])>0){
                                resolve(data);             
                            }else{
                                reject();
                            } 
                        }       
                    }else{
                        reject();
                    }                  
                }else{
                    reject();
                }             
            }, (error) => {
                reject();
            });
        }) 
    
    },
    get_data_qry:(url,data)=>{
        return new Promise((resolve,reject)=>{

            axios.post(GlobalUrlCalls + url, data)
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }                   
            }, (error) => {
                reject();
            });
        }) 
    
    },
    verify_codprod:(codprod)=>{
    
        return new Promise((resolve,reject)=>{
    
            axios.post(GlobalUrlCalls + '/productos/verify_codprod',
                {
                    sucursal:GlobalEmpnit,
                    token:TOKEN,
                    codprod:codprod
                })
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }                   
            }, (error) => {
                reject();
            });
        })   
    
    },
    verify_serie_compra_fel:(serie,numero)=>{
    
        return new Promise((resolve,reject)=>{
    
            if(serie==''){reject();return};
            
            axios.post(GlobalUrlCalls + '/compras/verify_factura_compra_fel',
                {
                    sucursal:GlobalEmpnit,
                    token:TOKEN,
                    seriefac:serie,
                    numerofac:numero
                })
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }                   
            }, (error) => {
                reject();
            });
        })   
    
    },
    get_data_buscar_producto(filtro){
    
  
        return new Promise((resolve,reject)=>{
    
            axios.post(GlobalUrlCalls + '/productos/listado',
                {
                    sucursal:GlobalEmpnit,
                    token:TOKEN,
                    habilitado:'SI',
                    filtro:filtro
                })
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }                   
            }, (error) => {
                reject();
            });
        })   
        
    
    },
    get_data_precios_producto(codprod){
    
  
        return new Promise((resolve,reject)=>{
    
            axios.post(GlobalUrlCalls + '/productos/lista_precios',
                {
                    sucursal:GlobalEmpnit,
                    token:TOKEN,
                    codprod:codprod
                })
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }                   
            }, (error) => {
                reject();
            });
        })   
    
    },
    verify_codprod_movimientos:(codprod)=>{
    
        return new Promise((resolve,reject)=>{
    
            axios.post(GlobalUrlCalls + '/productos/verify_codprod_movimientos',
                {
                    sucursal:GlobalEmpnit,
                    token:TOKEN,
                    codprod:codprod
                })
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }                   
            }, (error) => {
                reject();
            });
        })   
    
    },
    get_data_empleados_tipo:(tipo)=>{
        return new Promise((resolve,reject)=>{
    
            axios.post(GlobalUrlCalls + '/empleados/empleados_tipo',
                {
                    sucursal:GlobalEmpnit,
                    token:TOKEN,
                    tipo:tipo
                })
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }                   
            }, (error) => {
                reject();
            });
        })     
    },
    get_data_cajas:()=>{
        return new Promise((resolve,reject)=>{
    
            axios.post(GlobalUrlCalls + '/cajas/listado',
                {
                    sucursal:GlobalEmpnit,
                    token:TOKEN
                })
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }                   
            }, (error) => {
                reject();
            });
        })     
    },
    get_data_empresas:()=>{
    return new Promise((resolve,reject)=>{

            axios.post(GlobalUrlCalls + '/general/empresas',{TOKEN:TOKEN})
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }                   
            }, (error) => {
                reject();
            });
        }) 
    },
    get_data_color:()=>{
        return new Promise((resolve,reject)=>{
    
            axios.post(GlobalUrlCalls + '/pos/listado_colores',
                {
                    sucursal:GlobalEmpnit,
                    token:TOKEN
                })
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }                   
            }, (error) => {
                reject();
            });
        })     
    },
    get_productos_totales:(habilitado)=>{
        return new Promise((resolve,reject)=>{
    
            axios.post(GlobalUrlCalls + '/productos/get_cantidad_productos',
                {
                    sucursal:GlobalEmpnit,
                    token:TOKEN,
                    habilitado:habilitado
                })
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }                   
            }, (error) => {
                reject();
            });
        })     
    },
    get_data_movimientos_producto:(codprod)=>{

        return new Promise((resolve,reject)=>{

            axios.post(GlobalUrlCalls + '/productos/movimientos_kardex', {
                token:TOKEN,
                sucursal:GlobalEmpnit,
                codprod:codprod
            })
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }                   
            }, (error) => {
                reject();
            });
        }) 
    
    },
    get_tbl_movimientos_producto:(codprod)=>{

        return new Promise((resolve,reject)=>{
            GF.get_data_movimientos_producto(codprod)
            .then((data)=>{
                
                let str =''
                let saldo = 0;

                data.recordset.map((r)=>{
                    let entrada = 0;
                    let salida = 0;
                    let strSaldoClass = '';

                    if(Number(r.INV)==1){entrada=Number(r.TOTALUNIDADES);salida=0}else{entrada=0;salida=Number(r.TOTALUNIDADES)}
                    
                    saldo += Number(r.TOTALUNIDADES) * Number(r.INV);
                    if(saldo<0){strSaldoClass="negrita text-danger"}else{strSaldoClass="negrita text-info"}
                    
                    str += `
                        <tr>
                            <td>${funciones.convertDateNormal(r.FECHA)}</td>
                            <td>${r.CODDOC}-${r.CORRELATIVO}</td>
                            <td>${entrada}</td>
                            <td>${salida}</td>
                            <td class="${strSaldoClass}">${saldo}</td>
                            <td>${funciones.setMoneda(r.PRECIO,'Q')}</td>
                            <td>${funciones.convertDateNormal(r.LASTUPDATE)}</td>
                            <td></td>
                        </tr>
                        `
                })
                resolve(str);    
            })
            .catch(()=>{
                resolve('No hay datos....');
            })
        })

        

    },
    get_data_documentos:(tipo,mes,anio)=>{
        return new Promise((resolve,reject)=>{
    
            axios.post(GlobalUrlCalls + '/documentos/listado_documentos',
                {
                    sucursal:GlobalEmpnit,
                    token:TOKEN,
                    tipo:tipo,
                    anio:anio,
                    mes:mes
                })
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }                   
            }, (error) => {
                reject();
            });
        })     
    },
    get_anulacion_documento:(coddoc,correlativo,status)=>{
        return new Promise((resolve,reject)=>{
    
            let strcall = ''
            if(status=='A'){strcall='/documentos/desanular_documento'}else{strcall='/documentos/anular_documento'}
            axios.post(GlobalUrlCalls + strcall,
                {
                    sucursal:GlobalEmpnit,
                    token:TOKEN,
                    coddoc:coddoc,
                    correlativo:correlativo
                })
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }                   
            }, (error) => {
                reject();
            });
        })     
    },
    get_clasificaciones_listado:(tipo)=>{
        return new Promise((resolve,reject)=>{

            axios.post(GlobalUrlCalls + '/clasificaciones/listado', {token:TOKEN,tipo:tipo})
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }                   
            }, (error) => {
                reject();
            });
        }) 
    
    },
    get_data_detalle_documento: (empnit,coddoc,correlativo)=>{
        return new Promise((resolve, reject)=>{
            
            let data = {
                sucursal:empnit,
                token:TOKEN,
                coddoc:coddoc,
                correlativo:correlativo
            };
    
            axios.post(`/documentos/detalle_documento`, data)
            .then(response => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }       
            })
            .catch(()=>{
                reject();
            })
    
        })
    },
    get_data_empresa_config(sucursal){
    
  
        return new Promise((resolve,reject)=>{
    
            axios.post(GlobalUrlCalls + '/sucursales/data_empresa_config',
                {
                    token:TOKEN,
                    sucursal:sucursal
                })
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }                   
            }, (error) => {
                reject();
            });
        })   
    
    },
    get_data_sucursales_precios(precio){
    
  
        return new Promise((resolve,reject)=>{
    
            axios.post(GlobalUrlCalls + '/sucursales/sucursales_precio',
                {
                    token:TOKEN,
                    precio:precio
                })
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }                   
            }, (error) => {
                reject();
            });
        })   
    
    },
    get_data_sucursales_existencia(codprod){
    
  
        return new Promise((resolve,reject)=>{
    
            axios.post(GlobalUrlCalls + '/sucursales/sucursales_existencia_producto',
                {
                    token:TOKEN,
                    codprod:codprod
                })
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }                   
            }, (error) => {
                reject();
            });
        })   
    
    },
    get_data_documentos_pendientes_producto(codprod){
    
  
        return new Promise((resolve,reject)=>{
    
            axios.post(GlobalUrlCalls + '/compras/documentos_pendientes_producto',
                {
                    token:TOKEN,
                    codprod:codprod
                })
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }                   
            }, (error) => {
                reject();
            });
        })   
    
    },
    update_precio_medida(codprod,tipo,codmedida,equivale,precio,bono,margen){
    
  
        return new Promise((resolve,reject)=>{
    
            axios.post(GlobalUrlCalls + '/productos/update_precio_medida',
                {
                    token:TOKEN,
                    sucursal:GlobalEmpnit,
                    codprod:codprod,
                    tipo:tipo,
                    codmedida:codmedida,
                    equivale:equivale,
                    precio:precio,
                    bono:bono,
                    margen:margen
                })
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(data.toString()=="error"){
                        reject();
                    }else{
                        if(Number(data.rowsAffected[0])>0){
                            resolve(data);             
                        }else{
                            reject();
                        } 
                    }       
                }else{
                    reject();
                }                   
            }, (error) => {
                reject();
            });
        })   
    
    },
};

