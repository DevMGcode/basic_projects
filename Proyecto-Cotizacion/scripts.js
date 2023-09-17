function cargarContenido(){

    // funccion que cargue las cotizaciones
    cargarCotizaciones(mostrarCotizacion);

    // funcion que cargue los elementos
    cargarElementos();

    // funcion que cargue los textos
    cargarTextos();
}

async function cargarCotizaciones(callback){

    await delay(2500);
    //---------------Primera cotizacion---------------------------------------
    let promesa1= await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    callback(await promesa1.json());
    //--------------Segunda cotizacion----------------------------------------
    let promesa2= await fetch('https://open.er-api.com/v6/latest/USD');
    let datos2 = await promesa2.json();
    document.getElementById('UsdEur').append(datos2.rates.EUR);
    //--------------Tercera cotizacion----------------------------------------
    let datos3 = await crearPedido('https://open.er-api.com/v6/latest/ARS');
    document.getElementById('UsdArs').append(datos3.rates.USD);
    document.getElementById('ImgEspera').style.visibility = 'hidden';
    //---------------------------------------------------------------
}
    //pasa los datos del callback de la primera cotizacion a esta funcion
    function mostrarCotizacion(datos){
        document.getElementById('BitcoinUsd').append(datos.bpi.USD.rate);
    }

    //pasa la url de la tercera cotizacion a esta funcion
   async function crearPedido(url){
    return new Promise( (resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.onload = ()=>{
            if(xhr.status===200){
                resolve(JSON.parse(xhr.responseText));
            }else{
                reject(xhr.statusText);
            }
        }
        xhr.send();
    })
   }

   function cargarElementos(){
        document.getElementById('imgLogo').setAttribute('src','logo.png');
        document.getElementById('titulo').textContent= "Cotizaciones Online";
        document.getElementById('ImgEspera').setAttribute('src','loading.gif');
        document.getElementById('ImgEspera').style.visibility = 'visible';

   }

function cargarTextos(){
    document.getElementById('UsdEur').append("EUR a USD: ");
    document.getElementById('UsdArs').append("ARG a USD: ");
    document.getElementById('BitcoinUsd').append("Bitcoin a USD: ");
}

function delay(ms){
    return new Promise ((res)=>{
        setTimeout(res,ms);
    })
}