
const initalSate = {
    listProducts: [],
    selectId: null,
}

export const productReducer = (state = initalSate,{type,payload}) => {

    switch(type){
        case "STORE_PRODUCT":
            return {...state,allProducts : payload};

        case "SET_SELECT":
            return {...state,selectId : payload};

        case "ADD_CART":
            return {
                ...state, allProducts : state.allProducts.map((item) => item.id == payload.id ? {...item,isAdded : true} : item)
            }
        case "REMOVE_CART":
            return {
                ...state, allProducts : state.allProducts.map((item) => item.id == payload.id ? {...item,isAdded : false} : item)
            }
        default :
        return state;
    }
}