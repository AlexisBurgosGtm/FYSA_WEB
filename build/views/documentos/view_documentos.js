function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado()}
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

                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label class="negrita text-naranja">Tipo Documento</label>
                                <select class="form-control" id="cmbTipos">
                                </select>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label class="negrita text-naranja">Selecciones Mes y Año</label>
                                <div class="input-group">
                                    <select class="form-control" id="cmbMes">
                                    </select>
                                    <select class="form-control" id="cmbAnio">
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="solid">

                    <div class="table-responsive col-12">
                        <table class="table table-hover col-12 h-full" id="tblDocumentos">
                            <thead class="bg-naranja text-white">
                                <tr>
                                    <td>FECHA</td>
                                    <td>DOCUMENTO</td>
                                    <td>NIT</td>
                                    <td>NOMBRE</td>
                                    <td>IMPORTE</td>
                                    <td>FPAGO</td>
                                    <td>ST</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblDataDocumentos">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            `
        },
        vista_nuevo:()=>{

        }
    }

    root.innerHTML = view.body();

};

function addListeners(){

    document.getElementById('cmbTipos').innerHTML = get_tipo_documentos();
    document.getElementById('cmbMes').innerHTML = funciones.ComboMeses();
    document.getElementById('cmbAnio').innerHTML = funciones.ComboAnio();

    let f = new Date();
    document.getElementById('cmbMes').value = f.getMonth()+1;
    document.getElementById('cmbAnio').value = f.getFullYear();

    //carga la lista de documentos
    get_documentos();


    document.getElementById('cmbTipos').addEventListener('change',()=>{
        get_documentos();
    });

    document.getElementById('cmbMes').addEventListener('change',()=>{
        get_documentos();
    });

    document.getElementById('cmbAnio').addEventListener('change',()=>{
        get_documentos();
    });


};

function initView(){

    getView();
    addListeners();

};



function get_documentos(){

    let tipo = document.getElementById('cmbTipos').value;
    let anio = document.getElementById('cmbAnio').value;
    let mes = document.getElementById('cmbMes').value;

    let container = document.getElementById('tblDataDocumentos')
    container.innerHTML = GlobalLoader;

    GF.get_data_documentos(tipo,mes,anio)
    .then((data)=>{
        let str = '';
        data.recordset.map((r)=>{
            str += `
                <tr class="hand">
                    <td>${funciones.convertDateNormal(r.FECHA)}</td>
                    <td>${r.CODDOC}-${r.CORRELATIVO}</td>
                    <td>${r.NIT}</td>
                    <td>${r.NOMBRE}</td>
                    <td>${funciones.setMoneda(r.TOTALVENTA,'Q')}</td>
                    <td>${r.CONCRE}</td>
                    <td>${r.STATUS}</td>
                    <td></td>
                </tr>
            `
        })
        container.innerHTML = str;
    })
    .catch(()=>{
        container.innerHTML = 'No se cargaron datos...';
    })


}