var healthProgram = ["Ice Therapy","Heat Therapy","Pediatric Physiotherapy"];

let healthEl = document.getElementById("Exercise");
console.log(healthEl);
let dropListEl = document.querySelector("#dropList");
console.log(dropListEl);
dropListEl.style.top = "100%";

dropListEl.classList.add("drop");
dropListEl.style.top = 0;

function list(arr){
    arr.forEach(element => {
        dropListEl.append(element);
        console.log(dropListEl);
    });

}
healthEl.addEventListener("click",function(event){
    console.log("inside event");
    console.log(event);
    healthEl.classList.remove("active");
    event.target.classList.add("active");
    
    if(dropListEl.style.top == 0 && event.target.contains("active")){
        console.log("if");
        list(healthProgram);
        dropListEl.style.top="100%";
    }
    else{
        dropListEl.style.top=0;
    }
     
})