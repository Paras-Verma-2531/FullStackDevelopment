const posButton=document.getElementById("right-btn");
const negButton=document.getElementById("left-btn");
const output=document.getElementById("output");
document.getElementById("button").addEventListener('click',()=>{
    document.getElementById("output").value=0;
})
negButton.addEventListener('click',()=>{
    if(output.value!=0)
    {
    output.value=output.value-1;
    }
})
posButton.addEventListener('click',()=>{
    output.value=1*output.value+1;
})