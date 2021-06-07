import products from './json/productnew.json';
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, CLEAR_CART } from './action-types.js'


const initState = {
    items: products,
    addedItems:[],
    totalQuantity:0,
    total: 0

}

const initializer = (initialValue = initState) =>{
  let value = initialValue;
  //localStorage.clear();
  if(localStorage.getItem("localCart")){
    if(localStorage.getItem("localCart") !== 'undefined' ){
      value = JSON.parse(localStorage.getItem("localCart")) || initialValue;
    }
  }
  console.log(value);
  return value;
};

const cartReducer= (state = initializer(),action)=>{

   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let newQuantity = state.totalQuantity + 1
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1
            console.log(state); 
             state = {
                ...state,
                 total: state.total + parseFloat(addedItem.price),
                  totalQuantity: newQuantity,
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + parseFloat(addedItem.price)

            state = {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                totalQuantity: newQuantity,
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (parseFloat(itemToRemove.price) * itemToRemove.quantity )
        let newQuantity = state.totalQuantity - itemToRemove.quantity
        console.log(itemToRemove)
        state = {
            ...state,
            addedItems: new_items,
            totalQuantity: newQuantity,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.addedItems.find(item=> item.id === action.id)
        let newQuantity = state.totalQuantity + 1
          addedItem.quantity += 1 
          let newTotal = state.total + parseFloat(addedItem.price);
          console.log(state.addedItems); 
          state = {
              ...state,
              total: newTotal,
              totalQuantity: newQuantity
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.addedItems.find(item=> item.id === action.id) 
        let newQuantity = state.totalQuantity - 1
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - parseFloat(addedItem.price)
            state = {
                ...state,
                addedItems: new_items,
                totalQuantity: newQuantity,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - parseFloat(addedItem.price)
            state = {
                ...state,
                totalQuantity: newQuantity,
                total: newTotal
            }
        }
        
    }

    if(action.type === CLEAR_CART){
        state = initState;
    }

    localStorage.setItem("localCart", JSON.stringify(state)); 

    return state
}
export default cartReducer;