
const initalSate = {
    listProducts: [{
        product_img:  "https://static.wixstatic.com/media/c22c23_3ab3d3acd73843deba1dece7b2254e2f~mv2.jpg/v1/fill/w_361,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_3ab3d3acd73843deba1dece7b2254e2f~mv2.jpg",
        product_name: 'JP Gaming Laptop 15.6" Laptop 256GB',
        price: "85.00",
        offer_price: null,
    },{
        product_img:  "https://static.wixstatic.com/media/c22c23_0fa2a9bb97f443658acb747221ff337b~mv2.jpg/v1/fill/w_361,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_0fa2a9bb97f443658acb747221ff337b~mv2.jpg",
        product_name: 'In-ear Noise Cancelling & Isolating Wireless Earbuds',
        price: "85.00",
        offer_price: "70.00"
    },{
        product_img:  "https://static.wixstatic.com/media/c22c23_9a6d29ecf9c640b28cc79f695e9fb3c2~mv2.png/v1/fill/w_361,h_361,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_9a6d29ecf9c640b28cc79f695e9fb3c2~mv2.png",
        product_name: 'JP - Space Tablet 10.4" Wi-Fi 32GB',
        price: "85.00",
        offer_price: null,  
    },
    {
        product_img:  "https://static.wixstatic.com/media/c22c23_a055ae2dfe6f457b9c2f6f3fa6d95126~mv2.png/v1/fill/w_361,h_361,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_a055ae2dfe6f457b9c2f6f3fa6d95126~mv2.png",
        product_name: 'Ocean Pro 11 - 12.3" Touch Screen',
        price: "85.00",
        offer_price: "70.00"   
    },
    {
        product_img:  "https://static.wixstatic.com/media/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg/v1/fill/w_361,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg",
        product_name: 'Shel 50" Class LED 4K UHD Smart TV',
        price: "85.00",
        offer_price: "70.00"    
    },
    {
        product_img:  "https://static.wixstatic.com/media/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg/v1/fill/w_361,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg",
        product_name: 'Fitboot Inspire Fitness Tracker With Heart Rate Tracking',
        price: "85.00",
        offer_price: "70.00" 
    },
    {
        product_img:  "https://static.wixstatic.com/media/c22c23_527e6c6f3d944fb88c80907c2f754afb~mv2.jpg/v1/fill/w_361,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_527e6c6f3d944fb88c80907c2f754afb~mv2.jpg",
        product_name: 'Smartphone Z Pixel Max 128GB Unlocked',
        price: "85.00",
        offer_price: "70.00" 
    },
    {
        product_img:  "https://static.wixstatic.com/media/c22c23_a78a3c8e4c63423ab6967f12ca17e447~mv2.jpg/v1/fill/w_361,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_a78a3c8e4c63423ab6967f12ca17e447~mv2.jpg",
        product_name: '65" Class Nano LED 4K UHD Smart TV',
        price: "85.00",
        offer_price: "70.00"  
    },{
        product_img:  "https://static.wixstatic.com/media/c22c23_1752807cf4f14909a5928ba0cedb339e~mv2.jpg/v1/fill/w_361,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_1752807cf4f14909a5928ba0cedb339e~mv2.jpg",
        product_name: 'White Buds Wireless Earbud Headphones',
        price: "85.00",
        offer_price: "70.00"  
    },{
        product_img:  "https://static.wixstatic.com/media/c22c23_7b3b59adc71d48aea694647bfb4385b8~mv2.jpg/v1/fill/w_361,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_7b3b59adc71d48aea694647bfb4385b8~mv2.jpg",
        product_name: 'SDK Portable Bluetooth Speaker',
        price: "85.00",
        offer_price: "70.55"  
    },{
        product_img:  "https://static.wixstatic.com/media/c22c23_c25f748ee2264db6a3767d99717a2b84~mv2.jpg/v1/fill/w_361,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_c25f748ee2264db6a3767d99717a2b84~mv2.jpg",
        product_name: 'Megapixel Waterproof Mini Digital Camera',
        price: "85.00",
        offer_price: "70.00" 
    },{
        product_img:  "https://static.wixstatic.com/media/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg/v1/fill/w_361,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg",
        product_name: 'HKI Tech Quadcopter Drone With 360 Camera & Controller',
        price: "85.00",
        offer_price: "85.00"
    }
],
    selectId: null,
}

export const productReducer = (state = initalSate,{type,payload}) => {

    switch(type){
        case "STORE_PRODUCT":
            return {...state,allProducts : payload};

        case "SET_SELECT":
            return {...state,selectId : payload};
        default :
        return state;
    }
}