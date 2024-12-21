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

//appointment
let app = document.getElementById("doc-btn");
let divEl = document.getElementById("right");
app.addEventListener("click", function (e) {
    divEl.innerHTML = '';
    divEl.innerHTML = "<h1>Your appointment is booked!!</h1>"
    divEl.style.color = "red";
})


//HealthProgram drop-down menu
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
//document Fragmentation
const fragment = document.createDocumentFragment();

const uEl = document.getElementById("lastEl");
for (let i = 0; i <= 2; i++) {
    let l = document.createElement("li");
    fragment.appendChild(l);
}
console.log(fragment);
uEl.appendChild(fragment);
let firstEl = uEl.firstElementChild;
firstEl.textContent = "Clinic is closed on saturday and sunday";
firstEl.nextSibling.textContent = "Patients with appointment only can visit the general care, contact 911 incase of emergency";
uEl.lastElementChild.textContent = "Visitors must arrive 15 minutes prior to the scheduled appointment time";
console.log(uEl);
