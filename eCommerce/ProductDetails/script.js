

let link = window.location.href;
let url = new URL(link);

let urlData = new URLSearchParams(url.search);

console.log(urlData.get('price'));

let details = document.getElementById('details-con');

let temp = document.createElement('div');

temp.innerHTML = `<h3 id="pd-title">${urlData.get('title')}</h3>
                <p style="font-size: x-large;"><b>Price: ${urlData.get('price')}</b></p>
                <p><b>Description :</b>${urlData.get('dec')}</p>
                <p><b>Category :</b>${urlData.get('category')}</p>
                <div>
                    <button type="button" class="btn btn-warning">Add to Cart</button>
                    <button type="button" class="btn btn-warning buy-btn">Buy Now</button>
                </div>`;

details.appendChild(temp);
