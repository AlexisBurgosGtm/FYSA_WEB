let Menu = {
    verify:()=>{
        if(Number(GlobalNivelUsuario)==0){return false;}
        return true;
    },
    productos:()=>{
        if(Menu.verify()==true){
            funciones.loadScript('../views/productos/view_productos.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            funciones.AvisoError('No tiene permitido entrar a esta sección');
        }
        
    },
    pos:()=>{
        if(Menu.verify()==true){
            funciones.loadScript('../views/pos/view_pos.js','root')
            .then(async()=>{
                initView();
            })
        }else{
            funciones.AvisoError('No tiene permitido entrar a esta sección');
        }
    }

}