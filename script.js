const inputTask=document.getElementById("input-task");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputTask.value===''){
        alert("you must write something");
       
      
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputTask.value;
        listContainer.appendChild(li);
        
        let img=document.createElement("img")
        img.src="/Images/trash.png";
        li.appendChild(img);
        saveData();
     }
    inputTask.value='';
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="IMG"){
        e.target.parentElement.remove()
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem('Data',listContainer.innerHTML);
}
function displayTask(){
    listContainer.innerHTML=localStorage.getItem('Data');
}
displayTask();
  