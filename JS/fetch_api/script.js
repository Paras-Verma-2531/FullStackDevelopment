// async function to fetch data from API:
async function getData() {
    try {
        // fetch the api
        const response = await fetch("https://dummyjson.com/products/1");
        // convert api data to json
        const jsonData = await response.json();
        // console.log(jsonData);
        setData(jsonData);// call for setData:
    } catch (error)
     {
      console.log(error);
    }
}
function setData(jsonData)
{
    //set the title with API title
    document.getElementById("title").innerHTML=jsonData.title;
    // set the description
    document.getElementById("description").innerText=jsonData.description;
    // set the thumbnail
    document.getElementById("image").src=jsonData.thumbnail;
}
getData();
