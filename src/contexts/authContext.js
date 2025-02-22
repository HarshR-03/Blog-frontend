import {createContext} from 'react';

export const AuthContext = createContext({isloggedin: false});
export const AuthReducerContext = createContext(null);

export function AuthReducer(state,action){
    switch(action.type){
        case "LOGIN":{
            const token = localStorage.getItem('authToken');
            if(token==null){
                throw("Error: token not set in local storage")
            }
            else{
                return {...state,isloggedin:true}
            }
        }
        case "LOGOUT":{
            const token = localStorage.getItem('authToken');
            console.log(token)
            if(token != null){
                console.log("ok")
                localStorage.removeItem('authToken');
            }
            return {...state,isloggedin:false}
        }
    }
}