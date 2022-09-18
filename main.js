let vec=[]

 function numeroAletoreo(){
    const hasta=100;
    for(let i=0; i<hasta; i++){
       vec.push(Math.floor(Math.random()*(1 + hasta)-0))
    }
    console.log(vec[50])
}
numeroAletoreo()
   

let numeroIngresado = document.getElementById("numeroin");
let boton = document.getElementById('adivina');
let cont =0;
  boton.addEventListener('click', () => {
   cont++
    if(cont===5){
        alert("Haz perdido, vuelve a intentarlo")
    }
    if(numeroIngresado.value == vec[50] ){
        console.log("ganaste")
        alert("ganaste")
        
    }else{
        console.log("perdiste"+ "van"+ cont++ +"intentos")
        alert("perdiste")

        if(numeroIngresado.value < vec[50]){
            alert("pista :) Es un numero mayor que " + numeroIngresado.value)
        }else{
            alert("pista :) el numero es menor que" +numeroIngresado.value)
       }
    }

    });