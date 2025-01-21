//buildTable ---> to build table, Methods -> (buildHeader,buildBody)
//ManageRecords --> to encapsulate all the record data, this my only have access to change the data Method --> (createRecord,loadDataintoTable,deleteRecord,getRecord,updateRecord)
//ManageForm ---> to handle all the Form action, Methods -> (formReload,validateWithRex,appendErrorMessage,clearErrorMessage);





//this function will build the table
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
                editBtn.classList.add('ac-btn','btn-pr');

                let DeleteBtn = document.createElement('button');

                DeleteBtn.innerText = 'Delete';
                DeleteBtn.setAttribute('id',recId);
                DeleteBtn.setAttribute('name','delete');

                DeleteBtn.classList.add('ac-btn','btn-se');
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
            tbBody.innerHTML = ''
        }
    }

}

let table = document.getElementById('table');

let tb = buildTable(table);
tb.buildHeader(['Name','Age','Phone Number','Gender','Subject','D.O.B','Location','Action']);



let handleData = ManageRecords();
handleData.loadDataintoTable();
let formHandler = ManageForm();
formHandler.formReload();

let form = document.getElementById('form');
let submitSection = document.querySelector('.create');
let updateSection = document.querySelector('.update');
let cancel = document.querySelector('#cancel');

//actions
table.addEventListener('click',function(e){
    console.log(e.target,e.target.getAttribute('name') );
    if(e.target.tagName === 'BUTTON'){
        let curId = e.target.getAttribute('id');

        if(e.target.getAttribute('name') === 'delete'){
            console.log("delete btn clicked");
            handleData.deleteRecord(curId);
        }

        if(e.target.getAttribute('name') === 'edit'){
            submitSection.classList.add('hide');
            updateSection.classList.remove('hide');
            let records = handleData.getRecord(curId);
            formHandler.loadDataIntoForm(records,curId);
            console.log(records);
        }
        
    }
});
cancel.addEventListener('click', function(){
    submitSection.classList.remove('hide');
    updateSection.classList.add('hide');
    formHandler.clearForm();
})


//submit
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(event.target.tagName);
    let triggeredBtn = event.submitter;

    console.log(triggeredBtn);

    let isValid = formHandler.formValidation();
    console.log(isValid, "submit");
    if(!isValid){
        return;
    }
    let value = formHandler.getFormData();
    
    if(triggeredBtn.id === 'submit'){
        handleData.createRecord(value);
        console.log("clicked");
        handleData.loadDataintoTable();
        formHandler.clearForm();
    }

    if(triggeredBtn.id === 'update'){

        let id = document.getElementById('update').name;
        console.log(id);
        handleData.updateRecord(value,id);
        formHandler.clearForm();
        submitSection.classList.remove('hide');
        updateSection.classList.add('hide');
    }
});

function getValFromCheckBox(subject){
    let selsub = [];

    for(item of subject){
        if(item.checked){
            selsub.push(item.value);
        }
    }
    return selsub;
}
function getRadio(gender){
    let selGe = '';
    for(item of gender){
        if(item.checked){
            selGe = item.value;
        }
    }
    return selGe;
}

//this method will handle the total records
function ManageRecords(){
    
    let DataSet = [{name : 'karthicrajan',age : 21,phone: 9698669686,gender : 'male',subjects : ['java','DSA'],dob : '19/12/2002',location : 'salem'},
    {name : 'Arun',age : 21,phone: 6383043766,gender : 'male',subjects : ['java','DBMS'],dob : '19/12/2002',location : 'salem'}];
    
    return {
        createRecord : function(newRecord){
            DataSet.push(newRecord);
            console.log(DataSet);
            this.loadDataintoTable();
        },
        loadDataintoTable : function(){
            tb.clearBody();
            DataSet.forEach((item,index) =>{
                tb.buildBody([item.name,item.age,item.phone,item.gender,item.subjects.join(',', ', '),item.dob,item.location],index);
            })  
        },
        deleteRecord : function(index){
            DataSet.splice(index,1);
            this.loadDataintoTable();

        },
        getRecord : function(index){
            return {record : DataSet[index], id : index};
        },
        updateRecord : function(newRc,index){
            DataSet[index] = newRc;
            tb.clearBody();
            this.loadDataintoTable();
            console.log(DataSet);
        }
    }



}




//this function will manage all the form data
function ManageForm(){
    let namecr = document.getElementById('name');
    let age = document.getElementById('age');
    let phoneNumber = document.getElementById('phone-no');
    let gender = document.getElementsByName('gender');
    let selGe = getRadio(gender);
    let genfield = document.getElementById('gen');

    let subject = document.getElementsByName('subject');
    let selsub = getValFromCheckBox(subject);
    let subfield = document.getElementById('subject');

    let dob = document.getElementById('dob');
    let location = document.getElementById('location');
    let updateBtn = document.getElementById('update');

    return {
        formReload : function(){
            namecr = document.getElementById('name');
            age = document.getElementById('age');
            phoneNumber = document.getElementById('phone-no');
            gender = document.getElementsByName('gender');
            selGe = getRadio(gender);

            subject = document.getElementsByName('subject');
            selsub = getValFromCheckBox(subject);

            dob = document.getElementById('dob');
            location = document.getElementById('location');
        },
        clearForm : function(){
            namecr.value = '';
            age.value = '';
            phoneNumber.value = '';
            dob.value = '',
            location.value = ''
            subject.forEach(item =>{
                item.checked = false;
            })
            for(item of gender){
                item.checked = false;
            }
        },
        getFormData : function(){

            this.formReload();

            let value = {
                name: namecr.value,
                age : age.value, 
                phone : phoneNumber.value,
                gender : selGe,
                subjects : selsub,
                dob : dob.value,
                location : location.value
           }
            return value;
        },
        loadDataIntoForm : function(recordData,id){
            this.clearForm();
            recordData = recordData.record;
            
            namecr.value = recordData.name;
            age.value = recordData.age;
            phoneNumber.value = recordData.phone;
            dob.value = recordData.dob,
            location.value = recordData.location

            //checkBoxdata 
            for(item of subject){
                if(recordData.subjects.includes(item.value)){
                    item.checked = true;
                }
            }
            //gender
            for(item of gender){
                if(item.id === recordData.gender){
                    item.checked = true;
                }
                
            }
            //id for update btn
            console.log(update);
            updateBtn.setAttribute('name', id);
            
        },
        formValidation : function(){
            
            this.clearErrorMessage();
            this.formReload();
            let names = namecr.value;
            let ageval = age.value;
            let mobile = phoneNumber.value;
            let gen = selGe;
            let su = selsub;
            let db = dob.value;
            let loc = location.value;
            console.log(names);
            console.log(!loc);
            if(namecr.value.length <= 0 || !this.validateWithRex(names,'^[a-zA-Z \s]+$')){
                this.appendErrorMessage(namecr,"Pleace Enter the valid Data");
                return false;
            }
            if(ageval <= 0 || ageval >= 101){
                this.appendErrorMessage(age,"Pleace Enter valid Age");
                return false;
            }
            if(!this.validateWithRex(mobile,'^[0-9]{10}$')){
                this.appendErrorMessage(phoneNumber,"Please Enter valid phone no");
                return false;
            }
            if(!gen){
                this.appendErrorMessage(genfield,"Please Select gender");
                return false;
            }
            if(su.length <= 0){
                this.appendErrorMessage(subfield,"Please Select Subject");
                return false;
            }
            if(!this.validateWithRex(db,'^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$')){
                this.appendErrorMessage(dob,"Please enter Valid Date");
                return false;
            }
            if(!loc){
                this.appendErrorMessage(location,"Please Select Location");
                return false;
            }
             console.log(this.validateWithRex(namecr));
            
            return true;
        },
        validateWithRex(inputData,regx){
            let regxx = new RegExp(regx);
            let res = regxx.test(inputData);
            console.log(inputData, regx, res);
            if(!res){
                return false;
            }
            return true;
        },
        appendErrorMessage : function(element,message){
            console.log(element);
            let parent = element.closest('.field-set');
            let errorField = parent.children[3];
            console.log(errorField, parent);
            errorField.classList.remove('hide');
            errorField.innerHTML = message;
            
        },
        clearErrorMessage : function(){
            let parent = document.querySelectorAll('.error');
            for(item of parent){
                item.classList.add('hide');
            }
            
        }
    }
}