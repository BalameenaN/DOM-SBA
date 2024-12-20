//Form validation
const form = document.querySelector(".form1");
//console.log(form);
const userName = form.elements["username"];
//console.log(userName);
form.addEventListener("submit", validate);
function validate(event) {
    const nameVal = validateName();
    console.log("inside namevalidation");
    if (nameVal === false) {
        event.preventDefault();
        return false;
    }


}

function validateName() {
    console.log("inside validatename");
    if (userName.value === '') {
        alert("Name field cannot be empty");
        userName.focus();
        return false;
    }
    else if (userName.value !== '' && userName.value.length > 4) {
        alert("Please provide name with 4 character");
        userName.focus();
        return false;
    }

}



/*var healthProgram = ["Ice Therapy","Heat Therapy","Pediatric Physiotherapy"];

let healthEl = document.getElementById("Exercise");
console.log(healthEl);
let dropListEl = document.querySelector("#dropList");
console.log(dropListEl);
dropListEl.style.top = "100%";

dropListEl.classList.add("drop");
dropListEl.style.top = 0;

function list(arr){
    dropListEl.innerHTML = "";
    arr.forEach(element => {
        dropListEl.append(element);
        console.log(dropListEl);
    });

}
healthEl.addEventListener("click",function(event){
    console.log("inside event");
    console.log(event);
    //healthEl.classList.remove("active");
   // event.target.classList.add("active");
   list(healthProgram);
    if(dropListEl.style.top == 0){
        console.log("if");
        
        dropListEl.style.top="100%";
    }
    else{
        dropListEl.style.top=0;
    }
     
})*/

let navEl = document.querySelector("nav");
console.log(navEl);
let imgEl = navEl.firstElementChild;
console.log(imgEl);

imgEl.style.width = "100px";
let li = document.querySelector(".list");
console.log(li);
let subEl = document.getElementById("sub");
console.log(subEl);
let wrapEl = document.querySelector(".sub-menu-wrap");
console.log(wrapEl);

li.addEventListener("click", function (event) {
    event.preventDefault();
    subEl.classList.toggle("openMenu");
    if (subEl.classList.contains("openMenu")) {
        
        wrapEl.style.overflow = 'visible';
    }
    else {
        wrapEl.style.overflow = 'hidden';
    }
})