// const employees = [
//     {
//         name: "Megha",
//         role: "Web Developer",
//         salary: "20k",
//         phone_number: "8168865798",
//         email: "meghacute786@gmail.com",
//         company_name: "sisfy lmd sol"
//     },
//     {
//         name: "Rehan",
//         role: "Software Developer",
//         salary: "10k",
//         phone_number: "9813135610",
//         email: "rehan165@gmail.com",
//         company_name: "cal info tech sol"
//     }
// ]
const tbody = document.getElementById("tbody");
let employeeID = 1000;
function addEmployee(employeeObj){
    // it takes an employee onject as a parameter and adds a new employee into the table
    // <tr>
    //     <td>1</td>
    //     <td>Megha</td>
    //     <td>Web Developer</td>
    //     <td>20000</td>
    //     <td>8168865798</td>
    //     <td>meghacute786@gmail.com</td>
    //     <td>sisfy lmd sol</td>
    // </tr>
    let tr = document.createElement("tr");
    let employeeIDtd = document.createElement("td");
    employeeIDtd.innerText = employeeID++;
    tr.appendChild(employeeIDtd);
    
    for(let keys in employeeObj){
        let td = document.createElement("td");
        td.innerText = employeeObj[keys];
        tr.appendChild(td);
    }
    // <td>
    //     <button>Delete</button>
    //     <button>Edit</button>
    // </td>
    let actiontd = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    // let editButton = document.createElement("button");
    // editButton.innerText = "Edit";
    // actiontd.append(deleteButton, editButton);
    actiontd.appendChild(deleteButton)
    tr.appendChild(actiontd);

    tbody.appendChild(tr);
    deleteButton.addEventListener("click", deleteRecord);

}
// employees.forEach((empobj)=>{
//     addEmployee(empobj)
// })
let popup = document.querySelector(".popup")
function togglePopup(){
    if(popup.style.display == "none"){
        popup.style.display = "flex";
    }
    else{
        popup.style.display = "none";
    }
}
let form = document.getElementById("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let employeeObj = {
        name: form.name.value,
        role: form.role.value,
        salary: form.salary.value,
        phone_number: form.phoneNumber.value,
        email: form.email.value,
        company_name: form.companyName.value
    }
    addEmployee(employeeObj);
    form.reset();
    togglePopup();
})
function deleteRecord(e){
    // e.target will be the delete button on which user clicks
    // e.target.parentNode will be pointing to the td and e.target.parentNode.parentNode will be pointing to the tr
    let tr = e.target.parentNode.parentNode;
    tr.remove();
}