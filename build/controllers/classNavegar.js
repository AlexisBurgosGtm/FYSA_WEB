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
        funciones.loadScript('../views/login/view_login.js','root')
        .then(async()=>{
            //btnMenu.style = "visibility:hidden";
            initView();
        })
    },
    menu:()=>{
        if(Number(GlobalNivelUsuario)==0){return;}
        //btnMenu.style = "visibility:visible";   
        funciones.loadScript('../views/menu/menu.js','root')
        .then(async()=>{
            initView();
        })
    },
    inicio:()=>{
      
        switch (Number(GlobalNivelUsuario)) {
            case 1:
                Navegar.inicio_gerencia();
                break;
            case 2:
                Navegar.inicio_despacho();
                break;
            case 3:
                Navegar.inicio_ventas();
                break;
            case 4:
                Navegar.inicio_soporte();
                break;
            case 5:
                Navegar.inicio_administrador();
                break;
        }
            
    },
    inicio_gerencia:()=>{
        if(Number(GlobalNivelUsuario)==0){return;}
        funciones.loadScript('../views/inicio_gerencia.js','root')
        .then(async()=>{
            initView();
        })
    },
    inicio_administrador:()=>{
        if(Number(GlobalNivelUsuario)==0){return;}
        funciones.loadScript('../views/inicio_administrador.js','root')
        .then(async()=>{
            initView();
        })
    },
    inicio_ventas:()=>{
        if(Number(GlobalNivelUsuario)==0){return;}
        funciones.loadScript('../views/inicio_ventas.js','root')
        .then(async()=>{
            initView();
        })
    },
    inicio_despacho:()=>{
        if(Number(GlobalNivelUsuario)==0){return;}
        funciones.loadScript('../views/inicio_despacho.js','root')
        .then(async()=>{
            initView();
        })
    },
    inicio_soporte:()=>{
        if(Number(GlobalNivelUsuario)==0){return;}
        funciones.loadScript('../views/orden_soporte/orden_soporte.js','root')
        .then(async()=>{
            initView();
        })
    },
    tasks:()=>{
        funciones.loadScript('../views/tasks/tasks.js','root')
        .then(async()=>{
            initView();
        })
    },
    mantenimientos_empleados:()=>{
        if(Number(GlobalNivelUsuario)==0){return;}
        funciones.loadScript('../views/empleados/view_empleados.js','root')
        .then(async()=>{
            //lbForm.innerText = "Empleados";
            initView();
        })
    },
 
}