const input=document.getElementById('input');
const Task=document.getElementById('tasks');
function Addtask(){
    if(input.value===''){
        alert("you must write something!");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=input.value;
        Task.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value='';
    saveData();

    
}
Task.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
        }
        else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
},false)
function saveData(){
    localStorage.setItem("data",Task.innerHTML);

}
function showTask(){
    Task.innerHTML=localStorage.getItem("data");
}
showTask()