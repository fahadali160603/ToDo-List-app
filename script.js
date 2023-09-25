let inputs = document.getElementById("inp");  
let text = document.querySelector(".text");

function add(){
    if(inputs.value == ""){
        alert("Please Enter Task first")
    }
    else{
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash-can"></i>`;
        text.appendChild(newEle);
        inputs.value = ""
        newEle.querySelector("i").addEventListener("click", remove);
        function remove(){
            newEle.remove();
        }
    }
}