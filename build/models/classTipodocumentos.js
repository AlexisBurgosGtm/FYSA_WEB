try {
    //delete window.classTipodocumentos;
    classTipodocumentos = undefined;
} catch (error) {
    console.log('Error en la clase ' + error)
}
let classTipodocumentos = {
    get_tbl_documentos(){
  
        return new Promise((resolve,reject)=>{
    
            axios.post(GlobalUrlCalls + '/tipodocumentos/listado_general',
                {
                    token:TOKEN,
                    sucursal:GlobalEmpnit
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
    update_status_documento(coddoc,status){
  
        return new Promise((resolve,reject)=>{
    
            axios.post(GlobalUrlCalls + '/tipodocumentos/update_status',
                {
                    token:TOKEN,
                    sucursal:GlobalEmpnit,
                    coddoc:coddoc,
                    status:status
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
    get_data_tipos(){
  
        return new Promise((resolve,reject)=>{
    
            axios.post(GlobalUrlCalls + '/tipodocumentos/listado_tipos',
                {
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
}