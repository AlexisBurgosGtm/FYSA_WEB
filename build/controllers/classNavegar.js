let lbForm = document.getElementById('lbForm');

let Navegar = {
    pendiente:()=>{
        funciones.Aviso('Esta opción aún no está disponible, pronto lo estará!!')
    },
    salir:()=>{
        funciones.Confirmacion('¿Está seguro que desea cerrar sesión y salir?')
        .then((value)=>{
            if(value==true){
                Navegar.login();
            }
        })
    },
    login:()=>{
    
        funciones.loadScript('../views/general_login/view_login.js','root')
        .then(async()=>{
            //btnMenu.style = "visibility:hidden";
            initView();
        })
    },
    inicio:()=>{
      
        switch (Number(GlobalNivelUsuario)) {
            case 1:
                Navegar.inicio_gerencia();
                break;
            case 2:
                Navegar.inicio_compras();
                break;
            case 3:
                Navegar.inicio_ventas();
                break;
            case 4:
                Navegar.inicio_despacho();
                break;
            case 5:
                
                break;
        }
            
    },
    inicio_gerencia:()=>{
        if(Number(GlobalNivelUsuario)==0){return;}
        funciones.loadScript('../views/menu/inicio_gerencia.js','root')
        .then(async()=>{
            initView();
        })
    },
    inicio_compras:()=>{
        if(Number(GlobalNivelUsuario)==0){return;}
        funciones.loadScript('../views/menu/inicio_compras.js','root')
        .then(async()=>{
            initView();
        })
    },
    inicio_ventas:()=>{
        if(Number(GlobalNivelUsuario)==0){return;}
        funciones.loadScript('../views/menu/inicio_ventas.js','root')
        .then(async()=>{
            initView();
        })
    },
    inicio_despacho:()=>{
        if(Number(GlobalNivelUsuario)==0){return;}
        funciones.loadScript('../views/menu/inicio_despacho.js','root')
        .then(async()=>{
            initView();
        })
    }
 
}