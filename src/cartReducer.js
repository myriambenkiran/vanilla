import products from './json/productnew.json';
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from './action-types.js'


const initState = {
    items: products,
    addedItems:[],
    totalQuantity:0,
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let newQuantity = state.totalQuantity + 1
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + parseFloat(addedItem.price),
                  totalQuantity: newQuantity,
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + parseFloat(addedItem.price)
            
            return{
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
        return{
            ...state,
            addedItems: new_items,
            totalQuantity: newQuantity,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
        let newQuantity = state.totalQuantity + 1
          addedItem.quantity += 1 
          let newTotal = state.total + parseFloat(addedItem.price)
          return{
              ...state,
              total: newTotal,
              totalQuantity: newQuantity
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        let newQuantity = state.totalQuantity - 1
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - parseFloat(addedItem.price)
            return{
                ...state,
                addedItems: new_items,
                totalQuantity: newQuantity,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - parseFloat(addedItem.price)
            return{
                ...state,
                totalQuantity: newQuantity,
                total: newTotal
            }
        }
        
    }
    return state
}
export default cartReducer;