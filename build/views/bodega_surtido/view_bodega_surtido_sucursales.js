function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_surtido_sucursales() + view.modal_existencia_sucursales()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                           
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>    
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-uno" data-toggle="tab" href="#uno" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-dos" data-toggle="tab" href="#dos" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-tres" data-toggle="tab" href="#tres" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>         
                    </ul>
                    
                </div>
               
            `
        },
        vista_surtido_sucursales:()=>{
            return `                   
            <div class="card border-naranja card-rounded shadow col-12">
                <div class="card-body p-2">
                       <h3 class="negrita text-naranja">Surtido pendiente por Sucursal</h3>
                       <div class="text-right">
                            <h4 class="negrita text-danger" id="lbTotalPendientes"></h4>
                       </div>
                       <div class="form-group">
                            <label class="negrita text-secondary">Seleccione la Sucursal a consultar</label>
                            <div class="input-group">
                                <select class="form-control" id="cmbSucursal">
                                </select>
                                <button class="btn hidden"></button>
                                <button class="btn btn-naranja shadow hand" id="btnCrearTraslado">
                                    <i class="fal fa-plus"></i> Crear Traslado a Sucursal
                                </button>
                            </div>
                       </div>
                       
                       <div class="table-responsive">
                            <table class="table h-full table-hove table-bordered h-full">
                                <thead class="bg-naranja text-white">
                                    <tr>
                                        <td>PRODUCTO</td>
                                        <td>MARCA</td>
                                        <td>MIN</td>
                                        <td>MAX</td>
                                        <td>EXISTENCIA</td>
                                        <td>RELLENO</td>
                                        <td>ULTIMO</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody id="tblDataSurtido"></tbody>
                            </table>
                       </div>
                                
                </div>
            </div>
        

     


            <button class="btn btn-secondary btn-circle btn-circle btn-bottom-l btn-xl hand shadow" onclick="document.getElementById('tab-uno').click()">
                <i class="fal fa-arrow-left"></i>
            </button>
            `;
        },
        modal_existencia_sucursales:()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_existencia_sucursales">
                <div class="modal-dialog modal-dialog-center modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-naranja d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                Existencias en todas las sucursales
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="row">
                                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    
                                    <div class="card card-rounded">
                                        <div class="card-body p-4">

                                            <h3 class="negrita text-verde" id="lbDesprodSucursales"></h3>
                                            <h5 class="negrita text-secondary" id="lbDesmarcaSucursales"></h5>
                                        
                                            <table class="table table-responsive h-full f-med" id="">
                                                <thead class="negrita bg-naranja text-white">
                                                    <tr>
                                                        <td>SUCURSAL</td>
                                                        <td>MINIMO</td>
                                                        <td>MAXIMO</td>
                                                        <td>EXISTENCIA</td>
                                                        <td>RELLENO</td>
                                                    </tr>
                                                </thead>
                                                <tbody id="tblDataSucursales">
                                                            
                                                </tbody>
                                                <tfoot id="tblFooterSucursales" class="border-naranja text-naranja negrita">
                                                
                                                </tfoot>
                                            </table>


                                        </div>
                                    </div>

                                </div>

                                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    
                                    <div class="card card-rounded">
                                        <div class="card-body p-4">

                                            <h5 class="negrita text-ver">Documentos pendientes del producto</h5>
                                        
                                            <table class="table table-responsive h-full f-med" id="">
                                                <thead class="negrita bg-verde text-white">
                                                    <tr>
                                                        <td>FECHA</td>
                                                        <td>DOCUMENTO</td>
                                                        <td>CANTIDAD SOLICITADA</td>
                                                    </tr>
                                                </thead>
                                                <tbody id="tblDataDocumentosProducto">
                                                            
                                                </tbody>
                                               
                                            </table>

                                        </div>
                                    </div>

                                </div>
                            </div>

                     
                           
                                
                            <div class="row">
                                <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                                    <i class="fal fa-arrow-left"></i>
                                </button>
                            </div>

                        </div>
                       
                    </div>
                </div>
            </div>

            
            `
        },
        modal:()=>{
            return `
              <div id="modal_" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-secondary d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                TITULO
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-2">

                                </div>
                            </div>

                                
                            <div class="row">
                                <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                                    <i class="fal fa-arrow-left"></i>
                                </button>
                            </div>

                        </div>
                    
                    </div>
                </div>
            </div>
            `
        }
    }

    root.innerHTML = view.body();

};

function addListeners(){


    document.title = "Bodega Surtido Suc";

    funciones.slideAnimationTabs();

    
    let cmbSucursal = document.getElementById('cmbSucursal');

    //carga el combo empresas
    GF.get_data_empresas()
    .then((data)=>{
        
        let str = '<option value="TODAS">TODAS LAS SUCURSALES</option>';
        data.recordset.map((r)=>{
            str += `
                <option value="${r.EMPNIT}">${r.NOMBRE}</option>
            `
        })
        cmbSucursal.innerHTML = str;
        get_tbl_surtido(cmbSucursal.value); 
         
    })
    .catch((error)=>{
        console.log('error al cargar empresas ' + error)
        cmbSucursal.innerHTML = "<option value=''>NO SE CARGARON LAS SEDES</option>"
    })
    

    //lo deshabilito hasta que seleccionen una sucursal
    document.getElementById('btnCrearTraslado').disabled=true

    //listener del combo empresas
    cmbSucursal.addEventListener('change',()=>{
        if(cmbSucursal.value=='TODAS'){document.getElementById('btnCrearTraslado').disabled=true}else{document.getElementById('btnCrearTraslado').disabled=false}
        
        get_tbl_surtido(cmbSucursal.value);
       
    })


    let btnCrearTraslado = document.getElementById('btnCrearTraslado');
    btnCrearTraslado.addEventListener('click',()=>{


        funciones.Confirmacion('Desea crear un traslado hasta la sucursal seleccionada?')
        .then((value)=>{
            if(value==true){

                funciones.showToast('Limpiado tabla para crear traslado...');

                //eliminando la tabla anterior
                db_movinv_bod.deleteTempVenta_pos()
                .then(()=>{

                    create_traslado_sucursal(cmbSucursal.value)
                    .then((conteo)=>{
                        funciones.Aviso(`Filas agregadas: ${conteo}`);
                        Menu.bodega_surtido_traslado();
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se creo la tabla del traslado')
                    })

                    
                })

                
            }
        })


    })

  


 
    
 
};

function initView(){

    getView();
    addListeners();

};



function get_data_surtido(empnit){
    return new Promise((resolve, reject)=>{
        
        let data = {
            token:TOKEN,
            sucursal:empnit,
            
        };

        axios.post(`/compras/surtido_sucursales`, data)
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
};

function get_tbl_surtido(empnit){


    let container = document.getElementById('tblDataSurtido');
    container.innerHTML = GlobalLoader;
    let lbTotal = document.getElementById('lbTotalPendientes');
    lbTotal.innerText = '---'



    let contador = 0;

   

    get_data_surtido(empnit)
    .then((data)=>{
        
        let str = '';
        data.recordset.map((r)=>{
            contador +=1;
          
            str +=`
                <tr>
                    <td>${r.DESPROD}
                        <br>
                        <small class="negrita text-naranja">${r.CODPROD}</small>
                    </td>
                    <td>${r.DESMARCA}</td>
                    <td>${r.MINIMO}</td>
                    <td>${r.MAXIMO}</td>
                    <td class="negrita">${r.EXISTENCIA}</td>
                    <td class="negrita text-danger">${r.RELLENO}</td>
                    <td>${funciones.convertDateNormal(r.LASTUPDATE)}</td>
                    <td>
                        <button class="btn btn-naranja btn-circle btn-md hand shadow" onclick="get_existencia_sucursales('${r.CODPROD}','${r.DESPROD}','${r.DESMARCA}')">
                            <i class="fal fa-box"></i>
                        </button>
                    </td>
                </tr>
            `
        })
        container.innerHTML = str;
        lbTotal.innerText = `Pendientes surtir ${contador}`;
    })
    .catch(()=>{
        container.innerHTML = 'No se cargaron datos...'
        lbTotal.innerText = '---'
    })


};

function get_total_rellenos(){

    return new Promise((resolve, reject)=>{
        
        let data = {
            token:TOKEN
        };

        axios.post(`/compras/total_rellenos`, data)
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
};



function get_existencia_sucursales(codprod,desprod,desmarca){

    $("#modal_existencia_sucursales").modal('show');

    document.getElementById('lbDesprodSucursales').innerText = desprod;
    document.getElementById('lbDesmarcaSucursales').innerText = desmarca;

    let container = document.getElementById('tblDataSucursales');
    container.innerHTML = GlobalLoader;

    GF.get_data_sucursales_existencia(codprod)
    .then((data)=>{
        let str = '';
        let strClassExist ='';
        let varMinimo =0; let varMaximo=0; let varExistencia =0; let varRelleno =0;
     
        data.recordset.map((r)=>{
            varMinimo += Number(r.MINIMO); 
            varMaximo += Number(r.MAXIMO); 
            varExistencia += Number(r.EXISTENCIA); 
            varRelleno += Number(r.RELLENO);
            if(Number(r.RELLENO)<0){strClassExist='text-success negrita'}else{strClassExist='text-danger negrita'}
            str += `
             <tr>
                <td>${r.NOMEMPRESA}</td>
                <td>${r.MINIMO}</td>
                <td>${r.MAXIMO}</td>
                <td>${r.EXISTENCIA}</td>
                <td class='${strClassExist}'>${r.RELLENO}</td>
            </tr>
            `
        })
        container.innerHTML = str;
        document.getElementById('tblFooterSucursales').innerHTML = ` <tr>
                                                                        <td></td>
                                                                        <td>${varMinimo}</td>
                                                                        <td>${varMaximo}</td>
                                                                        <td>${varExistencia}</td>
                                                                        <td>${varRelleno}</td>
                                                                    </tr>`
    })
    .catch(()=>{
        container.innerHTML = 'No se cargaron datos....';
        document.getElementById('tblFooterSucursales').innerHTML = ` <tr>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                    </tr>`
    })


    let container2 = document.getElementById('tblDataDocumentosProducto');
    container2.innerHTML = GlobalLoader;

    GF.get_data_documentos_pendientes_producto(codprod)
    .then((data)=>{
        let str = '';
     
        data.recordset.map((r)=>{
            str += `
            <tr>
                <td>${funciones.convertDateNormal(r.FECHA)}
                    <br>
                    <small class="negrita text-danger">H:${r.HORA}</small>
                </td>
                <td>${r.CODDOC}-${r.CORRELATIVO}</td>
                <td>${r.CODMEDIDA} - ${r.CANTIDAD}</td>
            </tr>
            `
        })
        container2.innerHTML = str;
      
    })
    .catch(()=>{
        container2.innerHTML = 'No se cargaron datos....';
    })



};



// CREACION DEL TRASLADO
//-----------------------------

function create_traslado_sucursal(sucursal){

    return new Promise((resolve, reject)=>{
    
        get_data_surtido(sucursal)
        .then((data)=>{
        
            let conteo = 0;
            data.recordset.map((r)=>{
                conteo += 1;
                let codprod = r.CODPROD;
                let desprod = r.DESPROD;
                let codmedida = 'UN_BOD';
                let equivale = 1;
                let costo = 0;
                let preciounitario = 0;
                let cantidad = Number(r.RELLENO);
                let exento = 0;
                let tipoprod = r.TIPOPROD;
                let existencia = Number(r.EXISTENCIA);
                let bono = 0;
                let descuento = 0;

                insert_producto_pedido(codprod,desprod,codmedida,equivale,costo,preciounitario,cantidad, exento, tipoprod, data_empresa_config.TIPO_PRECIO, existencia,bono,descuento)
                .then(()=>{
                    //funciones.showToast('Producto agregado ' + desprod); 

                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo agregar');
                })

            })
            resolve(conteo);

        })  
        .catch(()=>{
            reject(0);
        })  
    
    
    })

};

function insert_producto_pedido(codprod,desprod,codmedida,equivale,costo,precio,cantidad,exento,tipoprod,tipoprecio,existencia,bono,descuento){
    
    let datos = 
        {
            CODSUCURSAL:GlobalEmpnit.toString(),
            EMPNIT:GlobalEmpnit.toString(),
            USUARIO:'',
            CODPROD:codprod.toString(),
            DESPROD:funciones.limpiarTexto(desprod.toString()),
            CODMEDIDA:funciones.limpiarTexto(codmedida.toString()),
            EQUIVALE:Number(equivale),
            COSTO:Number(costo),
            TOTALCOSTO:Number(costo)*Number(cantidad),
            PRECIO:Number(precio),
            CANTIDAD:Number(cantidad),
            TOTALUNIDADES:Number(cantidad * equivale),
            TOTALPRECIO:Number(precio)*Number(cantidad),
            EXENTO:Number(exento),
            TIPOPROD:tipoprod,
            TIPOPRECIO:tipoprecio,
            EXISTENCIA:Number(existencia),
            BONO:Number(bono),
            DESCUENTO:Number(descuento)
        };

    

    return new Promise((resolve,reject)=>{
        db_movinv_bod.insertTempVentasPOS(datos)
        .then(()=>{
            resolve();
        }) 
        .catch(()=>{
            reject();
        }) 
    });

};