const getData = async () => {
  //  let res = await fetch("https://jsonplaceholder.typicode.com/photos?albumId=1");
  let res = await fetch("https://fakestoreapi.com/products");
   let data = await res.json();
   let elem = document.getElementById('list');
   let list = document.getElementById('list');
  console.log(data);

   data.forEach((item,index) =>{
    let temp = document.createElement('div');
     temp.innerHTML = `<div class="col">
              <div class="card text-center mb-3" style="width: 18rem;">
                  <div class="card-body">
                    <img class="card-image" src=${item.image}>
                    <h5 class="card-title">${item.title}</h5>
                    <span>Price : ${item.price}<span><br>
                    <a href="http://127.0.0.1:5500/eCommerce/ProductDetails/details.html?id=${item.id}" class="btn btn-warning buy-btn cart-bbt">Buy</a>
                    
                  </div> 
                </div>
            </div>`
  //   temp.innerHTML = `<div class="col">
  //   <div class="card text-center mb-3" style="width: 18rem;">
  //       <div class="card-body">
  //         <img class="card-image" src=${item.image}>
  //         <h5 class="card-title">${item.title}</h5>
  //         <span>Price : ${item.price}<span><br>
  //         <a href="#" name=${index} id="item-card" class="btn btn-warning buy-btn cart-bbt">Buy</a>
          
  //       </div> 
  //     </div>
  // </div>`
            list.appendChild(temp);

})

// list.addEventListener('click', function(e){
//   if(e.target.tagName === 'A'){
//     let cur = data[e.target.name];

//     console.log(cur);

//     sessionStorage.setItem('cardData',JSON.stringify(cur));

//     console.log(sessionStorage.getItem('cardData'));

//     window.location = "http://127.0.0.1:5500/eCommerce/ProductDetails/details.html";
//   }
// })
  
}




getData();