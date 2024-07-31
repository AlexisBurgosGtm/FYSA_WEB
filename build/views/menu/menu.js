function getView(){
    let view = {
        body:()=>{
            return `
               <div class="row">                
                    ${view.menu_superior()}            
                </div>

                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active fixed" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            <div class="row">
                                <div class="col-sm-12 col-md-3 col-xl-3 col-lg-3">
                                    ${view.menu_lateral()}
                                </div>
                                <div class="col-sm-12 col-md-9 col-xl-9 col-lg-9">
                                    ${view.datos()}  
                                </div>
                            </div>
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
        menu_superior:()=>{
            return `
            <div class="card card-rounded col-12 border-naranja text-naranja">
                <div class="card-body">
                    <div class="row">
                        <div class="col-3">
                            <img src="./favicon.png" width="50" height="50">
                        </div>
                        <div class="col-9">
                            <h5 class="negrita">Datos del menú principal</h5>
                        </div>
                    </div>
                    
                </div>
            </div>
            `;
        },
        menu_lateral:()=>{
            return `
            <br>
            <div class="card card-rounded col-12 border-naranja hand" onclick="Menu.pos()">
                <div class="card-body">
                    <h5 class="text-verde-claro negrita">Punto de Venta</h5>
                </div>
            </div>
            <br>
            <div class="card card-rounded col-12 border-naranja hand" onclick="Menu.productos()">
                <div class="card-body">
                    <h5 class="text-verde-claro negrita">Productos y Precios</h5>
                </div>
            </div>
            <br>
            <div class="card card-rounded col-12 border-naranja hand" onclick="">
                <div class="card-body">
                    <h5 class="text-verde-claro negrita">Opción 1</h5>
                </div>
            </div>
            <br>
            <div class="card card-rounded col-12 border-naranja hand" onclick="">
                <div class="card-body">
                    <h5 class="text-verde-claro negrita">Opción 2</h5>
                </div>
            </div>
            <br>
            <div class="card card-rounded col-12 border-naranja hand" onclick="">
                <div class="card-body">
                    <h5 class="text-verde-claro negrita">Opción 3</h5>
                </div>
            </div>
            `;
        },
        datos:()=>{
            return `
            <table class="table table-responsive">
                <thead class="bg-verde-claro">
                    <tr>
                        <td>PRODUCTO</td>
                        <td>DATO 1</td>
                        <td>DATO 2</td>
                        <td>DATO 3</td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            `;
        }
    }

    root.innerHTML = view.body();

};

function handle_empresa_change(){
    //get_rpt_fechas();
    //get_rpt_fechas_compras();
    //get_rpt_productos();
};

function addListeners(){

    Mousetrap.bind('ctrl+m', function() { document.getElementById('btnMenu').click() });

    cmbEmpresa.removeEventListener('change', handle_empresa_change)
    cmbEmpresa.addEventListener('change', handle_empresa_change)


  
 
   
};

function initView(){

    getView();
    addListeners();

};



