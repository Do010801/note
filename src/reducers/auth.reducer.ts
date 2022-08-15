import { createReducer, on } from "@ngrx/store"
import * as AuthActions from "../actions/auth.actions"
import { AuthState } from "src/states/auth.state"
import { Action } from "rxjs/internal/scheduler/Action"


const initialState : AuthState ={
    idToken:"",
    error:'',
    isloading:false
    
}



export const authReducer =  createReducer(initialState,
    on(AuthActions.login, state =>state),
    on(AuthActions.loginSuccess,(state,action) => ({...state,isloading:true,idToken:action.idToken})),
    on(AuthActions.loginFailure,(state,action)=> ({...state,isloading:false,error:action.error}))
    );