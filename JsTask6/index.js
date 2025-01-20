
function buildTable(tBody){
    let tbBody = tBody.children[1];
    let tbHeader = tBody.children[0];
    return {
        buildBody : function(datas){
            let newTr = document.createElement('tr');

                datas.forEach(el => {
                    let newTd = document.createElement('td');
                    newTd.innerHTML = el;
                    newTr.appendChild(newTd); 
                })
        
                tbBody.appendChild(newTr);
        },
        buildHeader : function(headers){
            let newHd = document.createElement('tr');

            headers.forEach(el => {
                let newTh = document.createElement('th');
                newTh.innerText = el[0].toUpperCase() + el.slice(1);
                newHd.appendChild(newTh); 
            });
            tbHeader.appendChild(newHd);
        }
    }

}

//task 1
const data1 = [
    { id: 1, name: "John", age: 28, department: "HR" }, 
    { id: 2, name: "Jane", age: 34, department: "Finance" }, 
    { id: 3, name: "Mike", age: 25, department: "IT" }, 
    { id: 4, name: "Emma", age: 30, department: "Marketing" },
    { id: 5, name: "Chris", age: 40, department: "Operations" }, 
    { id: 6, name: "Sophia", age: 29, department: "HR" },
    { id: 7, name: "Daniel", age: 32, department: "Finance" }, 
    { id: 8, name: "Olivia", age: 27, department: "IT" }, 
    { id: 9, name: "Liam", age: 35, department: "Sales" }, 
    { id: 10, name: "Noah", age: 26, department: "Logistics" },

];

let table1 = document.getElementById("task1Table");

let task1Table = buildTable(table1);
task1Table.buildHeader(Object.keys(data1[0]));

data1.forEach((el) =>{
    task1Table.buildBody(Object.values(el));
})


//task2

let data2 = [{ id: 1, name: "John", tasks: [ { taskId: 101, description: "Complete report", status: "Pending" }, { taskId: 102, description: "Review code", status: "Completed" }, ], }, 
{ id: 2, name: "Jane", tasks: [ { taskId: 103, description: "Prepare slides", status: "In Progress" }, { taskId: 104, description: "Team meeting", status: "Pending" }, ], }, 
]

let table2 = document.getElementById("task2Table");

let task2Table = buildTable(table2);
task2Table.buildHeader(["Name","description","status"]);

data2.forEach(elp => {
    elp.tasks.forEach(elc => {
        task2Table.buildBody([elp.name,elc.description,elc.status]);
    })
})
