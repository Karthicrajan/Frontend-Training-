// import { useDispatch } from "react-redux";

export const fetchProducts =  () => {
    const dispatch = useDispatch();
    return async function(dispatch){
        const res = await fetch('https://fakestoreapi.com/products').then(res => res.json()).then((data) =>{
        
            const newRecord = data.map((item) => ({
              ...item,isAdded : false,
            }))
    
            return newRecord;
        })
        
        dispatch({type: "STORE_PRODUCT",
            payload : res})
    }

    
   
}


export const storeProduct = (products) =>{
    return {
        type: "STORE_PRODUCT",
        payload : products,
    }
}

export const setSelectProduct = (product) =>{
    return{
        type : "SET_SELECT",
        payload : product,
    }
}
export const addtoCart = (product) =>{
    return {
        type : "ADD_CART",
        payload : {id : product},
    }
}
export const removeCard = (product) =>{
    return {
        type : "REMOVE_CART",
        payload : {id : product},
    }
}