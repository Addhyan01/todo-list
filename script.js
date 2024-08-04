const inputdata = document.getElementById("input-box");
const list = document.getElementById("list-container");

function addTask(){
    if(inputdata.value == ''){
        alert("Insert data first");
    }
    else{

        var lii = document.createElement("li");
        lii.innerHTML = inputdata.value;
        list.appendChild(lii)

        var span = document.createElement("span");
        span.innerHTML = "\u00d7";
        lii.appendChild(span)
        
    }
    inputdata.value = '';
}