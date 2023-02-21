// const promise=fetch("https://dummyjson.com/products/1").then((response)=>
// {

// }).catch((err)=>
// {

// })can be done like this as well:: but not recommended
async function fetchData()
{
    try{
        const response= await fetch("https://dummyjson.com/products/1");
        console.log(response);
        const jsonData= await response.json();
        loadData(jsonData);
        console.log(jsonData);
    }
    catch(err)
    {
        console.log(err);
    }
}
function loadData(jsonData)
{
    document.getElementById("phone-name").innerHTML=jsonData.title;
    document.getElementById("desc").innerHTML=jsonData.description;
    document.getElementById("phone-img").src=jsonData.thumbnail;
}
fetchData();