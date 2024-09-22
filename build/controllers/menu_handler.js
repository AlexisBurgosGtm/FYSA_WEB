let Menu = {
    verify:()=>{
        if(Number(GlobalNivelUsuario)==0){return false;}
        return true;
    },
    inicio_admin:()=>{         
        if(Menu.verify()==true){
            funciones.loadScript('../views/menu/menu.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            funciones.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    inicio_compras:()=>{
        if(Menu.verify()==true){
            funciones.loadScript('../views/menu/inicio_compras.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            funciones.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    productos:()=>{
        
        if(Menu.verify()==true){
            funciones.loadScript('../views/compras_productos/view_productos.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            funciones.AvisoError('No tiene permitido entrar a esta sección');
        }
        
    },
    pos:()=>{
        if(Menu.verify()==true){
            funciones.loadScript('../views/ventas_pos/view_pos.js','root')
            .then(async()=>{ 
                initView();
            })
        }else{
            funciones.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    compras:()=>{
        if(Menu.verify()==true){
            funciones.loadScript('../views/compras/view_compras.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            funciones.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    compras_gestion_precios:()=>{
        if(Menu.verify()==true){
            funciones.loadScript('../views/compras_gestion_precios/view_compras_precios.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            funciones.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    compras_gestion_bonos:()=>{
        if(Menu.verify()==true){
            funciones.loadScript('../views/compras_gestion_bonos/view_compras_bonos.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            funciones.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    compras_gestion_minmax:()=>{
        if(Menu.verify()==true){
            funciones.loadScript('../views/compras_gestion_minmax/view_compras_minmax.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            funciones.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    documentos:()=>{
        if(Menu.verify()==true){
            funciones.loadScript('../views/archivo_documentos/view_documentos.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            funciones.AvisoError('No tiene permitido entrar a esta sección');
        }
    },
    mantenimiento_generales:()=>{
        if(Menu.verify()==true){
            funciones.loadScript('../views/mant_clasificaciones_generales/view_mant_generales.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            funciones.AvisoError('No tiene permitido entrar a esta sección');
        }
    },

}