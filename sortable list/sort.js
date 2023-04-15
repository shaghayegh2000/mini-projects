let draggableList = document.getElementById("draggable-list");
let check = document.getElementById("check");

let rechestPeople = [
    "Jeff Bezos",
    "Bill Gates",
    "Warren Buffet",
    "Bernard Arnault",
    "Carles Slim Helu",
    "Amancio Ortega",
    "Larry Ellison",
    "MArk Zackerberg",
    "Michael Bloomberg ",
    "Larry Page"
];

let ListItems =[];
let gragStartIndex;
createList();
function createList(){
    [...rechestPeople].forEach((person , index) => {
        let listItem = document.createElement("li");
        listItem.setAttribute("data-index" , index);
        listItem.innerHTML = document.write("")
        ListItems.push(listItem);
        draggableList.appendChild(listItem);
    })
}

{/* <sectoin>
<span class="number"> ${index + 1} </span>
<div class="draggable" draggable="true">
<p class="person-name">${person}</p>
<i class="fa fa-grip-lines"></i>
</div>
</sectoin> */}