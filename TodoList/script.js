let manageData = dataModul();
let renderUI = manageUI();

function dataModul(){
    let data = [{taskTitle : "UI Task",taskDec: "Create a ui for app",dueDate: "2025-02-06T10:56",statedDate : '2025-01-28T21:38',completed : "",status : "Pending",points : 0,bonus: 0,isEdit : false},{taskTitle : "Back end",taskDec: "Add Load",dueDate: "2025-01-28T14:58",statedDate : "",completed : "",status : "Todo",points : 0,bonus: 0,isEdit : false}];
    let curId = data.length - 1;
    
    return {
        createTask(record){
            data.push(record);
            console.log(record);

        },getAllRecord(){
            return data;
        },
        getRecord(ind){
            return data[ind];
        },
        getCounts(){
            let counts = {
                todo : 0,
                completed : 0,
                pending : 0,
                points : 0,
            }
            data.forEach((item) =>{
                if(item.status === "Todo"){
                    counts.todo += 1;
                }else if(item.status === "Completed"){
                    counts.completed += 1;
                }else if(item.status === "Pending"){
                    counts.pending += 1;
                }

                counts.points += item.points + item.bonus;
            })
            return counts;
        },
        updateRecord(ind,title,dec,date){
            let ref = data[ind];
            ref["taskTitle"] = title;
            ref["taskDec"] = dec;

            if(ref["status"] === "Pending"){
                let startdt = new Date(ref["dueDate"]);
                let enddt = new Date(date);
                if(enddt > startdt){
                    ref["isEdit"] = true;
                }
            }
            ref["dueDate"] = date;

        },
        deleteRecord(ind){
            data.splice(parseInt(ind),1);
        },
        getFilterdData(key1){
            let res = data.filter(item => {
                return item.status === key1 
            })
            return res;
        },
        updateStart(ind,date){
            let rec = data[ind];
            rec["statedDate"] = date;
            rec["status"] = "Pending";

            let startdt = new Date(rec["dueDate"]);
            let enddt = new Date(date);

            if(startdt >= enddt){
                isEdit = true
            }
            console.log(data);
        },
        updateCompleted(ind,date){
            let rec = data[ind];
            rec["completed"] = date;
            rec["status"] = "Completed";

            let startdt = new Date(rec["dueDate"]);
            let enddt = new Date(date);

            if(startdt >= enddt && !rec["isEdit"]){
                rec["points"] = 10;
                rec["bonus"] = 5;
            }else{
                rec["points"] = 10;
            }
        }
    }
}

function manageUI(){
    let list = document.getElementById("card-list");
    let counttodo = document.getElementById('todoTask');
    let countCom = document.getElementById("completedTask");
    let pending = document.getElementById("pendingTask");
    let totalPoints = document.getElementById("points");

    let intervals = [];
    return{
        renderList(data){
            this.clearAllIntervals();
            list.innerHTML = "";
            data.forEach((item,index) => {
                let temp = document.createElement('div');

                temp.innerHTML = `<div class="card ex-card" id='ls-card'>
                                <div class="card-body">
                                    <div class="row">
                                        
                                        <div class="col-sm-12">
                                            <div class="list-card-body">
                                            
                                                <div class="list-card-details">
                                                
                                                    <h4>${item.taskTitle}</h4>
                                                    <span>${item.taskDec}</span><br>
                                                    <span>Due Date: <span>${item.dueDate}</span></span><br>
                                                    <span>Status: <span>${item.status}</span></span>
                                                </div>
                                                <div class="list-card-action">
                                                    <div class="hide">
                                                        <span>Stard Date</span>
                                                        <button class="btn btn-success" name="completed" id=${index} >Completed</button>
                                                    </div>
                                                    <div class="">
                                                    ${ item.status === "Todo" ?
                                                        `<button class="btn btn-success" name="start" id=${index}>Start</button>` : item.status === "Completed" ? `<span>Completed at : ${item.completed}</span> <span>Points : +${item.points} Bonus : +${item.bonus}</span>` : `<div class="timerSection"><button class="btn btn-success" name="completed" id=${index}>Mark as Completed</button><span id="time-${index}">1 hous left</span></div>`
                                                    }
                                                        
                                                    </div>
                                                    
                                                    <div class="action-section">
                                                        <a href="#" class="card-ac-icon card-edit" id="edit" name=${index}><i class="fa-solid fa-pen-to-square"></i></a>
                                                        <a href="#" class="card-ac-icon card-delete" id="delete" name=${index}><i class="fa-solid fa-trash"></i></a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                      </div>
                                </div>
                            </div>`

                            list.appendChild(temp);

                            if(item.status === "Pending"){
                                this.setTimer(item.dueDate,index);
                            }
            });
             
        },
        setTimer(startDate,indes){

                startDate = new Date(startDate);
                console.log(startDate);
                function updateCountdown() {
                    let el = document.getElementById(`time-${indes}`);
                    
                    if(el != null){
                    const now = new Date().getTime();
                    const timeLeft = startDate - now;

                        console.log(indes,timeLeft);

                    if (timeLeft <= 0) {
                        document.getElementById(`time-${indes}`).innerHTML = "Time is up!";
                        clearInterval(timerRepeat);
                        return;
                    }
    
                    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
                    document.getElementById(`time-${indes}`).innerHTML = 
                        `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds left`;
                }
            }
            
            let timerRepeat = setInterval(updateCountdown,1000);

            updateCountdown();
            intervals.push(timerRepeat);

        },
        clearAllIntervals(){
            intervals.forEach((item) =>{
                clearInterval(item);
            })
        },
        resetCount(){
            let data = manageData.getCounts();
            
            counttodo.innerText = data.todo;
            countCom.innerText = data.completed;
            pending.innerText = data.pending;
            totalPoints.innerText = data.points;
        }
    }
}

renderUI.resetCount();

let form = document.getElementById("create-form");
let title = document.getElementById("title");
let dec = document.getElementById("des");
let date = document.getElementById("date");

let fmcreate = document.getElementById('btn-create');
let fmupdate = document.getElementById('btn-update');

renderUI.renderList(manageData.getAllRecord());

let carList = document.getElementById('card-list');
let clickCard;

form.addEventListener('submit',function(e){
    e.preventDefault();


    let triggerBtn = e.submitter;
    console.log(date.value);

    let data = {
        taskTitle : title.value,
        taskDec : dec.value,
        dueDate : date.value,
        statedDate : "",
        completed : "",
        status : "Todo",
        points : 0,
        bonus: 0,
        isEdit : false
    }
    if(triggerBtn.id === 'create'){
        manageData.createTask(data);
        renderUI.renderList(manageData.getAllRecord());
    }else if(triggerBtn.id === 'Update'){
        // manageData.updateRecord
        manageData.updateRecord(parseInt(clickCard),title.value,dec.value,date.value);
        renderUI.renderList(manageData.getAllRecord());
        fmcreate.classList.remove('hide');
        fmupdate.classList.add('hide');
    }
    

    title.value = "";
    dec.value = "";
    date.value = "";
    renderUI.resetCount();

});



carList.addEventListener('click',function(e){
    
    console.log(e.target);

    if(e.target.tagName === 'I'){
        let clicked = e.target.closest('a');

    if(clicked && clicked.id === 'edit'){
        clickCard = clicked.name;
        
        console.log(clickCard);

        let clickData = manageData.getRecord(clickCard);

        title.value = clickData.taskTitle;
        dec.value = clickData.taskDec;
        date.value = clickData.dueDate;
        // let dt = new Date(clickData.dueDate);

        // datee.value = clickData.date;
        
        // console.log(clickData.date);

        // fmcreate.classList.add('hide');
        // fmupdate.classList.remove('hide');
        fmcreate.classList.add('hide');
        fmupdate.classList.remove('hide');

    }else if(clicked && clicked.id === "delete"){
        clickCard = clicked.name;
        manageData.deleteRecord(clickCard);
        renderUI.renderList(manageData.getAllRecord());

    }
        console.log(clicked.closest('a'));
    }else if(e.target.name === 'start'){
        let curDate = new Date();

        let year = curDate.getFullYear();
        let month = String(curDate.getMonth() + 1).padStart(2, '0'); 
        let day = String(curDate.getDate()).padStart(2, '0');
        let hours = String(curDate.getHours()).padStart(2, '0');
        let minutes = String(curDate.getMinutes()).padStart(2, '0');

        
        let fDate = `${year}-${month}-${day}T${hours}:${minutes}`;

        manageData.updateStart(parseInt(e.target.id,fDate),fDate);
        renderUI.renderList(manageData.getAllRecord());
        console.log(fDate);
    }else if(e.target.name === 'completed'){
        console.log("task ended");
        let curDate = new Date();

        let year = curDate.getFullYear();
        let month = String(curDate.getMonth() + 1).padStart(2, '0'); 
        let day = String(curDate.getDate()).padStart(2, '0');
        let hours = String(curDate.getHours()).padStart(2, '0');
        let minutes = String(curDate.getMinutes()).padStart(2, '0');

        
        let fDate = `${year}-${month}-${day}T${hours}:${minutes}`;
        manageData.updateCompleted(parseInt(e.target.id,fDate),fDate);
        renderUI.renderList(manageData.getAllRecord());
    }
    renderUI.resetCount();
});


let ftstatus = document.getElementById('ft-status')

ftstatus.addEventListener('change', function(e){
    if(e.target.value != 'All'){
        renderUI.renderList(manageData.getFilterdData(e.target.value));
    }else{
        renderUI.renderList(manageData.getAllRecord());
    }
})
 
function resetCount(){

}