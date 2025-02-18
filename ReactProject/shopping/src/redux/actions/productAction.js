
export const setSelectProduct = (product) =>{
    return{
        type : "SET_SELECT",
        payload : product,
    }
}


export const storeProduct = (products) =>{
    return {
        type: "STORE_PRODUCT",
        payload : products,
    }
}
