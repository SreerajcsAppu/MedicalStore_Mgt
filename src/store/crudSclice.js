import { createSlice } from "@reduxjs/toolkit";
import boomarkList from "../components/blog/medicine_list";

export const crudSlice = createSlice({ 
    name: 'crud',
    initialState:{
        medicine_list:[
           {
                // id:1,
                // tittle:'one' ,
                // url:'http://localhost:3000/login',
                // date:'26/08/2024',
                // time:"2:18:54 "
            } 
        ],
        
    },
    reducers:{
       setCreate:(state,action)=>{
        if(state.medicine_list.length<5){
        state.medicine_list.push(action.payload);
        
        window.localStorage.setItem('medicine_list',JSON.stringify(state.medicine_list))
        
        }else{
            alert('you can only add up to 5 Stocks.')
        }
       } ,
       deleteBookmark: (state, action) => {
           window.localStorage.removeItem('medicine_list')
           state.medicine_list = state.medicine_list.filter(b => b.id !== action.payload)
           window.localStorage.setItem('medicine_list',JSON.stringify(state.medicine_list))
           console.log(state.medicine_list.filter(b => b.id !== action.payload))
           console.log(action.payload)
           
           },
        
        editBookmark: (state, action) => {
            const { id, tittle, url } = action.payload;
            const bookmark = state.medicine_list.find(b => b.id === id);
            if (bookmark) {
            bookmark.tittle = tittle;
            bookmark.url = url;
            window.localStorage.removeItem('medicine_list')
            window.localStorage.setItem('medicine_list',JSON.stringify(state.medicine_list))
            }
                
            
            },

            setItemFromLocalStorage: (state)=>{
                var medicine_list = window.localStorage.getItem('medicine_list');
                if(medicine_list){
                    medicine_list = JSON.parse(medicine_list);
                    state.medicine_list = medicine_list;
                }else{
                    state.medicine_list = [];
                }
            } 
    }
})
 export const{setCreate,deleteBookmark,editBookmark,setItemFromLocalStorage}=crudSlice.actions

 export default crudSlice.reducer;