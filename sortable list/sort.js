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
    [...rechestPeople].forEach(person, index)
}