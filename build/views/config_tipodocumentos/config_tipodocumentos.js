
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado() + view.modal_nuevo()}
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
        vista_listado:()=>{
            return `
            <div class="card card-rounded shadow col-12">
                <div class="card-body p-2">

                    <h1 class="text-naranja negrita">Documentos disponibles</h1>
                    
                    <br>

                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover h-full">
                            <thead class="bg-naranja text-white">
                                <tr>
                                    <td>TIPO</td>
                                    <td>CODDOC</td>
                                    <td>CORRELATIVO</td>
                                    <td>DESCRIPCION</td>
                                    <td>F.IMPRESION</td>
                                    <td>F.CONTA CON</td>
                                    <td>F.CONTA CRE</td>
                                    <td>STATUS</td>
                                    <td>EDITAR</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblDataListado">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <button class="btn btn-success btn-circle btn-xl btn-bottom-r hand shadow" id="btnNuevo">
                <i class="fal fa-plus"></i>
            </button>
            `
        },
        modal_nuevo:()=>{
            return `
              <div id="modal_nuevo" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-naranja d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                DATOS DEL NUEVO DOCUMENTO
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded col-12">
                                <div class="card-body p-4">

                                    <div class="form-group">
                                        <label class="negrita text-naranja">Tipo de Documento</label>
                                        <select class="form-control negrita" id="cmbTipodocumento">
                                        </select>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="negrita text-naranja">Descripcion</label>
                                        <input type="text" class="form-control negrita" maxlength="250" id="txtDescripcion"/> 
                                    </div>

                                    <br>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="negrita text-naranja">Serie / Coddoc</label>
                                                <input type="text" class="form-control negrita" maxlength="50" id="txtCoddoc" /> 
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="negrita text-naranja">Correlativo</label>
                                                <input type="number" class="form-control negrita" id="txtCorrelativo" /> 
                                            </div>
                                        </div>
                                    </div>

                                    <br>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="negrita text-naranja">Formato Contable Contado</label>
                                                <select class="form-control negrita" id="cmbFContaCon">
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="negrita text-naranja">Formato Contable Crédito</label>
                                                <select class="form-control negrita" id="cmbFContaCre">
                                                </select> 
                                            </div>
                                        </div>
                                    </div>

                                    <br>
                                    <div class="row">
                                        <div class="col-6">
                                            <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                                                <i class="fal fa-arrow-left"></i>
                                            </button>
                                        </div>
                                        <div class="col-6">
                                            <button class="btn btn-info btn-circle btn-xl hand shadow" id="btnGuardar">
                                                <i class="fal fa-save"></i>
                                            </button>
                                        </div>
                                        
                                    </div>


                                </div>
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

        funciones.slideAnimationTabs();


        document.getElementById('btnNuevo').addEventListener('click',()=>{
            //document.getElementById('tab-dos').click();
            $("#modal_nuevo").modal('show');
            fcn_limpiar_datos();
        })


       get_combos();
       


        get_tbl_documentos();


};

function initView(){

    getView();
    addListeners();

};


function get_combos(){

        //COMBO TIPO DE DOCUMENTOS
        classTipodocumentos.get_data_tipos()
        .then((data)=>{
            let str = '';
            data.recordset.map((r)=>{
                str += `
                    <option value="${r.TIPODOC}">(${r.TIPODOC}) ${r.DESCRIPCION}</option>
                `
            })
            document.getElementById('cmbTipodocumento').innerHTML = str;
        })
        .catch(()=>{
            document.getElementById('cmbTipodocumento').innerHTML = '';
        })


        //COMBO FORMATO CONTA CON


        //COMBO FORMATO CONTA CRE

        





}

function fcn_limpiar_datos(){



};


function get_tbl_documentos(){

    document.getElementById('tblDataListado').innerHTML = GlobalLoader;

    classTipodocumentos.get_tbl_documentos()
    .then((data)=>{

        let str = '';
        data.recordset.map((r)=>{

            let strClassHabilitado = ""; if(r.HABILITADO=='SI'){strClassHabilitado='btn-success'}else{strClassHabilitado='btn-danger'};
            let idBtnStatus = `btnStatus${r.CODDOC}${r.TIPODOC}`;

            str += `
                    <tr>
                        <td>${r.TIPODOC}</td>
                        <td>${r.CODDOC}</td>
                        <td>${r.CORRELATIVO}</td>
                        <td>${r.DESCRIPCION}</td>
                        <td>${r.FORMATO}</td>
                        <td>${r.CONTA_CON}</td>
                        <td>${r.CONTA_CRE}</td>
                        <td>
                            <button id='${idBtnStatus}' class="btn ${strClassHabilitado} btn-circle btn-md hand shadow" onclick="fcn_set_tipo_status('${r.CODDOC}','${r.HABILITADO}','${idBtnStatus}')">
                                <i class="fal fa-sync"></i>
                            </button>
                        </td>
                         <td>
                            <button class="btn btn-info btn-circle btn-md hand shadow" onclick="">
                                <i class="fal fa-edit"></i>
                            </button>
                        </td>
                         <td>
                            <button class="btn btn-danger btn-circle btn-md hand shadow" onclick="">
                                <i class="fal fa-trash"></i>
                            </button>
                        </td>
                    </tr>
            `
        })

        document.getElementById('tblDataListado').innerHTML = str;
    
    })
    .catch(()=>{

        document.getElementById('tblDataListado').innerHTML = 'No hay datos para mostrar....'
    
    })

};

function fcn_set_tipo_status(coddoc,status,idBtn){

        let btn = document.getElementById(idBtn);

        
        funciones.Confirmacion('¿Está seguro que desea cambiar el estado actual del Documento?')
        .then((value)=>{
            if(value==true){

                btn.innerHTML = `<i class="fal fa-spin fa-sync">`;
                btn.disabled = true;

                let st = '';
                if(status=='SI'){st='NO'}else{st='SI'};
                
                classTipodocumentos.update_status_documento(coddoc,st)
                .then(()=>{

                    funciones.Aviso('Documento actualizado exitosamente!!');
    
                    btn.innerHTML = `<i class="fal fa-sync">`;
                    btn.disabled = false;

                    get_tbl_documentos();

                })
                .catch(()=>{

                    funciones.AvisoError('No se pudo actualizar');

                    btn.innerHTML = `<i class="fal fa-sync">`;
                    btn.disabled = false;
                    
                })

            }
        })

        
};