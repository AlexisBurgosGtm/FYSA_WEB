function getView(){
    let view = {
        body:()=>{
            return `
               <div class="row">                
                    ${view.menu_superior()}            
                </div>
                <br>

                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active fixed" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.panel_inicio()}
                            
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
                            <h5 class="negrita">Inicio Compras (Administracion)</h5>
                        </div>
                    </div>
                    
                </div>
            </div>
            `;
        },
        panel_inicio:()=>{
            return `
            <div class="row">
                <div class="col-sm-12 col-md-6 col-xl-6 col-lg-6">
                    
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
                                        <select class="form-control" id="cmbPrioridad">
                                        </select>
                                    </div>
                               </div>
                               
                               <div class="table-responsive">
                                    <table class="table h-full table-hove table-bordered">
                                        <thead class="bg-naranja text-white">
                                            <tr>
                                                <td>PRODUCTO</td>
                                                <td>MARCA</td>
                                                <td>MIN</td>
                                                <td>MAX</td>
                                                <td>EXISTENCIA</td>
                                                <td>RELLENO</td>
                                                <td>ULTIMO</td>
                                            </tr>
                                        </thead>
                                        <tbody id="tblDataSurtido"></tbody>
                                    </table>
                               </div>
                                        
                        </div>
                    </div>
                
                </div>
                <div class="col-sm-12 col-md-6 col-xl-6 col-lg-6">
                                    
                    <div class="card border-naranja card-rounded shadow col-12">
                        <div class="card-body p-2">
                                            
                        </div>
                    </div>
                
                </div>
            </div>
            `;
        }
    }

    root.innerHTML = view.body();

};



function addListeners(){

    
    document.title = "Inicio Compras";


    let cmdSucursal = document.getElementById('cmbSucursal')
    GF.get_data_empresas()
    .then((data)=>{
        let str = '<option value="TODAS">TODAS LAS SUCURSALES</option>';
        data.recordset.map((r)=>{
            str += `
                <option value="${r.EMPNIT}">${r.NOMBRE}</option>
            `
        })
        cmdSucursal.innerHTML = str;
        get_tbl_surtido(cmbSucursal.value);  
    })
    .catch(()=>{
        cmdSucursal.innerHTML = "<option value=''>NO SE CARGARON LAS SEDES</option>"
    })
    


    cmdSucursal.addEventListener('change',()=>{
        get_tbl_surtido(cmbSucursal.value);  
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
            sucursal:empnit
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
                    <td>${r.EXISTENCIA}</td>
                    <td class="negrita text-danger">${r.RELLENO}</td>
                    <td>${funciones.convertDateNormal(r.LASTUPDATE)}</td>
                </tr>
            `
        })
        container.innerHTML = str;
        lbTotal.innerText = `Pendientes surtir ${contador}`
    })
    .catch(()=>{
        container.innerHTML = 'No se cargaron datos...'
        lbTotal.innerText = '---'
    })


}















function get_data(){
    return new Promise((resolve, reject)=>{
        
        let data = {
            sucursal:GlobalEmpnit,
            anio:2024,
            mes:8
        };

        axios.post(`/bi/rpt_mapa`, data)
        .then(res => {
            const datos = res.data.recordset;   
            resolve(datos);
        })
        .catch(()=>{
            reject();
        })

    })
};


