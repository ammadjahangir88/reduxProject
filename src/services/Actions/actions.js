import {Add_To_Cart} from '../Constant'
import {Remove_To_Cart} from '../Constant'


export const addToCart=(data)=>{
    console.warn("action",data)
    return{
        type: Add_To_Cart,
        data: data
    }
}
export const removeToCart=(data)=>{
    console.warn("action1",data)
    return{
       
        type: Remove_To_Cart,
        
    }
}