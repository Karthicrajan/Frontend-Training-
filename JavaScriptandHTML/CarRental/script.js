function dataModule(){
    let carList = [
        { carModel: "BMW", price: 1000 },
        { carModel: "BMW A600", price: 1500 },
        { carModel: "Audi A4", price: 1200 },
        { carModel: "Mercedes-Benz C-Class", price: 1800 },
        { carModel: "Tesla Model 3", price: 2500 },
        { carModel: "Ford Mustang", price: 2000 },
        { carModel: "Toyota Corolla", price: 900 },
        { carModel: "Honda Civic", price: 1100 }
      ];
      let currentCar;
    return{
        getAllCars(){
            return carList;
        },
        addCar(data){
            carList.push(data);
        },
        removeCar(id){
            carList.splice(id,1);
            console.log(carList);
        },
        setSelectedCar(id){
            currentCar = id;
        },
        getSelectedCar(){
            return carList[currentCar];
        },
        getPrice(){
            return carList[currentCar].price;
        }
    }
}

function loadData(){
    
    return {
        diplayCars(cars){
            let list = document.getElementById('list');
            
            list.innerHTML = '';
            cars.forEach((item,id) => {
                let div = document.createElement('div');
                div.classList.add('col');
                div.innerHTML = `<div class="col">
                    <div class="card text-center mb-3" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${item.carModel}</h5>
                          <p class="card-text">Price per Day : ${item.price}</p>
                          <a href="#" class="btn btn-primary" id="${id}">Book Now</a>
                        </div>
                      </div>
                  </div>`
                  list.appendChild(div);
            });
        },
        displayManageCars(cars){
            let manageList = document.getElementById('car-mangeList');
            manageList.innerHTML = '';
            cars.forEach((item,id) =>{
                let div = document.createElement('div');
                div.classList.add('col');
                div.innerHTML = `<div class="col">
                    <div class="card text-center mb-3" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${item.carModel}</h5>
                          <p class="card-text">Price per Day : ${item.price}</p>
                          <a href="#" class="btn btn-primary" id="${id}">Remove</a>
                        </div>
                      </div>
                  </div>`
                  manageList.appendChild(div);
            })
        },
        loadDataintoForm(data){
            let carModel = document.getElementById('book-calModel');
            let pricePerDay = document.getElementById('book-price');

            carModel.value = data.carModel;
            pricePerDay.value = data.price; 
        }   
    }
}

let manageData = dataModule();
let manageUI = loadData();
manageUI.diplayCars(manageData.getAllCars());
manageUI.displayManageCars(manageData.getAllCars());


let navHome = document.getElementById('nav-home');
let navAdmin = document.getElementById('nav-admin');
let navBooking = document.getElementById('nav-booking');

let homePage = document.getElementById('homePage');
let adminPage = document.getElementById('adminPage');
let bookingPage = document.getElementById('BookingPage');


let createForm = document.getElementById('create-form');

//submit
createForm.addEventListener('submit',function(){
    let model = document.getElementById('calModel');
    let price = document.getElementById('price');

    let data = {
        carModel : model.value,
        price : price.value,
    }
    manageData.addCar(data);
    console.log(manageData.getAllCars());
    manageUI.displayManageCars(manageData.getAllCars());
    model.value = '';
    price.value = '';
})

let manageCarList = document.getElementById('car-mangeList');
//mange

manageCarList.addEventListener('click', function(e){
    console.log("click");
    console.log(e.target.tagName);
    if(e.target.tagName === 'A'){
        let id = e.target.id;
        console.log(id);
        manageData.removeCar(id);
        manageUI.displayManageCars(manageData.getAllCars());
    }
})

//bookclick

let bookcars = document.getElementById('list');

bookcars.addEventListener('click',function(e){
    console.log(e.target.tagName);
    if(e.target.tagName == 'A'){
        manageData.setSelectedCar(e.target.id);
        homePage.classList.add('hide');
        adminPage.classList.add('hide');
        bookingPage.classList.remove('hide');

        manageUI.loadDataintoForm(manageData.getSelectedCar());
    }
})

//seting price
let endDate = document.getElementById('end-date');
let startDt = document.getElementById('start-date');
let totalPrice = document.getElementById('total-price');
let isValid = true;
let errSt = document.getElementById('err-start');
let errEnd = document.getElementById('err-end');


endDate.addEventListener('change',function(e){
    console.log("end data");
    let start = startDt.value;
    let startDate = new Date(start);
    let endDate = new Date(e.target.value);

    let dt1 = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    let dt2 = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    console.log(dt1,dt2);
    
    
    if(dt1 < dt2){
        errEnd.classList.add('hide');
        errSt.classList.add('hide');
        isValid = true;
        console.log(true);
    }else{
        isValid = false;
        errEnd.classList.remove('hide');
        errSt.classList.remove('hide');
        console.log(false);
    }

    let time = Math.abs(dt2 - dt1);
    let dayDiff = Math.ceil(time / (1000 * 60 * 60 * 24));

    let total = manageData.getPrice() * dayDiff;
    console.log(total);

    totalPrice.value = total;

    
})
//confirm

let bookbtn = document.getElementById('book-form');
bookbtn.addEventListener('submit',function(e){
    e.preventDefault(); 
    if(isValid){
        alert("Car booked");
    }
})
navAdmin.addEventListener('click', function(){
    manageUI.displayManageCars(manageData.getAllCars());
    manageUI.diplayCars(manageData.getAllCars());
    homePage.classList.add('hide');
    adminPage.classList.remove('hide');
    bookingPage.classList.add('hide');
})

navHome.addEventListener('click', function(){
    manageUI.displayManageCars(manageData.getAllCars());
    manageUI.diplayCars(manageData.getAllCars());
    homePage.classList.remove('hide');
    adminPage.classList.add('hide');
    bookingPage.classList.add('hide');
})

navBooking.addEventListener('click', function(){
    manageUI.diplayCars(manageData.getAllCars());
    homePage.classList.add('hide');
    adminPage.classList.add('hide');
    bookingPage.classList.remove('hide');
})