

let GlobalUrlCalls = '';
let GlobalUrlServicioLocal = 'http://192.168.1.16:8080'
let GlobalUrlPrinter = 'http://192.168.0.250:9000'
let TOKEN = 'FSYA';
let GlobalEmpnitBodega = 'FSYA000';

let GlobalUsuario = '';
let GlobalPass = '';
let GlobalNivelUsuario = 0;

let GlobalBolEditando = false;
let GlobalSignoMoneda = 'Q'
let data_empresas = [];


let root = document.getElementById('root');
let cmbEmpresa = document.getElementById('cmbEmpresa');

let navmenu = document.getElementById('js-nav-menu');


let GlobalLoader = `

                <div>
                    <div class="spinner-border text-naranja" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-border text-naranja" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-border text-naranja" role="status"><span class="sr-only">Loading...</span></div>
                </div>
                `
               

// VARIABLES
let GlobalSelected_Codprod = '';
let GlobalSelected_Desprod = '';
let GlobalSelected_Costo = 0;
let GlobalSelected_Status = '';


let GlobalSelectedCodclie = 0;
let GlobalSelectedNoOrden = 0;
let GlobalSelectedCodEquipo = 0;








