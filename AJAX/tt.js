var start=0;
var end=5;
var ourRequest=new XMLHttpRequest();
var btn = document.getElementById("btn");
var ourList=document.getElementById("ourList");

btn.addEventListener("click" , function(){
ourRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
ourRequest.onload=function() {
  var ourData=JSON.parse(ourRequest.responseText);
 showMe(ourData);
};
ourRequest.send();
});

function showMe(data)
{
    var Element="";
    for(var i=start;i<end;i++)
    {
        Element+=`<p> my  username is ${data[i].username}</p>`;
    };
    
    
    ourList.insertAdjacentHTML("beforeend",Element );
    start +=5;
    end +=5;
    
    if(end ==15)
    {
    btn.classList.add("hidebtn");
}   

}