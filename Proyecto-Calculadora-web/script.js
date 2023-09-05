
                // let num1 = parseFloat(document.getElementById("num1").value);
                // let num2 = parseFloat(document.getElementById("num2").value);
                // let resultadosss = parseFloat(document.getElementById("resultNumrs").value); 

                function sumarNumrs(){
                    let num1 = parseFloat(document.getElementById("num1").value);
                    let num2 = parseFloat(document.getElementById("num2").value);
                    let resultado = num1 + num2;
                    mostrarResultado(resultado);
                }
    
                function restaNumrs(){
                    let num1 = parseFloat(document.getElementById("num1").value);
                    let num2 = parseFloat(document.getElementById("num2").value);
                    let resultado = num1 - num2;
                    mostrarResultado(resultado);
                }
    
                function multiNumrs(){
                    let num1 = parseFloat(document.getElementById("num1").value);
                    let num2 = parseFloat(document.getElementById("num2").value);
                    let resultado = num1 * num2;
                    mostrarResultado(resultado);
                }
    
                function divirNumrs(){
                    let num1 = parseFloat(document.getElementById("num1").value);
                    let num2 = parseFloat(document.getElementById("num2").value);
                    let resultado = num1 / num2;
                    mostrarResultado(resultado);
                }
    
    
                function potenciaNumrs(){
                    let num1 = parseFloat(document.getElementById("num1").value);
                    let num2 = parseFloat(document.getElementById("num2").value);
                    let resultado = Math.pow(num1 , num2)
                    mostrarResultado(resultado);
                }
    
                function raizNumrs(){
                    let num1 = parseFloat(document.getElementById("num1").value);
                    let num2 = parseFloat(document.getElementById("num2").value);
                    let resultado = Math.sqrt( num2)
                    mostrarResultado(resultado);
                }
    
                function absolutoNumrs(){
                    let num1 = parseFloat(document.getElementById("num1").value);
                    let num2 = parseFloat(document.getElementById("num2").value);
                    let resultado = Math.abs( num2)
                    mostrarResultado(resultado);
                }
    
                function randomNumrs(){
                    let num1 = parseFloat(document.getElementById("num1").value);
                    let num2 = parseFloat(document.getElementById("num2").value);
                    let resultado = Math.random()*( num2-num1)+num1;
                    mostrarResultado(resultado);
                }
    
    
    
                function mostrarResultado(resultado){
                    document.getElementById("resultNumrs").value = resultado ;               
                }
    
                function roundNumrs(){
    
                    let resultado = parseFloat(document.getElementById("resultNumrs").value);
                    // let redondear = Math.round(resultado);
                    // document.getElementById("resultNumrs").value=redondear
                    mostrarResultado(Math.round(resultado));
                }
    
                function floorNumrs(){
                let resultado = parseFloat(document.getElementById("resultNumrs").value);
                let piso = Math.floor(resultado);
                document.getElementById("resultNumrs").value = piso
                }
    
                function ceilNumrs(){
                let resultado = parseFloat(document.getElementById("resultNumrs").value);
                let arriba = Math.ceil(resultado);
                document.getElementById("resultNumrs").value = arriba
                }
    