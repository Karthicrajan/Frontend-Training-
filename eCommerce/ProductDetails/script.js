

let link = window.location.href;



let url = new URL(link);
console.log(url);
let urlData = new URLSearchParams(url.search);

let pdId = urlData.get('id');
console.log(pdId);


const getData = async (id) =>{
    try{
        let res = await fetch(`https://fakestoreapi.com/products/${id}`);
        let data = await res.json();
        return data;
    }catch(err){
        throw err;
    }
   
}

// console.log(urlData.get('price'));

let details = document.getElementById('details-con');

let temp = document.createElement('div');

// temp.innerHTML = `<h3 id="pd-title">${urlData.get('title')}</h3>
//                 <p style="font-size: x-large;"><b>Price: ${urlData.get('price')}</b></p>
//                 <p><b>Description :</b>${urlData.get('dec')}</p>
//                 <p><b>Category :</b>${urlData.get('category')}</p>
//                 <div>
//                     <button type="button" class="btn btn-warning">Add to Cart</button>
//                     <button type="button" class="btn btn-warning buy-btn">Buy Now</button>
//                 </div>`;


// let datas = JSON.parse(sessionStorage.getItem('cardData'));

// temp.innerHTML = `<h3 id="pd-title">${datas.title}</h3>
//                 <p style="font-size: x-large;"><b>Price:${datas.price} </b></p>
//                 <p><b>Description : </b> ${datas.description}</p>
//                 <p><b>Category : ${datas.category}</b></p>
//                 <div>
//                     <button type="button" class="btn btn-warning">Add to Cart</button>
//                     <button type="button" class="btn btn-warning buy-btn">Buy Now</button>
//                 </div>`;


getData(pdId).then((datas) =>{
        temp.innerHTML = `<h3 id="pd-title">${datas.title}</h3>
                        <p style="font-size: x-large;"><b>Price:${datas.price} </b></p>
                        <p><b>Description : </b> ${datas.description}</p>
                        <p><b>Category : ${datas.category}</b></p>
                        <div>
                            <button type="button" class="btn btn-warning">Add to Cart</button>
                            <button type="button" class="btn btn-warning buy-btn">Buy Now</button>
                        </div>`;
                        
        let img = document.getElementById("dtimage");
        let imgurl = datas.image;
        img.setAttribute('src',imgurl);
        details.appendChild(temp);

}).catch(err =>{
    console.log(err.message);
    temp.innerHTML = `<h3>${err.message}</h3>`;
    details.appendChild(temp);
})

// let img = document.getElementById("dtimage");
// let imgurl = datas.image;
// img.setAttribute('src',imgurl);
// details.appendChild(temp);




