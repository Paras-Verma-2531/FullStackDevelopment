// const getValue=()=>{
//     const celcius=document.getElementById('Celcius').value;
//    document.getElementById('Fehrenhiet').value=celcius;
//    console.log(celcius);
// }

const clearValue=()=>{
    document.getElementById('Celcius').value="";
    document.getElementById('Fehrenhiet').value="";
    document.getElementById('Kelvin').value="";
}
// document.getElementById('Celcius').addEventListener('onchange',setValue);
const setValue=()=>{
    document.getElementById('Fehrenhiet').value=2*document.getElementById('Celcius').value;
}