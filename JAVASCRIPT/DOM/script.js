// let answers=document.getElementsByClassName('child');
// console.log(answers);
// document.getElementById("link3").classList.add("dark-color");
// let ans=document.getElementById('link2');
// ans.innerHTML='click here';
 document.getElementById("my-img").src="https://via.placeholder.com/100";
// ************************************
// added elements At runtime
const container=document.getElementsByClassName("container");//finds the class
for(let i=0;i<4;i++)
{
    const linkElement=document.createElement("a");// create a new link tag
    linkElement.classList.add("child");// add the class child to linkElement
    container[0].append(linkElement);
}