const getData = async () => {
  //  let res = await fetch("https://jsonplaceholder.typicode.com/photos?albumId=1");
  let res = await fetch("https://fakestoreapi.com/products");
   let data = await res.json();
   let elem = document.getElementById('list');
   let list = document.getElementById('list');
  console.log(data);

   data.forEach((item) =>{
    let temp = document.createElement('div');
     temp.innerHTML = `<div class="col">
              <div class="card text-center mb-3" style="width: 18rem;">
                  <div class="card-body">
                    <img class="card-image" src=${item.image}>
                    <h5 class="card-title">${item.title}</h5>
                    <span>Price : ${item.price}<span><br>
                    <a href="http://127.0.0.1:5500/eCommerce/ProductDetails/details.html?title=${item.title}&price=${item.price}&dec=${item.description}&category=${item.category}" class="btn btn-warning buy-btn cart-bbt">Buy</a>
                    
                  </div> 
                </div>
            </div>`
            list.appendChild(temp);

})
   return data;
}
getData();