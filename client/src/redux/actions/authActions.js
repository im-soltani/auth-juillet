import axios from "axios"
import { GET_AUTH_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../constants/ActionTypes"


//register USER 
export const registerUser = (formData) => async (dispatch) => {
    try {
        const res = await axios.post('api/auth/register', formData)
        dispatch({
            type: REGISTER_USER,
            payload: res.data //{msg:'User registered with success',user,token}

        })
    }
    catch (error) { console.log(error)
    const {errors,msg}=error.response.data
    if(Array.isArray(errors)){
        errors.forEach((err)=>alert(err.msg))
    }
    }
}
// login user
export const loginUser=(formData)=>async (dispatch)=>{
    try{
        const res =await axios.post("/api/auth/login",formData)
        dispatch({
            type:LOGIN_USER,
            payload:res.data 
        })
    }
    catch (error) { console.log(error)
        const {errors,msg}=error.response.data
        if(Array.isArray(errors)){
            errors.forEach((err)=>alert(err.msg))
        }
        }
    }
//auth user
export const getAuthUser=()=>async (dispatch)=>{
    try{
     //headers
     const config={
        headers:{
            "x-auth-token":localStorage.getItem("token")
        }

     }
     const res=await axios.get("/api/auth/user",config)
dispatch({
    type:GET_AUTH_USER,
    payload:res.data
})

    }
    catch(error){
        console.log(error)

    }
}

export const logout=()=>(dispatch)=>{
    dispatch({
        type:LOGOUT_USER,
    })
}