import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name :"",
    token:"",
    email:"",
    userId:"",
    role:"",
    isloggedIn:false
}

export const authSlice = createSlice({
    initialState: initialState,
    name:"auth",
    reducers:{
        loggedDetails : (state,action) =>{
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.role = action.payload.role;
            state.token = action.payload.token;
            state.userId = action.payload.userId;
            state.isloggedIn = true;
        } ,
        logout : (state) =>{
            state.name = "";
            state.email ="";
            state.role ="";
            state.token="";
            state.userId="";
            state.isloggedIn=false;
        }    
    }
})


export const {loggedDetails,logout} = authSlice.actions ;
export default authSlice.reducer;