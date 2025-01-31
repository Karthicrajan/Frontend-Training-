function buildTable(tBody){
    let tbBody = tBody.children[1];
    let tbHeader = tBody.children[0];
    return {
        buildBody : function(datas,recId){
            let newTr = document.createElement('tr');

                datas.forEach(el => {
                    let newTd = document.createElement('td');
                    newTd.innerHTML = el;
                    newTr.appendChild(newTd); 
                })

                let actions = document.createElement('td');
                let editBtn = document.createElement('button');

                editBtn.innerText = 'Edit';
                editBtn.setAttribute('id',recId);
                editBtn.setAttribute('name','edit');
                editBtn.classList.add('btn','btn-primary','btnst');

                let DeleteBtn = document.createElement('button');

                DeleteBtn.innerText = 'Delete';
                DeleteBtn.setAttribute('id',recId);
                DeleteBtn.setAttribute('name','delete');

                DeleteBtn.classList.add('btn','btn-danger','btnst');
                actions.appendChild(editBtn);
                actions.appendChild(DeleteBtn);
                newTr.appendChild(actions);
        
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
        },
        clearBody : function(){
            tbBody.innerHTML = '';
        }
    }

}
let manageDate = dataModel();
let manageUI = createUI();


function dataModel(){
    let events = [{eventName : "Marrage",date : '2025-01-21',status: "Past"},{eventName : "Wedding",date : '2025-01-27',status: "Upcoming"}];

    return {
        createEvent(name,date){

            data = {
                eventName : name,
                date: date,
                status : this.checkEventDate(date) ? "Upcoming" : "Past"
            }
            events.push(data);
            console.log(events);
        },
        checkEventDate(date){
            let eDate = new Date(date);
            let now = new Date();
            let dt1 = Date.UTC(eDate.getFullYear(), eDate.getMonth(), eDate.getDate());
            let dt2 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());

            if(dt1 >= dt2){
                console.log("Upcoming Event");
                return true;
            }else{
                console.log("Past Event");
                return false;
            }
            
        },
        UpdateDates(){
            let date = events.map((item) => {
                // return { item.date : this.checkEventDate(item.date),...item};
                // let [name, date] = [...item];
                item[status] = this.checkEventDate(item.date) ? "Upcoming" : "Past";
                // console.log(name);
                return item;
            })
            return date;
        },
        getAllEvents(){
            return events;
        },
        getSingleEvent(id){
            return events[id];
        },
        updateEvent(id,name,date){
            let newRec = {
                eventName: name,
                date : date,
                status : this.checkEventDate(date) ? "Upcoming" : "Past",
            }
            events[id] = newRec;
            console.log(events);
        },
        deleteRecord : function(index){
            events.splice(index,1);
            manageUI.loadTable(this.getAllEvents());

        },
        filterEvent(key){
            return events.filter((item) =>{
                return item.status === key;
            })
        }
    }
    
}


let form = document.getElementById('create-form');
let eventName = document.getElementById('eventName');
let date = document.getElementById('date');


let table = document.getElementById('table');

let tb = buildTable(table);
tb.buildHeader(['Event Name','Date','Status','Action']);
let allevents = manageDate.getAllEvents();
manageUI.loadTable(allevents);



let updateSection = document.getElementById('update-con');
let createSection = document.getElementById('create-con');


function createUI(){
    let table = document.getElementById('table');

    return {
        
        loadTable(data){
            tb.clearBody();

            data.forEach((item,index) =>{
                tb.buildBody(Object.values(item),index);
            })

        }
    }
}



let updateBtn = document.getElementById('update');



form.addEventListener('submit',function(e){
    e.preventDefault();
    let valname = eventName.value;
    let  valdate = date.value;

    let triggerBtn = e.submitter;
    if(triggerBtn.id === 'create'){
        console.log(triggerBtn);
        console.log(valname,valdate);
        manageDate.createEvent(valname,valdate);
        manageUI.loadTable(manageDate.getAllEvents());
    }else if(triggerBtn.id === 'update'){
        
        manageDate.updateEvent(updateBtn.name,valname,valdate);
        eventName.value = "";
        date.value = "";
        manageUI.loadTable(manageDate.getAllEvents());

        createSection.classList.remove('hide');
        updateSection.classList.add('hide');   
    }else if(triggerBtn.id == 'cancel'){
        eventName.value = "";
        date.value = "";
        createSection.classList.remove('hide');
        updateSection.classList.add('hide');   
    }
    // console.log(manageDate.UpdateDates());     
});


table.addEventListener('click',function(e){
    console.log(e.target);

    if(e.target.name == 'edit'){
        let id = e.target.id;
        let data = manageDate.getSingleEvent(id);

        let ename = data.eventName;
        let edate = data.date;

        eventName.value = ename;
        date.value = edate;

        createSection.classList.add('hide');
        updateSection.classList.remove('hide');
        updateBtn.name = id;
    }else if(e.target.name == 'delete'){
        let id = e.target.id;
        manageDate.deleteRecord(id);
    }
})


let filter = document.getElementById('filter');

filter.addEventListener("change", function(e){
    console.log(e.target.value);
    if(e.target.value != "All"){
        let data = manageDate.filterEvent(e.target.value);
        console.log(data);
        manageUI.loadTable(data);
    }else{
        let data = manageDate.getAllEvents();
        manageUI.loadTable(data);
    }
    
    
})

