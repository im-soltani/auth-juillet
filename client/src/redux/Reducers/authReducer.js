const { REGISTER_USER, LOGIN_USER, GET_AUTH_USER,LOGOUT_USER } = require("../constants/ActionTypes")

const initState={
    user:null,
    isAUTH:false,
    msg:null,
}
const authReducer=(state=initState,{type,payload})=>{
    switch(type){
        case REGISTER_USER :
            case LOGIN_USER:
                localStorage.setItem("token",payload.token)
            return{
                ...state,
                isAUTH:true,
                msg:payload.msg,
                ...payload,
            }
            case GET_AUTH_USER:
                return{
                    ...state,
                    isAUTH:true,
                    ...payload,
                }
            case LOGOUT_USER:
                localStorage.removeItem('token')  
                return{
                    ...state,
                    isAUTH:false,
                    user:null,
                }  

            default:
                return state;
    }
}
export default authReducer