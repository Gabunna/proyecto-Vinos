const {createApp} = Vue;

const productoRecomendados = createApp ({
    data(){
        return{
            listaRecomendados : listaDeArticulosJSON.filter(art => art.recomendado)
    
        }
    }
})

productoRecomendados.mount("#app")