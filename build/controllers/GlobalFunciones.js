let GF = {
    modo_sat:()=>{
        socket.emit('MODO_SAT')
    },
    print_orden_soporte:(noorden)=>{
        return new Promise((resolve,reject)=>{

            axios.get(`http://192.168.0.250:9000/ticket_soporte?sucursal=${GlobalEmpnit}&correlativo=${noorden}`)
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
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
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
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
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
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
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
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
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
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
                    if(Number(data.rowsAffected[0])==0){
                        resolve();             
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
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
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
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
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
    get_data_empresas:()=>{
    return new Promise((resolve,reject)=>{

            axios.post(GlobalUrlCalls + '/general/empresas',{TOKEN:TOKEN})
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
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
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
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
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
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
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
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
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
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
    get_clasificaciones_listado:(tipo)=>{
        return new Promise((resolve,reject)=>{

            axios.post(GlobalUrlCalls + '/clasificaciones/listado', {token:TOKEN,tipo:tipo})
            .then((response) => {
                if(response.status.toString()=='200'){
                    let data = response.data;
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
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
    get_data_detalle_documento: (empnit,coddoc,correlativo)=>{
        return new Promise((resolve, reject)=>{
            
            let data = {
                sucursal:empnit,
                token:TOKEN,
                coddoc:coddoc,
                correlativo:correlativo
            };
    
            axios.post(`/documentos/detalle_documento`, data)
            .then(res => {
                if(res.status.toString()=='200'){
                    let data = res.data;
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
                    }else{
                        reject();
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
};

