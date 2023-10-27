import { addToCart, decreaseProductQuantity, increaseProductQuantity, removeFromCart } from "../../BLL/utility";
import { ADD_TO_CART, DECREASE_QUANTITY_OF_PRODUCT, FETCH_CATEGORY_FAILURE, FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, INCREASE_QUANTITY_OF_PRODUCT, REMOVE_FROM_CART, SET_CURRENT_CATEGORY } from "../constantTypes/ConstantTypes";
import { useSelector } from "react-redux";
const initial_state={
    loading_category:false,
    data_category:[],
    error_category:'',
    current_category:"SELECT CATEGORY",

    
    loading_product:false,
    data_product:[],
    error_product:'',
    cart:[],

};
export const reducer=(state=initial_state,action)=>{
    
if(action.type==FETCH_CATEGORY_REQUEST){
   return{...state,loading_category:true}
}
else if(action.type==FETCH_CATEGORY_SUCCESS){
    return{...state,loading_category:false,data_category:action.payload}
}
else if(action.type==FETCH_CATEGORY_FAILURE){
    return{...state,loading_category:false,error_category:action.payload}
}
else if(action.type==SET_CURRENT_CATEGORY){
    return{...state,current_category:action.payload}
}
else if(action.type==FETCH_PRODUCT_REQUEST){
    return{...state,loading_product:true}
 }
 else if(action.type==FETCH_PRODUCT_SUCCESS){
     return{...state,loading_product:false,data_product:action.payload}
 }
 else if(action.type==FETCH_PRODUCT_FAILURE){
     return{...state,loading_product:false,error_product:action.payload}
 }
 else if(action.type==ADD_TO_CART){
      addToCart(action.payload,state.cart);
      return{...state,cart:[...state.cart]}; 
 }
else if(action.type==REMOVE_FROM_CART){
    removeFromCart(action.payload,state.cart);
      return{...state,cart:[...state.cart]}; 
 }
else if(action.type==INCREASE_QUANTITY_OF_PRODUCT){
    increaseProductQuantity(action.payload,state.cart);
    return{...state,cart:[...state.cart]};
 }
else if(action.type==DECREASE_QUANTITY_OF_PRODUCT){
    decreaseProductQuantity(action.payload,state.cart)
    return{...state,cart:[...state.cart]};
 }

else{
    return state;
}

}