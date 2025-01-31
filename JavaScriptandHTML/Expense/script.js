function dataModul(){
    let data = [{expenseName : "Goa Trip",amount : 200,category : "Food",date : "2025-01-18"},{expenseName : "Goa Trip",amount : 200,category : "Travel",date : "2025-01-28"},{expenseName : "Goa Trip",amount : 200,category : "Shopping",date : "2024-12-01"}];
    let amountSpend = { 
        food: 0,
        travel: 0,
        shopping : 0,
    }
    return {
        createRecord(record){
            data.push(record);
            console.log(data);
        },
        getAllRecord(){
            return data;
        },
        getRecord(ind){
            return data[ind];
        },
        updateRecord(ind,record){
            ind = parseInt(ind);
            data[ind] = record;
            console.log(ind,data);
        },
        deleteRecord(ind){
            data.splice(ind,1);
        },
        calculateAmount(){
            amountSpend = { 
                food: 0,
                travel: 0,
                shopping : 0,
            }
            data.forEach(item =>{
                if(item.category === "Food"){
                    amountSpend.food += parseInt(item.amount);
                }else if(item.category === "Travel"){
                    amountSpend.travel += parseInt(item.amount);
                }else if(item.category === "Shopping"){
                    amountSpend.shopping += parseInt(item.amount);
                }
            })

            return amountSpend;
        },
        getFilteredData(input,ftcat,fttm){
            let record = data.filter((item) => {
                if(ftcat === 'All' && fttm === 'All'){
                    return true;
                }
                if(fttm === 'All' && ftcat != 'All'){
                    if(ftcat === item.category){
                        return true;
                    }
                }else if(fttm != 'All' && ftcat === 'All'){
                    let window = new Date();
                    let today = new Date();
                    if(fttm === 'oneweek'){
                        window.setDate(today.getDate() - 7);
                    }else if(fttm === 'onemonth'){
                        window.setDate(today.getMonth() - 1);
                    }else if(fttm === 'sixmonth'){
                        window.setDate(today.getMonth() - 6);
                    }else if(fttm === 'oneyear'){
                        window.setDate(today.getFullYear() - 1);
                    }
                    let objDate = new Date(item.date);
                    if(window < objDate && objDate <= today){
                        return true;
                    }
                }else if(fttm != 'All' && ftcat != 'All'){
                    let window = new Date();
                    let today = new Date();
                    if(fttm === 'oneweek'){
                        window.setDate(today.getDate() - 7);
                    }else if(fttm === 'onemonth'){
                        window.setDate(today.getMonth() - 1);
                    }else if(fttm === 'sixmonth'){
                        window.setDate(today.getMonth() - 6);
                    }else if(fttm === 'oneyear'){
                        window.setDate(today.getFullYear() - 1);
                    }
                    let objDate = new Date(item.date);
                    if(window < objDate && objDate <= today && item.category === ftcat){
                        return true;
                    }
                }
            })

            let fnres = record.filter((item) =>{
                return item.expenseName.startsWith(input);
            })
            return fnres;
        }
    }

}

function manageUI(){
    let cardicons = ['<i class="fa-solid fa-bowl-food"></i>','<i class="fa-solid fa-car"></i>','<i class="fa-solid fa-cart-shopping"></i>'];
    let list = document.getElementById('card-list');
    let hdFood = document.getElementById('hd-food');
    let hdShopping = document.getElementById('hd-shopping');
    let hdTravel = document.getElementById('hd-travel');
    return {
        renderList(data){
            list.innerHTML = '';
            data.forEach((item,index) => {
                let temp = document.createElement('div');
                temp.innerHTML = ` <div class="card ex-card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-1">
                                    <div class="list-cat-icon-con">
                                        <span class=${item.category}>${item.category === "Travel" ? cardicons[1] : item.category === "Food" ? cardicons[0] : cardicons[2]}</i></span></span>
                                    </div>
                                </div>
                                <div class="col-sm-11">
                                    <div class="list-card-body">
                                        <div class="list-card-details">
                                            <span class="card-tag "><b>${item.category}</b></span>
                                            <h4>${item.expenseName}</h4>
                                            <span>${item.date}</span>
                                        </div>
                                        <div class="list-card-action">
                                            <h4>${item.amount}</h4>
                                            <div class="action-section">
                                                <a href="#" class="card-ac-icon card-edit" id="edit" name=${index}><i class="fa-solid fa-pen-to-square"></i></a>
                                                <a href="#" class="card-ac-icon card-delete" id="delete" name=${index}><i class="fa-solid fa-trash"></i></a>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                              </div>
                        </div>
                    </div>`;

                    list.appendChild(temp);
            });
        },
        updateAmount(obj){
            hdFood.innerText = obj.food;
            hdShopping.innerText = obj.shopping;
            hdTravel.innerText = obj.travel;
        }

    }
}
let manageData = dataModul();
let renderUI = manageUI();
renderUI.renderList(manageData.getAllRecord());

let addForm = document.getElementById('add-form');
let nameE = document.getElementById('name-expense');
let amount = document.getElementById('amount');
let category = document.getElementById('category');
let datee = document.getElementById('date');

let openCreate = document.getElementById('open-create');
let home = document.getElementById('home');
let exCreate = document.getElementById('ex-create');

let fmcreate = document.getElementById('btn-create');
let fmupdate = document.getElementById('btn-update');

let carList = document.getElementById('card-list');

let clickCard;

carList.addEventListener('click',function(e){
    
    if(e.target.tagName === 'I'){
        let clicked = e.target.closest('a');

    if(clicked && clicked.id === 'edit'){
        clickCard = clicked.name;
        home.classList.add('hide');
        exCreate.classList.remove('hide');
        console.log(clickCard);

        let clickData = manageData.getRecord(clickCard);

        nameE.value = clickData.expenseName;
        category.value = clickData.category;
        amount.value = clickData.amount;
        let dt = new Date(clickData.date);

        datee.value = clickData.date;
        
        console.log(clickData.date);

        fmcreate.classList.add('hide');
        fmupdate.classList.remove('hide');

    }else if(clicked && clicked.id === "delete"){
        clickCard = clicked.name;
        manageData.deleteRecord(clickCard);
        renderUI.renderList(manageData.getAllRecord());

    }
    console.log(clicked.closest('a'));
    }
    renderUI.updateAmount(manageData.calculateAmount());
});

openCreate.addEventListener('click',function(){
    home.classList.add('hide');
    exCreate.classList.remove('hide');
})

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    let triggerBtn = e.submitter;
    console.log(triggerBtn);
    console.log(date.value);

    let data = {
        expenseName : nameE.value,
        amount : amount.value,
        category : category.value,
        date : datee.value
    }
    nameE.value = '';
    category.value = '';
    amount.value = null;
    date.value = '';
    console.log(triggerBtn);

    if(triggerBtn.id === 'submit'){
        manageData.createRecord(data);
        renderUI.renderList(manageData.getAllRecord());
        home.classList.remove('hide');
        exCreate.classList.add('hide');
    }else if(triggerBtn.id === 'Update'){
        manageData.updateRecord(clickCard,data);
        alert("record Updated0");
        renderUI.renderList(manageData.getAllRecord());
        console.log(clickCard,manageData.getAllRecord());
        home.classList.remove('hide');
        exCreate.classList.add('hide');
    }
    
    renderUI.updateAmount(manageData.calculateAmount());

    
   

});


let backbtn = document.getElementById('back');

backbtn.addEventListener('click',function(){
    home.classList.remove('hide');
    exCreate.classList.add('hide');
    nameE.value = '';
    category.value = '';
    amount.value = null;
    date.value = '';
})

let inputSearch = document.getElementById('ft-src');
let ftcat = document.getElementById('ft-cat');
let fttm = document.getElementById('ft-tm');



inputSearch.addEventListener('keyup',function(e){
    console.log(e.target);

    if(inputSearch.value === '' && ftcat.value == 'All' && fttm.value == 'All'){
        renderUI.renderList(manageData.getAllRecord());
    }else{
        let data = manageData.getFilteredData(inputSearch.value,ftcat.value,fttm.value);
        console.log(data);
        renderUI.renderList(data);
    }

})

ftcat.addEventListener('change',function(e){
    console.log(e.target);

    if(inputSearch.value === '' && ftcat.value == 'All' && fttm.value == 'All'){
        renderUI.renderList(manageData.getAllRecord());
    }else{
        let data = manageData.getFilteredData(inputSearch.value,ftcat.value,fttm.value);
        console.log(data);
        renderUI.renderList(data);
    }

})

fttm.addEventListener('change',function(e){
    if(inputSearch.value === '' && ftcat.value == 'All' && fttm.value == 'All'){
        renderUI.renderList(manageData.getAllRecord());
    }else{
        let data = manageData.getFilteredData(inputSearch.value,ftcat.value,fttm.value);
        console.log(data);
        renderUI.renderList(data);
    }

})

function setTodayDate(){
    datee.value = new Date().toJSON().slice(0, 10);;
}
setTodayDate();

let res = manageData.getFilteredData("goa","All","onemonth");

console.log(res);


renderUI.updateAmount(manageData.calculateAmount());