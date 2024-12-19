import { createSlice } from "@reduxjs/toolkit";

export const usercreateSlice = createSlice({
    name: 'usercreate',
    initialState:{
        signupuser:[],
        login:null
    },
    reducers:{
        setSignupuser: (state,action)=>{
            state.signupuser.push(action.payload);
            // window.localStorage.setItem('signupuser',JSON.stringify(action.payload))
            console.log(action.payload)
        },
       
        
        setLogin:(state,action)=>{
            state.login=action.payload;
            window.localStorage.setItem('login',JSON.stringify(action.payload))
        },

        logoutuser:(state)=>{
               state.login=null;
               window.localStorage.removeItem('login')
               window.localStorage.removeItem('medicine_list')

        },

        setUserFromLocalStorage: (state)=>{
            var user = window.localStorage.getItem('login');
            if(user){
                user = JSON.parse(user);
                state.login = user;
            }else{
                state.login = null;
            }
        }
    }
});

export const {setSignupuser,setLogin,logoutuser,setUserFromLocalStorage} = usercreateSlice.actions
export default usercreateSlice.reducer;