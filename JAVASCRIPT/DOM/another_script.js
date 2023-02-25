// const body=document.body;
// const Listchildren=body.children[1].children;
// const list=document.getElementById("list");
// console.log(Listchildren);
// console.log(list.parentElement);
// const Submit=document.getElementById("submitEvent");
// Submit.addEventListener("click",((event)=>
// {
//     event.defaultPrevented();
//     console.log(document.getElementById("input-name").innerText);
// }))
const counter_value=document.getElementById("counter-value");
const pos_value=document.getElementById("pos-button");
const neg_value=document.getElementById("neg-button");
let count=0;
pos_value.addEventListener("click",()=>
{
    count++;
    updateCount();
})
neg_value.addEventListener("click",()=>
{
    count--;
    updateCount();
})
function updateCount()
{
 counter_value.innerHTML=count;
}