
function getView(){
    let view = {
        body:()=>{
            return `
                ${view.vista_encabezado()}
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado_productos()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                           ${view.vista_listado_precios() + view.modal_codmedida()}
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
        vista_encabezado:()=>{
            return `
            <div class="row">
                    <div class="col-1 text-left">
                            <img src="./favicon.png" width="80px" height="80px">
                    </div>
                    <div class="card border-naranja card-rounded shadow col-11 p-2">
                        
                            <div class="row">
                                <div class="col-4 text-left">   
                                    <label class="text-verde negrita h5" style="font-size:120%">Gestor de cambio de Precios</label>
                                    
                                </div>
                                
                                <div class="col-8 text-right">
                                </div>
                            </div>
                        
                    </div>
                </div>
                <br>
            `
        },
        vista_listado_productos:()=>{
            return `      
                <div class="form-group">
                    <label class="negrita text-naranja">Escriba para buscar un Producto</label>
                    <div class="input-group">
                        <input type="text" id="txtBuscar" class="form-control negrita text-verde border-verde">
                        <button class="btn btn-info btn-md hand shadow" id="btnBuscar">
                            <i class="fal fa-search"></i>
                        </button>
                    </div>
                </div>                    
                <div class="table-responsive">
                    <table class="table h-full table-hove table-bordered col-12" id="tblProductos">
                        <thead class="bg-naranja text-white">
                            <tr>
                                <td>CODIGOS</td>
                                <td>PRODUCTO</td>
                                <td>MARCA</td>
                                <td>MODIFICADO</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody id="tblDataProductos"></tbody>
                    </table>
                </div>
            `
        },
        vista_listado_precios:()=>{
            return `
                <div class="form-group">
                    <h2 class="negrita text-naranja" id="lbDesprod"></h2>
                    <h4 class="negrita text-danger" id="lbCodprod"></4>
                </div>
                <div class="form-group">
                    <label class="negrita text-naranja">Escriba para filtrar</label>
                    <div class="input-group">
                        <input type="text" id="txtBuscarPrecio" class="form-control negrita text-verde border-verde">
                        <button class="btn btn-info btn-md hand shadow" id="btnBuscarPrecio">
                            <i class="fal fa-search"></i>
                        </button>
                    </div>
                </div>                    
                <div class="table-responsive">
                    <table class="table h-full table-hove table-bordered col-12" id="tblPrecios">
                        <thead class="bg-verde text-white">
                            <tr>
                                <td>MEDIDA</td>
                                <td>EQUIVALE</td>
                                <td>COSTO</td>
                                <td>PRECIO</td>
                                <td>PRECIO_A</td>
                                <td>PRECIO_B</td>
                                <td>PRECIO_C</td>
                                <td>PRECIO_D</td>
                                <td>PRECIO_E</td>
                                <td>PRECIO_F</td>
                                <td>MODIFICADO</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody id="tblDataPrecios"></tbody>
                    </table>
                </div>


                <button class="btn btn-circle btn-bottom-l btn-secondary hand shadow btn-xl" onclick="document.getElementById('tab-uno').click()">
                    <i class="fal fa-arrow-left"></i>
                </button>
            `
        },
        modal_codmedida:()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_detalle_medida">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-secondary d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                Gestión de Marcas
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-2">

                                     <table class="table table-responsive h-full f-med" id="">
                                        <thead class="negrita bg-naranja text-white">
                                            <tr>
                                                <td>COSTO</td>
                                                <td>PRECIO</td>
                                                <td></td>
                                            </tr>
                                        </thead>
                                        <tbody id="tblDataProdMarcas">
                                                    
                                        </tbody>
                                    </table>
                                
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
    }

    root.innerHTML = view.body();

};

function addListeners(){


    funciones.slideAnimationTabs();





    document.getElementById('btnBuscar').addEventListener('click',()=>{
        get_tbl_producto();
    });

    document.getElementById('txtBuscar').addEventListener('keyup',(e)=>{

        if (e.code === 'Enter') { 
            document.getElementById('btnBuscar').click();
        };
        if (e.code === 13) { 
            document.getElementById('btnBuscar').click();
           
        };



    })







};

function initView(){

    getView();
    addListeners();

};


function get_precios_producto(codprod,desprod){

    document.getElementById('tab-dos').click();

    document.getElementById('lbDesprod').innerText = desprod;
    document.getElementById('lbCodprod').innerText = codprod;

    get_tbl_precios(codprod);




}




function get_tbl_producto(){
    
    let filtro = document.getElementById('txtBuscar').value || '';

    if(filtro==''){funciones.AvisoError('Escriba una descripcion o codigo para buscar');return;}
    

    let container = document.getElementById('tblDataProductos');
    container.innerHTML = GlobalLoader;

    GF.get_data_buscar_producto(filtro)
    .then((data)=>{
        let str = '';
        data.recordset.map((r)=>{
            str += `
            <tr>
                <td>${r.CODPROD}
                    <br>
                    <small class="negrita text-info">${r.CODPROD2}</small>
                </td>
                <td>${r.DESPROD}</td>
                <td>${r.DESMARCA}</td>
                <td>${funciones.convertDateNormal(r.LASTUPDATE)}</td>
                <td>
                    <button class="btn btn-circle btn-naranja btn-md hand shadow" onclick="get_precios_producto('${r.CODPROD}','${r.DESPROD}')">
                        <i class="fal fa-arrow-right"></i>
                    </button>
                </td>
            </tr>
            `
        })
        container.innerHTML = str;
    })
    .catch(()=>{
        container.innerHTML = 'No se cargaron los datos....'
    })

};


function get_tbl_precios(codprod){

    let container = document.getElementById('tblDataPrecios');
    container.innerHTML = GlobalLoader;


    GF.get_data_precios_producto(codprod)
    .then((data)=>{
        let str = '';
        data.recordset.map((r)=>{
            str += `
            <tr>
                <td>${r.CODMEDIDA}</td>
                <td>${r.EQUIVALE}</td>
                <td>${funciones.setMoneda(r.COSTO,'Q')}</td>
                <td>${funciones.setMoneda(r.PRECIO,'Q')}</td>
                <td>${funciones.setMoneda(r.PRECIO_A,'Q')}</td>
                <td>${funciones.setMoneda(r.PRECIO_B,'Q')}</td>
                <td>${funciones.setMoneda(r.PRECIO_C,'Q')}</td>
                <td>${funciones.setMoneda(r.PRECIO_D,'Q')}</td>
                <td>${funciones.setMoneda(r.PRECIO_E,'Q')}</td>
                <td>${funciones.setMoneda(r.PRECIO_F,'Q')}</td>
                <td>${funciones.convertDateNormal(r.LASTUPDATE)}</td>
                <td>
                    <button class="btn btn-info btn-circle btn-lg hand shadow" 
                        onclick="get_datos_codmedida('${r.CODMEDIDA}','${r.EQUIVALE}','${r.COSTO}','${r.PRECIO}','${r.PRECIO_A}','${r.PRECIO_B}','${r.PRECIO_C}','${r.PRECIO_D}','${r.PRECIO_E}','${r.PRECIO_F}')">
                        <i class="fal fa-edit"></i>
                    </button>
                </td>
            </tr>
            `
        })
        container.innerHTML = str;
    })
    .catch(()=>{
        container.innerHTML = 'No se cargaron datos...'
    })

}


function get_datos_codmedida(codmedida,equivale,costo,precio,precioa,preciob,precioc,preciod,precioe,preciof){

    $("#modal_detalle_medida").modal('show');






}